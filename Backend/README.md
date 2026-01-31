# CDAC Alumni Backend - Spring Boot Microservices

## Architecture Overview

This is a complete microservices backend built with Spring Boot 3.1.5 and MySQL for the CDAC Alumni project.

### Services

1. **Auth Service** (Port 8081)
   - User registration and login
   - JWT token generation and validation
   - Password encryption with BCrypt

2. **User Service** (Port 8082)
   - Member profile management
   - Alumni records
   - User information CRUD operations

3. **Content Service** (Port 8083)
   - Blog post management
   - Testimonials
   - News and articles

4. **Events Service** (Port 8084)
   - Event creation and management
   - Event registrations
   - Capacity management

5. **API Gateway** (Port 8080)
   - Single entry point for all services
   - CORS configuration
   - Request routing

## Prerequisites

- Java 21 or higher
- MySQL 8.0 or higher
- Maven 3.8.1 or higher
- Node.js (for frontend)

## Setup Instructions

### 1. Database Setup

```bash
mysql -u root -p < Backend/database_schema.sql
```

Default credentials:
- Username: `root`
- Password: `root`
- Database: `cdac_alumni_db`

### 2. Update application.properties

If your MySQL credentials are different, update the datasource configuration in each service's `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/cdac_alumni_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 3. Build All Services

Navigate to each service directory and run:

```bash
# Auth Service
cd Backend/auth-service
mvn clean package

# User Service
cd Backend/user-service
mvn clean package

# Content Service
cd Backend/content-service
mvn clean package

# Events Service
cd Backend/events-service
mvn clean package

# API Gateway
cd Backend/api-gateway
mvn clean package
```

### 4. Run All Services

Open separate terminal windows and run:

```bash
# Terminal 1 - API Gateway
cd Backend/api-gateway
mvn spring-boot:run

# Terminal 2 - Auth Service
cd Backend/auth-service
mvn spring-boot:run

# Terminal 3 - User Service
cd Backend/user-service
mvn spring-boot:run

# Terminal 4 - Content Service
cd Backend/content-service
mvn spring-boot:run

# Terminal 5 - Events Service
cd Backend/events-service
mvn spring-boot:run
```

## API Endpoints

### Authentication (through Gateway: http://localhost:8080)

```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/health
```

### Members Management

```
GET    /api/members
GET    /api/members/{id}
GET    /api/members/email/{email}
GET    /api/members/alumni/list
POST   /api/members
PUT    /api/members/{id}
DELETE /api/members/{id}
```

### Blog Management

```
GET    /api/blogs
GET    /api/blogs/{id}
POST   /api/blogs
PUT    /api/blogs/{id}
DELETE /api/blogs/{id}
```

### Events Management

```
GET    /api/events
GET    /api/events/{id}
POST   /api/events
PUT    /api/events/{id}
DELETE /api/events/{id}
POST   /api/events/{eventId}/register
```

## Authentication

The system uses JWT (JSON Web Tokens) for authentication. 

### Login Flow

1. User sends POST request to `/api/auth/login` with email and password
2. Server validates credentials and returns JWT token
3. Client stores token in localStorage
4. For subsequent requests, include token in Authorization header:
   ```
   Authorization: Bearer <token>
   ```

### Sample User Credentials

```
Email: user@cdacalumni.com
Password: password123
```

## Environment Variables (Optional)

Create a `.env` file in the root directory for environment-specific configurations:

```
JWT_SECRET=your_secret_key_here_make_it_very_long_and_secure_at_least_256_bits_of_entropy_for_proper_security
JWT_EXPIRATION=86400000
DB_URL=jdbc:mysql://localhost:3306/cdac_alumni_db
DB_USERNAME=root
DB_PASSWORD=root
```

## Default Sample Data

The database includes pre-loaded sample data:

- Admin user: `admin@cdacalumni.com`
- Regular user: `user@cdacalumni.com`
- 3 sample alumni members
- 3 sample blog posts
- 3 sample testimonials
- 3 sample events

Password for sample users: `password123` (hashed with BCrypt)

## API Response Format

All responses follow a standard JSON format:

### Success Response
```json
{
  "id": 1,
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "role": "USER"
}
```

### Error Response
```json
{
  "error": "User not found"
}
```

## CORS Configuration

CORS is enabled for the frontend running on `http://localhost:5173`

## Troubleshooting

### MySQL Connection Error
- Ensure MySQL is running
- Verify credentials in application.properties
- Check database exists: `SHOW DATABASES;`

### Port Already in Use
Change the port in application.properties:
```properties
server.port=8090
```

### JWT Token Issues
- Verify JWT secret is same across all services
- Check token expiration time
- Ensure token is included in Authorization header

## Future Enhancements

- Email notification service
- File upload service for images
- Search and filtering
- Pagination for large datasets
- Advanced caching with Redis
- Service-to-service authentication
- API documentation with Swagger

## Support

For issues or questions, please contact the development team.
