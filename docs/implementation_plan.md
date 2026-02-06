# Implementation Plan - Gaming Statistics Application

This project involves creating a full-stack application for managing game statistics. It uses Quarkus for a high-performance Java backend and Angular for a modern, responsive frontend.

## User Review Required

> [!IMPORTANT]
> **Authentication**: We will use Quarkus Security with JWT. User management will be handled via JPA-based security, issuing JWTs for session management.

> [!NOTE]
> **Architecture**: Both projects will follow Domain-Driven Design (DDD) principles to ensure a well-structured and maintainable workspace.

## Proposed Changes

### Backend (Quarkus)
The backend will follow **Domain-Driven Design (DDD)** and **Hexagonal Architecture**.

#### [NEW] [gamingstats-backend](gamingstats-backend)
- **Quarkus Extensions**: RESTEasy Reactive, Hibernate ORM with Panache, JDBC Driver (PostgreSQL), SmallRye JWT, Elytron Security JPA.
- **DDD Structure**:
  - `domain`: Entities, Value Objects, and Domain Services.
  - `application`: Use cases and Ports (Interfaces).
  - `infrastructure`: Adapters (JPA Repositories, External API clients).
  - `web`: REST Controllers / Adaptors.

---

### Frontend (Angular)
The frontend will use **TailwindCSS** for styling and follow a DDD-inspired modular structure.

#### [NEW] [gamingstats-frontend](gamingstats-frontend)
- **Styling**: TailwindCSS for a premium UI.
- **Architecture**:
  - `core`: Singleton services, auth guards, interceptors.
  - `shared`: Reusable UI components, pipes, directives.
  - `features`: Domain-specific modules (e.g., `dashboard`, `games`, `profile`).
- **Features**: Login/Register, Game List, Match History, Stats Dashboard.

---

### Infrastructure
#### [NEW] [docker-compose.yml](docker-compose.yml)
- PostgreSQL database for persistent storage.

## Verification Plan

### Automated Tests
- Quarkus Unit and Integration tests (`mvn test`).
- Angular Unit tests (`ng test`).

### Manual Verification
- Verify authentication flow (Login/logout).
- Verify CRUD operations for Games and Matches.
- Verify responsive design and animations on various screen sizes.
