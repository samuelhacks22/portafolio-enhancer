import request from 'supertest';
import app from './app';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Base API', () => {
  it('GET / should return 200 and welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Welcome to DevDash API' });
  });

  it('GET /api/dashboard should return aggregated data', async () => {
    mockedAxios.get.mockResolvedValue({
      data: { summary: 'Positive trend', data_points: [] }
    });

    const res = await request(app).get('/api/dashboard');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('stats');
    expect(res.body).toHaveProperty('analytics');
    expect(res.body.analytics).toHaveProperty('summary');
  });
});
