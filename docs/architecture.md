# System Architecture

This page introduces the core architecture design used in my personal project.

The system is built using **Spring Boot 3** and follows a **modular backend architecture** inspired by domain-driven design concepts.  
The architecture focuses on **RBAC authorization**, **JWT authentication**, and **clear module separation**.

## Overall Architecture

The project follows a **frontend–backend separated architecture**.

Backend  
Spring Boot REST API

Frontend  
Vue 3 + Element Plus

Authentication  
JWT

Authorization  
RBAC

Database  
MySQL

Cache  
Redis

## System Structure

Frontend (Vue3 + Element Plus)  
│  
│ HTTP / REST API  
▼  
Backend (Spring Boot)  
│  
├── Security (Spring Security + JWT)  
├── RBAC Permission System  
├── Content Management  
│  
▼  
Database (MySQL) + Cache (Redis)

## RBAC Authorization

The system implements **RBAC (Role Based Access Control)** to manage user permissions.

Each user can be assigned one or more roles, and each role contains a set of permissions that control system access.

## Core Tables

- user
- role
- permission
- menu
- role_permission
- role_menu

## Authentication Flow

1. User submits login credentials
2. Backend verifies username and password
3. Server generates a JWT token
4. Client stores the token
5. The token is sent with every request
6. Spring Security validates the token and restores user identity

## Advantages

- Stateless authentication
- Reduced server session storage
- Suitable for distributed systems

## Backend Module Design

The backend is organized as a **multi-module architecture** to improve maintainability and code separation.

## Main Modules

**blog-common**  
Common utilities and shared components.

**blog-framework**  
Security configuration, JWT authentication, and global exception handling.

**blog-module-system**  
RBAC system including users, roles, permissions, and menus.

**blog-module-content**  
Blog domain including articles, categories, tags, and comments.

**blog-admin-api**  
Backend management APIs used by the admin dashboard.

**blog-portal-api**  
Public-facing APIs used by the blog frontend.

## API Design Principles

The backend APIs follow **RESTful design principles**.

## Key Design Features

- Unified response structure (`Result<T>`)
- Consistent error handling
- Clear API separation (Admin APIs / Portal APIs)
- Standardized request and response format

## Architecture Goals

The architecture focuses on the following goals:

- Clear module separation
- Scalable backend design
- Secure authentication and authorization
- Maintainable code structure