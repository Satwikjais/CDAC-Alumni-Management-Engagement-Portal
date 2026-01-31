package com.cdacalumni.userservice.dto;

public class MemberDTO {
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private String company;
    private String designation;
    private String bio;
    private String profileImage;
    private String graduationYear;
    private String course;
    private String branch;
    private Boolean isAlumni;

    public MemberDTO() {}

    public MemberDTO(Long id, String email, String firstName, String lastName, String phone, String company, String designation, String bio, String profileImage, String graduationYear, String course, String branch, Boolean isAlumni) {
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
}
