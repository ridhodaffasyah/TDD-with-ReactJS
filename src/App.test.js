import { render, screen } from '@testing-library/react';
import App from './App';

it('should render Hero Section', () => {
  render(<App />);

  const heroSection = screen.getByTestId("hero-section");

  expect(heroSection).toBeInTheDocument();
});

