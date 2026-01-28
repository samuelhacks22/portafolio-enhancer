import { render, screen, waitFor } from '@testing-library/react';
import { Dashboard } from './Dashboard';

describe('Dashboard Component', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(() => 
      Promise.resolve({
        json: () => Promise.resolve({
          stats: { users: 150, revenue: 5000 },
          analytics: { summary: 'Positive trend', data_points: [] }
        }),
      })
    ));
  });

  it('renders fetched dashboard data', async () => {
    render(<Dashboard />);
    
    // Check loading state first
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText(/Users: 150/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Revenue: \$5000/i)).toBeInTheDocument();
    expect(screen.getByText(/Trend: Positive trend/i)).toBeInTheDocument();
  });
});
