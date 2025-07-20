import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  test('renders card with children', () => {
    render(
      <Card>
        <h2>Test Content</h2>
        <p>This is a test card</p>
      </Card>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('This is a test card')).toBeInTheDocument();
  });

  test('applies default classes', () => {
    render(<Card data-testid="card">Default Card</Card>);
    const card = screen.getByTestId('card');

    expect(card).toHaveClass('card');
    expect(card).toHaveClass('card--default');
    expect(card).toHaveClass('card--elevation-medium');
    expect(card).toHaveClass('card--padding-medium');
  });

  test('applies variant classes correctly', () => {
    render(
      <Card variant="outlined" data-testid="card">
        Outlined Card
      </Card>
    );
    const card = screen.getByTestId('card');

    expect(card).toHaveClass('card--outlined');
  });

  test('applies elevation classes correctly', () => {
    render(
      <Card elevation="high" data-testid="card">
        High Elevation Card
      </Card>
    );
    const card = screen.getByTestId('card');

    expect(card).toHaveClass('card--elevation-high');
  });

  test('applies padding classes correctly', () => {
    render(
      <Card padding="large" data-testid="card">
        Large Padding Card
      </Card>
    );
    const card = screen.getByTestId('card');

    expect(card).toHaveClass('card--padding-large');
  });

  test('handles onClick events', () => {
    const handleClick = jest.fn();
    render(
      <Card onClick={handleClick} data-testid="card">
        Clickable Card
      </Card>
    );

    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card--clickable');

    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    render(
      <Card className="custom-class" data-testid="card">
        Custom Card
      </Card>
    );

    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-class');
  });

  test('passes through additional props', () => {
    render(
      <Card data-testid="card" id="test-card" role="article">
        Props Card
      </Card>
    );

    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('id', 'test-card');
    expect(card).toHaveAttribute('role', 'article');
  });
});
