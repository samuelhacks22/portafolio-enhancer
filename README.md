# DevDash PRO - Enterprise Real-Time Analytics Platform

**DevDash PRO** is a high-performance analytics platform that demonstrates mastery of modern Full Stack architecture. It combines a **"Glassmorphism" design with neon accents** and a **real-time data architecture** to deliver an enterprise-grade user experience.

## 🚀 "Career-Catapult" Features

This is not a common dashboard. It is a demonstration of advanced engineering:

1.  **⚡ Real-Time Architecture**:
    - Uses **WebSockets (Socket.io)** to stream live telemetry data every 2 seconds.
    - No page reloads (True SPA).
    - Efficient handling of high-frequency data streams.

2.  **💎 Premium UI & Micro-interactions**:
    - **Glassmorphism**: Modern aesthetic with background blurs and transparencies (Apple/Windows 11 style).
    - **Framer Motion**: Fluid entry animations and state transitions.
    - **Recharts**: Interactive and responsive data visualization.

3.  **🔧 Robust Engineering (TDD & BDD)**:
    - Strict **Red-Green-Refactor** cycle for all development.
    - E2E validation with **Cucumber**.
    - Total containerization with **Docker** and Docker Compose orchestration.

---

## 🏗 Tech Stack

### Frontend (`/client`)

- **Core**: React 18, TypeScript, Vite.
- **Styling**: Tailwind CSS (Custom Neon/Glass config).
- **Visualization**: Recharts, Lucide React (Vector Iconography).
- **Animation**: Framer Motion.
- **Communication**: Socket.io Client.

### Backend Gateway (`/server-node`)

- **Runtime**: Node.js (v20), Express.
- **Real-time**: Socket.io Server (Dual HTTP/WS Gateway).
- **Pattern**: API Gateway that aggregates and emits data.

### Analytics Engine (`/server-python`)

- **Framework**: Flask (Python 3.9).
- **Function**: AI inference simulation and data processing.

---

## 🛠 Installation & Usage

**Prerequisites**: Docker Desktop installed.

1.  **Start the entire environment**:

    ```powershell
    .\start.bat
    ```

    _Or manually:_ `docker-compose up --build`

2.  **Access Application**:
    - **Main Dashboard**: [http://localhost](http://localhost)
    - **API Status**: [http://localhost:3000](http://localhost:3000)

## 🧪 Testing & Quality

The project has an exhaustive test suite:

| Level              | Technology               | Command                             |
| :----------------- | :----------------------- | :---------------------------------- |
| **Frontend**       | Vitest + Testing Library | `cd client && npm test`             |
| **Backend Node**   | Jest (Unit/Integration)  | `cd server-node && npm test`        |
| **Backend Python** | Pytest                   | `cd server-python && pytest`        |
| **E2E / BDD**      | Cucumber.js              | `cd server-node && npx cucumber-js` |

---

## 📂 Project Structure

```
├── client/                 # React + Vite (Premium UI)
│   ├── src/components/ui/  # Reusable component library (AnimatedCard, LiveChart)
│   └── src/App.tsx         # Modified entry point
├── server-node/            # Node.js API + Socket.io Server
├── server-python/          # Python Flask Analytics
├── docker-compose.yml      # Container orchestration
└── .github/workflows/      # CI/CD Pipeline
```
