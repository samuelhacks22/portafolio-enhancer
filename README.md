# DevDash - Fullstack Portfolio Enhancer

**DevDash** is a sophisticated "Developer Dashboard" that aggregates metrics from a Node.js API and a Python Analytics service, displayed on a reactive React frontend. This project demonstrates mastery of the entire stack, including TDD, BDD, Containerization, and CI/CD.

## 🚀 Quick Start

**Prerequisites**: Docker Desktop installed.

1.  **Clone the repository**
2.  **Run the startup script** (Windows):

    ```powershell
    .\start.bat
    ```

    Or using Docker Compose directly:

    ```bash
    docker-compose up --build
    ```

3.  **Access the application**:
    - **Frontend**: [http://localhost](http://localhost)
    - **Node API**: [http://localhost:3000](http://localhost:3000)
    - **Python Service**: [http://localhost:5000](http://localhost:5000)

---

## 🏗 Tech Stack & Architecture

### Frontend (`/client`)

- **Framework**: React 18, Vite.
- **Language**: TypeScript.
- **Styling**: Tailwind CSS (v3).
- **Testing**: Vitest (Component Testing).

### Backend Core (`/server-node`)

- **Runtime**: Node.js (v20), Express.
- **Language**: TypeScript.
- **Methodology**: Test Driven Development (TDD) + BDD.
- **Testing**: Jest (Unit), Cucumber (E2E/Behavior).

### Analytics Service (`/server-python`)

- **Framework**: Flask.
- **Language**: Python 3.9.
- **Methodology**: Test Driven Development (TDD).
- **Testing**: Pytest.

### DevOps

- **Containerization**: Docker & Docker Compose.
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`) runs tests on push.

---

## 🧪 Testing

This project follows a strict **Red-Green-Refactor** TDD cycle.

| Service      | Test Command                        | Framework |
| :----------- | :---------------------------------- | :-------- |
| **Node API** | `cd server-node && npm test`        | Jest      |
| **Python**   | `cd server-python && pytest`        | Pytest    |
| **Frontend** | `cd client && npm test`             | Vitest    |
| **BDD**      | `cd server-node && npx cucumber-js` | Cucumber  |

---

## 📂 Project Structure

```
├── client/              # React Frontend
├── server-node/         # Node.js API (Core)
│   ├── src/             # Source code
│   └── features/        # Gherkin/Cucumber specs
├── server-python/       # Python Flask Service
├── .github/workflows/   # CI/CD Configuration
├── docker-compose.yml   # Orchestration
└── start.bat            # Convenience script
```

## 🛠 CI/CD Pipeline

The project includes a GitHub Actions workflow that automatically runs:

1.  Node.js Unit Tests
2.  Python Unit Tests
3.  Frontend Component Tests

See `.github/workflows/ci.yml` for details.
