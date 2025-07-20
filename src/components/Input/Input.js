import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  error = false,
  errorMessage,
  helperText,
  size = 'medium',
  variant = 'outlined',
  required = false,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const inputClassName =
    `input input--${variant} input--${size} ${error ? 'input--error' : ''} ${disabled ? 'input--disabled' : ''} ${className}`.trim();

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        {...props}
      />

      {error && errorMessage && (
        <span className="input-error-message">{errorMessage}</span>
      )}

      {!error && helperText && (
        <span className="input-helper-text">{helperText}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['outlined', 'filled', 'underlined']),
  required: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
  error: false,
  size: 'medium',
  variant: 'outlined',
  required: false,
  className: '',
  label: undefined,
  placeholder: undefined,
  value: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
  errorMessage: undefined,
  helperText: undefined,
  id: undefined,
};

export default Input;
