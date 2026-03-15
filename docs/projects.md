# Projects

## manpower-blog

Enterprise-style blog system developed with **Spring Boot 3** and **Vue 3**.  
This project is designed to explore modern backend architecture, security design, and scalable system development.

---

### Tech Stack

**Backend**

- Java 21
- Spring Boot 3
- Spring Security
- MyBatis Plus
- Redis
- JWT Authentication

**Frontend**

- Vue 3
- TypeScript
- Element Plus

**Database**

- MySQL

---

### Architecture

The backend is designed using a **modular architecture** inspired by domain-driven design principles to improve maintainability and scalability.

Core modules:

- **blog-common**  
  Common utilities, constants, and shared components.

- **blog-framework**  
  Infrastructure layer including security configuration, JWT authentication, global exception handling, and MyBatis configuration.

- **blog-module-system**  
  System domain including user management, role management, permission control, and RBAC authorization.

- **blog-module-content**  
  Content domain including articles, categories, tags, comments, and user interactions.

- **blog-admin-api**  
  Backend management APIs used by the admin dashboard.

- **blog-portal-api**  
  Public-facing APIs used by the blog frontend.

---

### Security Design

- Spring Security based authentication
- JWT token based stateless authorization
- RBAC (Role-Based Access Control)
- API permission verification

---

### API Design

The system follows **RESTful API design principles**.

Key design features:

- Unified response structure (`Result<T>`)
- Consistent error handling
- Clear separation between admin APIs and public APIs
- Standardized request/response format

Detailed API specifications are documented in **api-design.md**.

---

### Features

- User Management
- Role & Permission Management (RBAC)
- Article Management
- Comment System
- Category Management
- Tag Management
- Authentication & Authorization
- Admin Management APIs

---

### Documentation

Additional system design documents:

- **architecture.md** – System architecture and module design
- **api-design.md** – API conventions and endpoint design