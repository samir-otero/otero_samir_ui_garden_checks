import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders UI Component Library heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/UI Component Library/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders all button variants', () => {
  render(<App />);

  // Check if different button variants are rendered
  expect(screen.getByText('Small Primary')).toBeInTheDocument();
  expect(screen.getByText('Medium Primary')).toBeInTheDocument();
  expect(screen.getByText('Large Primary')).toBeInTheDocument();
  expect(screen.getByText('Secondary')).toBeInTheDocument();
  expect(screen.getByText('Disabled')).toBeInTheDocument();
});

test('renders buttons with correct classes', () => {
  render(<App />);

  const smallButton = screen.getByText('Small Primary');
  const secondaryButton = screen.getByText('Secondary');
  const disabledButton = screen.getByText('Disabled');

  expect(smallButton).toHaveClass('btn', 'btn--primary', 'btn--small');
  expect(secondaryButton).toHaveClass('btn', 'btn--secondary', 'btn--medium');
  expect(disabledButton).toHaveClass('btn--disabled');
  expect(disabledButton).toBeDisabled();
});
