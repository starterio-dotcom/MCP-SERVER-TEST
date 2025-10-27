/**
 * RemixIcon React Wrapper Component
 * DÁP Design System + Remixicon Integration
 */

import React from 'react';
import PropTypes from 'prop-types';

const RemixIcon = ({ 
  name,                    // Icon neve (pl. "home-line", "heart-fill")
  size = 'md',            // xs, sm, md, lg, xl, 2xl, 3xl
  color = 'default',      // default, brand, positive, negative, warning, info, inverted, subtle, muted, disabled
  className = '',         // Extra CSS osztályok
  style = {},             // Inline style-ok
  onClick,                // Click handler
  ariaLabel,              // Accessibility label
  ariaHidden = false,     // Ha true, akkor aria-hidden="true"
}) => {
  const iconClasses = [
    `ri-${name}`,
    `icon-${size}`,
    `icon-${color}`,
    className
  ].filter(Boolean).join(' ');

  const iconProps = {
    className: iconClasses,
    style,
    onClick,
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden || undefined,
    role: onClick ? 'button' : undefined,
  };

  return <i {...iconProps} />;
};

RemixIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
  color: PropTypes.oneOf([
    'default', 
    'brand', 
    'positive', 
    'negative', 
    'warning', 
    'info', 
    'inverted', 
    'subtle', 
    'muted', 
    'disabled'
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  ariaHidden: PropTypes.bool,
};

export default RemixIcon;

/**
 * USAGE EXAMPLES:
 * 
 * // Basic usage
 * <RemixIcon name="home-line" />
 * 
 * // Custom size and color
 * <RemixIcon name="heart-fill" size="lg" color="negative" />
 * 
 * // With click handler
 * <RemixIcon 
 *   name="delete-bin-line" 
 *   size="md" 
 *   color="negative"
 *   onClick={handleDelete}
 *   ariaLabel="Delete item"
 * />
 * 
 * // In button
 * <button className="btn-primary">
 *   <RemixIcon name="add-line" size="md" color="inverted" />
 *   <span>Add Item</span>
 * </button>
 * 
 * // Decorative icon (hidden from screen readers)
 * <div>
 *   <RemixIcon name="check-line" size="md" color="positive" ariaHidden />
 *   <span>Success message</span>
 * </div>
 */

