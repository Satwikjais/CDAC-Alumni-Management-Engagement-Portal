package com.cdacalumni.userservice.service;

import com.cdacalumni.userservice.dto.MemberDTO;
import com.cdacalumni.userservice.entity.Member;
import com.cdacalumni.userservice.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public MemberDTO createMember(MemberDTO memberDTO) {
        Member member = new Member();
        member.setEmail(memberDTO.getEmail());
        member.setFirstName(memberDTO.getFirstName());
        member.setLastName(memberDTO.getLastName());
        member.setPhone(memberDTO.getPhone());
        member.setCompany(memberDTO.getCompany());
        member.setDesignation(memberDTO.getDesignation());
        member.setBio(memberDTO.getBio());
        member.setGraduationYear(memberDTO.getGraduationYear());
        member.setCourse(memberDTO.getCourse());
        member.setBranch(memberDTO.getBranch());
        member.setIsAlumni(memberDTO.getIsAlumni() != null ? memberDTO.getIsAlumni() : false);

        Member savedMember = memberRepository.save(member);
        return convertToDTO(savedMember);
    }

    public MemberDTO getMemberById(Long id) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Member not found"));
        return convertToDTO(member);
    }

    public MemberDTO getMemberByEmail(String email) {
        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Member not found"));
        return convertToDTO(member);
    }

    public List<MemberDTO> getAllMembers() {
        return memberRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<MemberDTO> getAllAlumni() {
        return memberRepository.findByIsAlumniTrue().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public MemberDTO updateMember(Long id, MemberDTO memberDTO) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Member not found"));

        member.setFirstName(memberDTO.getFirstName());
        member.setLastName(memberDTO.getLastName());
        member.setPhone(memberDTO.getPhone());
        member.setCompany(memberDTO.getCompany());
        member.setDesignation(memberDTO.getDesignation());
        member.setBio(memberDTO.getBio());
        member.setProfileImage(memberDTO.getProfileImage());
        member.setGraduationYear(memberDTO.getGraduationYear());
        member.setCourse(memberDTO.getCourse());
        member.setBranch(memberDTO.getBranch());
        member.setIsAlumni(memberDTO.getIsAlumni());
        member.setUpdatedAt(LocalDateTime.now());

        Member updatedMember = memberRepository.save(member);
        return convertToDTO(updatedMember);
    }

    public void deleteMember(Long id) {
        memberRepository.deleteById(id);
    }

    private MemberDTO convertToDTO(Member member) {
        return new MemberDTO(
            member.getId(),
            member.getEmail(),
            member.getFirstName(),
            member.getLastName(),
            member.getPhone(),
            member.getCompany(),
            member.getDesignation(),
            member.getBio(),
            member.getProfileImage(),
            member.getGraduationYear(),
            member.getCourse(),
            member.getBranch(),
            member.getIsAlumni()
        );
    }

    public List<MemberDTO> getFilteredMembers(String search, String batch, String course, String company) {
        // Only alumni
        List<Member> alumni = memberRepository.findByIsAlumniTrue();
        return alumni.stream().filter(member -> {
            boolean matches = true;
            if (search != null && !search.isEmpty()) {
                String firstName = member.getFirstName() != null ? member.getFirstName().toLowerCase() : "";
                String lastName = member.getLastName() != null ? member.getLastName().toLowerCase() : "";
                String fullName = (firstName + " " + lastName).trim();
                String searchTerm = search.toLowerCase().trim();
                matches &= firstName.contains(searchTerm)
                        || lastName.contains(searchTerm)
                        || fullName.contains(searchTerm);
            }
            if (batch != null && !batch.isEmpty()) {
                matches &= batch.equalsIgnoreCase(member.getGraduationYear());
            }
            if (course != null && !course.isEmpty()) {
                matches &= course.equalsIgnoreCase(member.getCourse());
            }
            if (company != null && !company.isEmpty()) {
                matches &= company.equalsIgnoreCase(member.getCompany());
            }
            return matches;
        }).map(this::convertToDTO).collect(Collectors.toList());
    }
}
