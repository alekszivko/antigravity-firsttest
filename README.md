# Gaming Statistics Application

A full-stack gaming statistics application featuring a Quarkus backend and an Angular frontend.

## Project Structure

- `gamingstats-backend/`: Quarkus Java backend (DDD Architecture, JWT Security, Hibernate Panache).
- `gamingstats-frontend/`: Angular 19 frontend (TailwindCSS, Glassmorphism UI).
- `docs/`: Project documentation, including implementation plans, walkthroughs, and recordings.

## Getting Started

### Prerequisites

- Java 21+
- Node.js 18+
- Docker (for PostgreSQL Dev Services)

### Quick Start

1.  **Backend**:
    ```bash
    cd gamingstats-backend
    ./mvnw quarkus:dev
    ```

2.  **Frontend**:
    ```bash
    cd gamingstats-frontend
    npm install
    npm start
    ```

## Documentation

Full project verification and implementation details can be found in the [walkthrough](docs/walkthrough.md).
Check out the [connectivity proof](docs/screenshots/backend_status_check_1770384770351.png) for functional status.

## License

MIT
