import express from 'express';
import axios from 'axios';

const app = express();

app.use(express.json());

const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || 'http://localhost:5000';

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

export default app;
