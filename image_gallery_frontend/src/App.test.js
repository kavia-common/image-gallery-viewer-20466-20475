import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Ocean Gallery header', () => {
  render(<App />);
  // Header should have accessible name even if visual title is replaced by a logo
  expect(screen.getByText(/Ocean Gallery/i)).toBeInTheDocument();
});

test('search input exists and filters empty state', () => {
  render(<App />);
  const input = screen.getByLabelText(/Search images/i);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'zzzz-not-found' } });
  expect(screen.getByText(/No images match/)).toBeInTheDocument();
});
