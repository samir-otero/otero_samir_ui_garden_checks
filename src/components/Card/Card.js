import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
  children,
  variant = 'default',
  elevation = 'medium',
  padding = 'medium',
  className = '',
  onClick,
  ...props
}) => {
  const cardClassName =
    `card card--${variant} card--elevation-${elevation} card--padding-${padding} ${className} ${onClick ? 'card--clickable' : ''}`.trim();

  return (
    <div className={cardClassName} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  elevation: PropTypes.oneOf(['none', 'low', 'medium', 'high']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  variant: 'default',
  elevation: 'medium',
  padding: 'medium',
  className: '',
  onClick: undefined,
};

export default Card;
