import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { io } from 'socket.io-client';

// Mock socket.io-client
vi.mock('socket.io-client', () => {
  const socketMock = {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
    connect: vi.fn(),
  };
  return {
    io: vi.fn(() => socketMock),
  };
});

describe('Dashboard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders dashboard and updates via socket', async () => {
    render(<Dashboard />);
    
    expect(screen.getByText('DevDash')).toBeInTheDocument();
    
    // Simulate socket update via internal mock access reference
    // In a real scenario we might export the socket instance or use a helper
    // For this test, we re-instantiate to get the same mock since it returns the same object structure
    const socket = io('http://localhost:3000');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const updateCallback = (socket.on as any).mock.calls.find((call: any[]) => call[0] === 'dashboard:update')?.[1];
    
    if (updateCallback) {
        updateCallback({
            users: 1200,
            revenue: 9500,
            traffic: 85,
            timestamp: new Date().toISOString()
         });
    }

    expect(await screen.findByText(/1,200/)).toBeInTheDocument();
    expect(await screen.findByText(/\$9,500/)).toBeInTheDocument();
  });
});
