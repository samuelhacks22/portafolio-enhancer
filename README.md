# DevDash PRO - Enterprise Real-Time Analytics Platform

**DevDash PRO** es una plataforma de análisis de alto rendimiento que demuestra maestría en arquitectura Full Stack moderna. Combina un diseño **"Glassmorphism" con acentos neón** y una arquitectura de **datos en tiempo real** para ofrecer una experiencia de usuario de nivel empresarial.

## 🚀 Características "Career-Catapult"

Este no es un dashboard común. Es una demostración de ingeniería avanzada:

1.  **⚡ Arquitectura en Tiempo Real**:
    - Usa **WebSockets (Socket.io)** para transmitir datos de telemetría en vivo cada 2 segundos.
    - Sin recargas de página (SPA real).
    - Manejo eficiente de streams de datos de alta frecuencia.

2.  **💎 UI Premium & Micro-interacciones**:
    - **Glassmorphism**: Estética moderna con fondos desenfocados (blur) y transparencias tipo Apple/Windows 11.
    - **Framer Motion**: Animaciones de entrada fluidas y transiciones de estado.
    - **Recharts**: Visualización de datos interactiva y responsiva.

3.  **🔧 Ingeniería Robusta (TDD & BDD)**:
    - Ciclo estricto **Red-Green-Refactor** para todo el desarrollo.
    - Validación E2E con **Cucumber**.
    - Contenerización total con **Docker** y orquestación con Docker Compose.

---

## 🏗 Stack Tecnológico

### Frontend (`/client`)

- **Core**: React 18, TypeScript, Vite.
- **Estilos**: Tailwind CSS (Configuración personalizada Neon/Glass).
- **Visualización**: Recharts, Lucide React (Iconografía Vectorial).
- **Animación**: Framer Motion.
- **Comunicación**: Socket.io Client.

### Backend Gateway (`/server-node`)

- **Runtime**: Node.js (v20), Express.
- **Real-time**: Socket.io Server (Dual HTTP/WS Gateway).
- **Patrón**: API Gateway que agrega y emite datos.

### Analytics Engine (`/server-python`)

- **Framework**: Flask (Python 3.9).
- **Función**: Simulación de inferencia de IA y procesamiento de datos.

---

## 🛠 Instalación y Uso

**Prerrequisitos**: Docker Desktop instalado.

1.  **Iniciar todo el entorno**:

    ```powershell
    .\start.bat
    ```

    _O manualmente:_ `docker-compose up --build`

2.  **Acceder Application**:
    - **Dashboard Principal**: [http://localhost](http://localhost)
    - **API Status**: [http://localhost:3000](http://localhost:3000)

## 🧪 Testing y Calidad

El proyecto cuenta con una suite de pruebas exhaustiva:

| Nivel              | Tecnología               | Comando                             |
| :----------------- | :----------------------- | :---------------------------------- |
| **Frontend**       | Vitest + Testing Library | `cd client && npm test`             |
| **Backend Node**   | Jest (Unit/Integration)  | `cd server-node && npm test`        |
| **Backend Python** | Pytest                   | `cd server-python && pytest`        |
| **E2E / BDD**      | Cucumber.js              | `cd server-node && npx cucumber-js` |

---

## 📂 Estructura del Proyecto

```
├── client/                 # React + Vite (Premium UI)
│   ├── src/components/ui/  # Librería de componentes reutilizables (AnimatedCard, LiveChart)
│   └── src/App.tsx         # Entry point modificado
├── server-node/            # Node.js API + Socket.io Server
├── server-python/          # Python Flask Analytics
├── docker-compose.yml      # Orquestación de contenedores
└── .github/workflows/      # CI/CD Pipeline
```
