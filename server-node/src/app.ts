import express from 'express';
import axios from 'axios';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins for simplicity in this demo
    methods: ["GET", "POST"]
  }
});

app.use(express.json());

// Enable CORS for Express as well
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || 'http://localhost:5000';

// Mock Data Emitter
setInterval(() => {
  const liveData = {
    users: Math.floor(Math.random() * 1000) + 500,
    revenue: Math.floor(Math.random() * 5000) + 2000,
    traffic: Math.floor(Math.random() * 100),
    timestamp: new Date().toISOString()
  };
  io.emit('dashboard:update', liveData);
}, 2000); // Emit every 2 seconds

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to DevDash API' });
});

app.get('/api/dashboard', async (req, res) => {
  try {
    const analyticsResponse = await axios.get(`${PYTHON_SERVICE_URL}/analytics`);
    const analyticsData = analyticsResponse.data;

    res.status(200).json({
      stats: {
        users: 100,
        revenue: 5000
      },
      analytics: analyticsData
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
});

// Export server instead of app for listener
// Start server if run directly
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export { app, server };
export default app;
