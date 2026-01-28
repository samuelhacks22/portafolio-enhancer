import request from 'supertest';
import app from './app';

describe('Base API', () => {
  it('GET / should return 200 and welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Welcome to DevDash API' });
  });

  it('GET /api/dashboard should return mocked dashboard data', async () => {
    const res = await request(app).get('/api/dashboard');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('stats');
    expect(res.body.stats).toHaveProperty('users');
    expect(res.body.stats).toHaveProperty('revenue');
  });
});
