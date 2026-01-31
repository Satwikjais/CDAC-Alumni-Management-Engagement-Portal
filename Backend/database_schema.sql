-- Opportunities table
CREATE TABLE IF NOT EXISTS opportunities (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    description TEXT,
    link VARCHAR(500),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Create Database
CREATE DATABASE IF NOT EXISTS cdac_alumni_db;
USE cdac_alumni_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    role ENUM('USER', 'ADMIN', 'ALUMNI', 'MODERATOR') NOT NULL DEFAULT 'USER',
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email)
);

-- Members table
CREATE TABLE IF NOT EXISTS members (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    designation VARCHAR(255),
    bio TEXT,
    profile_image VARCHAR(255),
    graduation_year VARCHAR(4),
    course VARCHAR(255),
    branch VARCHAR(255),
    is_alumni BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_alumni (is_alumni)
);

-- Blogs table
CREATE TABLE IF NOT EXISTS blogs (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(500) NOT NULL,
    content LONGTEXT,
    author VARCHAR(255),
    image_url VARCHAR(500),
    views INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_author (author),
    INDEX idx_created_at (created_at)
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    message LONGTEXT,
    position VARCHAR(255),
    image_url VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_company (company)
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(500) NOT NULL,
    description LONGTEXT,
    event_date TIMESTAMP NOT NULL,
    location VARCHAR(255),
    image_url VARCHAR(500),
    capacity INT NOT NULL DEFAULT 100,
    registrations INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_event_date (event_date),
    INDEX idx_created_at (created_at)
);

-- Event Registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    event_id BIGINT NOT NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    registered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
    UNIQUE KEY unique_event_email (event_id, email),
    INDEX idx_event_id (event_id),
    INDEX idx_email (email)
);

-- Insert sample data
INSERT INTO users (email, password, first_name, last_name, role) VALUES
('admin@cdacalumni.com', '$2a$10$slYQmyNdGzin7olVN3p5Be7DlH.PKZbv5H8KnzzVgXXbVxzy990qm', 'Admin', 'User', 'ADMIN'),
('user@cdacalumni.com', '$2a$10$slYQmyNdGzin7olVN3p5Be7DlH.PKZbv5H8KnzzVgXXbVxzy990qm', 'John', 'Doe', 'USER');

INSERT INTO members (email, first_name, last_name, company, designation, is_alumni, graduation_year, branch) VALUES
('alumni1@cdacalumni.com', 'Alice', 'Johnson', 'Tech Corp', 'Software Engineer', TRUE, '2020', 'CSE'),
('alumni2@cdacalumni.com', 'Bob', 'Smith', 'Innovations Inc', 'Product Manager', TRUE, '2019', 'IT'),
('alumni3@cdacalumni.com', 'Carol', 'Williams', 'WebDev Solutions', 'Full Stack Developer', TRUE, '2021', 'CSE');

INSERT INTO blogs (title, content, author) VALUES
('Welcome to CDAC Alumni', 'This is our first blog post about the alumni community.', 'Admin'),
('Technology Trends 2024', 'Exploring the latest technology trends in the industry.', 'John Doe'),
('Career Growth Tips', 'Tips for career advancement in the tech industry.', 'Jane Smith');

INSERT INTO testimonials (name, company, message, position) VALUES
('Rajesh Kumar', 'Tech Giants', 'The CDAC program was transformative for my career.', 'Senior Developer'),
('Priya Sharma', 'Data Solutions', 'Great network and learning opportunities.', 'Data Scientist'),
('Amit Patel', 'Cloud Services', 'Best decision to join this alumni network.', 'DevOps Engineer');

INSERT INTO events (title, description, event_date, location, capacity) VALUES
('Annual Alumni Meet 2024', 'Annual gathering of all CDAC alumni members', '2024-02-15 10:00:00', 'Mumbai', 500),
('Webinar: AI & ML Trends', 'Expert discussion on AI and Machine Learning', '2024-02-20 18:00:00', 'Online', 200),
('Career Fair 2024', 'Job opportunities and networking event', '2024-03-01 09:00:00', 'Delhi', 300);
