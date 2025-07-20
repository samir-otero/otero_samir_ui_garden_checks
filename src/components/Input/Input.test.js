import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input Component', () => {
  test('renders input with label', () => {
    render(<Input label="Email" />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  test('renders input with placeholder', () => {
    render(<Input placeholder="Enter your email" />);

    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  test('handles value and onChange', () => {
    const handleChange = jest.fn();
    render(
      <Input value="test value" onChange={handleChange} data-testid="input" />
    );

    const input = screen.getByTestId('input');
    expect(input).toHaveValue('test value');

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('applies correct size classes', () => {
    render(<Input size="large" data-testid="input" />);
    const input = screen.getByTestId('input');

    expect(input).toHaveClass('input--large');
  });

  test('applies correct variant classes', () => {
    render(<Input variant="filled" data-testid="input" />);
    const input = screen.getByTestId('input');

    expect(input).toHaveClass('input--filled');
  });

  test('shows error state and message', () => {
    render(
      <Input
        error={true}
        errorMessage="This field is required"
        data-testid="input"
      />
    );

    const input = screen.getByTestId('input');
    expect(input).toHaveClass('input--error');
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  test('shows helper text when no error', () => {
    render(
      <Input helperText="Enter a valid email address" data-testid="input" />
    );

    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
  });

  test('handles disabled state', () => {
    render(<Input disabled={true} data-testid="input" />);
    const input = screen.getByTestId('input');

    expect(input).toBeDisabled();
    expect(input).toHaveClass('input--disabled');
  });

  test('shows required asterisk', () => {
    render(<Input label="Email" required={true} />);

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('handles focus and blur events', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();

    render(
      <Input onFocus={handleFocus} onBlur={handleBlur} data-testid="input" />
    );

    const input = screen.getByTestId('input');

    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  test('applies different input types', () => {
    render(<Input type="password" data-testid="input" />);
    const input = screen.getByTestId('input');

    expect(input).toHaveAttribute('type', 'password');
  });

  test('generates unique id when not provided', () => {
    render(<Input label="Test" />);

    const input = screen.getByLabelText('Test');
    expect(input).toHaveAttribute('id');
    expect(input.getAttribute('id')).toMatch(/^input-/);
  });

  test('uses provided id', () => {
    render(<Input label="Test" id="custom-id" />);

    const input = screen.getByLabelText('Test');
    expect(input).toHaveAttribute('id', 'custom-id');
  });
});
