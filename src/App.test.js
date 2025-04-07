import { render, screen } from '@testing-library/react';
import App from './App';

test('renders your name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Arman Golkar/i);
  expect(nameElement).toBeInTheDocument();
});
