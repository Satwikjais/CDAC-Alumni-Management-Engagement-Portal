package com.cdacalumni.authservice.dto;


public class RegisterRequest {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String role; // Accepts "user", "alumni", etc.
    private String company;
    private String graduationYear;
    private String course;
    private String batch;


    public RegisterRequest() {}

    public RegisterRequest(String email, String password, String firstName, String lastName, String role, String company, String graduationYear, String course, String batch) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.company = company;
        this.graduationYear = graduationYear;
        this.course = course;
        this.batch = batch;
    }
        public String getCompany() { return company; }
        public void setCompany(String company) { this.company = company; }
        public String getGraduationYear() { return graduationYear; }
        public void setGraduationYear(String graduationYear) { this.graduationYear = graduationYear; }
        public String getCourse() { return course; }
        public void setCourse(String course) { this.course = course; }
        public String getBatch() { return batch; }
        public void setBatch(String batch) { this.batch = batch; }
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
