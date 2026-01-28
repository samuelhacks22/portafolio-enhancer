import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';

describe('Dashboard Component', () => {
  it('renders dashboard title and mocked stats', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    // This part should fail until implemented
    expect(screen.getByText('Users: 100')).toBeInTheDocument();
  });
});
