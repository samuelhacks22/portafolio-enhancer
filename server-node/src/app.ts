import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to DevDash API' });
});

app.get('/api/dashboard', (req, res) => {
  res.status(200).json({
    stats: {
      users: 100,
      revenue: 5000
    }
  });
});

export default app;
