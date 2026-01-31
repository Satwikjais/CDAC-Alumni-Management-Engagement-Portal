package com.cdacalumni.userservice.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "members")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    private String phone;

    private String company;

    private String designation;

    private String bio;

    private String profileImage;


    private String graduationYear;

    private String course;

    private String branch;

    @Column(name = "is_alumni")
    private Boolean isAlumni = false;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    public Member() {}


    public Member(Long id, String email, String firstName, String lastName, String phone, String company, String designation, String bio, String profileImage, String graduationYear, String course, String branch, Boolean isAlumni, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.company = company;
        this.designation = designation;
        this.bio = bio;
        this.profileImage = profileImage;
        this.graduationYear = graduationYear;
        this.course = course;
        this.branch = branch;
        this.isAlumni = isAlumni;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getDesignation() { return designation; }
    public void setDesignation(String designation) { this.designation = designation; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public String getProfileImage() { return profileImage; }
    public void setProfileImage(String profileImage) { this.profileImage = profileImage; }

    public String getGraduationYear() { return graduationYear; }
    public void setGraduationYear(String graduationYear) { this.graduationYear = graduationYear; }

    public String getBranch() { return branch; }
    public void setBranch(String branch) { this.branch = branch; }

    public Boolean getIsAlumni() { return isAlumni; }
    public void setIsAlumni(Boolean isAlumni) { this.isAlumni = isAlumni; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
