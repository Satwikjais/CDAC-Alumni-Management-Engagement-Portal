
package com.cdacalumni.authservice.service;
import org.springframework.web.client.RestTemplate;

import com.cdacalumni.authservice.config.JwtTokenProvider;
import com.cdacalumni.authservice.dto.AuthRequest;
import com.cdacalumni.authservice.dto.AuthResponse;
import com.cdacalumni.authservice.dto.RegisterRequest;
import com.cdacalumni.authservice.entity.User;
import com.cdacalumni.authservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private RestTemplate restTemplate;

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();

        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        // Set role from request, throw error if invalid
        try {
            System.out.println("[REGISTER] Incoming role: " + request.getRole());
            if (request.getRole() != null) {
                user.setRole(User.Role.valueOf(request.getRole().toUpperCase()));
            } else {
                throw new RuntimeException("Role is required for registration");
            }
            System.out.println("[REGISTER] Mapped role: " + user.getRole());
        } catch (Exception e) {
            System.err.println("[REGISTER] Role mapping failed. Error: " + e.getMessage());
            throw new RuntimeException("Invalid role provided: " + request.getRole() + ". Allowed roles: USER, ALUMNI, ADMIN, MODERATOR");
        }

        User savedUser = userRepository.save(user);

        // If alumni, create member in user-service
        if (savedUser.getRole() == User.Role.ALUMNI) {
            try {
                String userServiceUrl = "http://localhost:8081/api/members"; // Change port if needed
                // Build member payload with all relevant fields
                var memberPayload = new java.util.HashMap<String, Object>();
                memberPayload.put("email", savedUser.getEmail());
                memberPayload.put("firstName", savedUser.getFirstName());
                memberPayload.put("lastName", savedUser.getLastName());
                memberPayload.put("company", request.getCompany());
                memberPayload.put("graduationYear", request.getGraduationYear());
                memberPayload.put("course", request.getCourse());
                memberPayload.put("branch", request.getBatch()); // Map batch to branch
                memberPayload.put("isAlumni", true);
                restTemplate.postForObject(userServiceUrl, memberPayload, String.class);
            } catch (Exception e) {
                // Log error but do not fail registration
                System.err.println("Failed to create alumni in user-service: " + e.getMessage());
            }
        }

        String token = jwtTokenProvider.generateToken(savedUser.getEmail(), savedUser.getRole().toString());

        return new AuthResponse(
                token,
                savedUser.getEmail(),
                savedUser.getRole().toString(),
                savedUser.getFirstName(),
                savedUser.getLastName(),
                savedUser.getId()
        );
    }

    public AuthResponse login(AuthRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        if (!user.getActive()) {
            throw new RuntimeException("User account is inactive");
        }

        String token = jwtTokenProvider.generateToken(user.getEmail(), user.getRole().toString());

        return new AuthResponse(
                token,
                user.getEmail(),
                user.getRole().toString(),
                user.getFirstName(),
                user.getLastName(),
                user.getId()
        );
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
