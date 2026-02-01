🎓 CDAC Alumni Management & Engagement Portal

A full-stack alumni management platform built for CDAC institutions to manage alumni data, engagement, and communication through a scalable microservice-based backend and a modern React frontend.

📖 Table of Contents

About the Project
Key Features
Tech Stack
Project Architecture
Getting Started
Prerequisites
Backend Setup
Frontend Setup
API Overview
Best Practices Followed
Roadmap
Contribution Guidelines
Author
License

📌 About the Project
The CDAC Alumni Management & Engagement Portal is designed to provide a centralized system where:
Alumni can register, log in, and manage their profiles
Administrators can manage alumni records
Institutions can share events, news, and updates
Alumni engagement is improved through a structured digital platform
This project was developed as part of a CDAC academic capstone, following industry-oriented design principles.

✨ Key Features

🔐 Secure alumni registration & login
📋 Alumni directory with search & filters
🧩 Modular backend using microservices
🌐 RESTful APIs for frontend integration
📱 Responsive frontend UI
🗂️ Clean project structure with Git best practices

🛠️ Tech Stack
Frontend :- React.js, Vite ,React Router , Axios ,Bootstrap / Custom CSS

Backend :- Java 17+, Spring Boot, Spring Web (REST APIs), Spring Data JPA, Maven ,MySQL

Tools :- Git & GitHub ,Postman ,VS Code / IntelliJ IDEA

🏗️ Project Architecture

CDAC-Alumni-Management-Engagement-Portal

│
├── Backend
│   └── user-service
│       ├── src/main/java
│       │   ├── controller
│       │   ├── service
│       │   └── repository
│       ├── src/main/resources
│       └── pom.xml
│
├── Frontend
│   └── client
│       ├── src
│       ├── public
│       ├── package.json
│       └── vite.config.js
│
├── .gitignore
└── README.md

Architecture Pattern :-
Controller → Service → Repository
REST-based communication
Microservice-ready backend design

🚀 Getting Started
Prerequisites
Make sure you have the following installed: Java 17+ ,Maven 3.8+ ,Node.js 18+ ,MySQL ,Git

Backend Setup:-
cd Backend/user-service
mvn clean install
mvn spring-boot:run
Backend will start at:
http://localhost:8080

Frontend Setup:-
cd Frontend/client
npm install
npm run dev

Frontend will start at:
http://localhost:5173

🔌 API Overview:-
Method	Endpoint	         Description
GET   	/api/members  	  Fetch all alumni
POST  	/api/members  	  Register new alumni
GET   	/api/members/{id}	Get alumni by ID
PUT   	/api/members/{id}	Update alumni details
(Endpoints may evolve as services expand)

✅ Best Practices Followed:-

Clean Git commit history:-
.gitignore for build artifacts
Separation of concerns
RESTful API design
Modular & scalable folder structure

🛣️ Roadmap:-

🔐 JWT authentication & Spring Security

👥 Role-based access control (Admin / Alumni)

💼 Alumni job & opportunity postings

📧 Email & notification service

🤝 Contribution Guidelines:-

Contributions are welcome for learning and improvement.
1.Fork the repository
2.Create a feature branch
git checkout -b feature/your-feature
3.Commit your changes
git commit -m "Add new feature"
4.Push and open a Pull Request

👨‍💻 Author

Satwik Jaiswal
CDAC Trainee | Java & Full-Stack Developer
GitHub: https://github.com/Satwikjais

📄 License

This project is intended for educational and academic purposes only.

⭐ If you like this project

Give it a ⭐ on GitHub — it motivates further development!

✅ Final Step (IMPORTANT)
Commit this README:
