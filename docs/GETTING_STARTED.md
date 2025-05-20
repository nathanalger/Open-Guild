# Getting Started with Open Guild

Welcome to Open Guild! This guide will help you set up the project for local development and get started contributing.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/) (for managing dependencies)
- [Docker](https://www.docker.com/) (for running the database and pgAdmin)
- [Git](https://git-scm.com/) (for version control)

---

## Setting Up the Project

### 1. Clone the Repository

```bash
git clone git@github.com:nathanalger/Open-Guild.git
cd openguild
```

### 2. Install Dependencies

Install dependencies for the entire workspace:

```bash
pnpm install
```

### 3. Start the Database

Make sure that the Docker Daemon is running, then start the PostgreSQL database and pgAdmin using Docker:

```bash
pnpm run db
```

- Access pgAdmin at [http://localhost:5050](http://localhost:5050)
  - **Email:** `pgadmin@openguild.com`
  - **Password:** `admin`

### 4. Start the Backend

Navigate to the `backend` folder and start the development server:

```bash
pnpm run backend
```

The backend will be available at [http://localhost:3000](http://localhost:3000).

### 5. Start the Frontend

Navigate to the `frontend` folder and start the Vite development server:

```bash
pnpm run frontend
```

The frontend will be available at [http://localhost:5173](http://localhost:5173).

---

## Resetting the Database

If you need to reset the database to its initial state:

```bash
pnpm run reset-db
```

This will:

- Stop and remove the database container and volumes.
- Recreate the database and apply the schema from `base_schema.sql`.

---

## Contribution Guidelines

Please read the [Contribution Guidelines](CONTRIBUTIONS.md) before submitting a pull request. Ensure your code is:

- Well-documented.
- Properly formatted using [Prettier](https://prettier.io/).
- Committed using [Conventional Commits](https://www.conventionalcommits.org/).

---

## Need Help?

If you encounter any issues or have questions, feel free to:

- Open an issue on GitHub.
- Contact me via email: [na.alger05@gmail.com](mailto:na.alger05@gmail.com).

Thank you for contributing to Open Guild!
