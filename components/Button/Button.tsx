/**
 * Button Component - DÁP Design System
 * Auto-generated from Figma: Button (node: 564:1370)
 * 
 * @see https://www.figma.com/design/wlzFe2hkjpLnBYiNfZbLBM/DÁP_Design_System_UI_Kit_1.2?node-id=564-1370
 */

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import RemixIcon from '../RemixIcon';

export type ButtonVariant = 'primary' | 'outline' | 'subtle' | 'toggle';
export type ButtonSize = 'large' | 'medium' | 'small' | 'xsmall';
export type ButtonColor = 'brand' | 'negative' | 'inverted' | 'neutral';
export type ButtonState = 'enabled' | 'disabled' | 'loading';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  /** Button variáció: primary (kitöltött), outline (kerettel), subtle (finom), toggle (kapcsoló) */
  variant?: ButtonVariant;
  
  /** Méret: large (48px), medium (40px), small (32px), xsmall (24px) */
  size?: ButtonSize;
  
  /** Szín: brand (kék), negative (piros), inverted (fehér), neutral (szürke - subtle/toggle) */
  color?: ButtonColor;
  
  /** Csak ikon, nincs szöveg */
  iconOnly?: boolean;
  
  /** Ikon neve (Remixicon) */
  icon?: string;
  
  /** Ikon pozíció */
  iconPosition?: 'left' | 'right';
  
  /** Quiet variáció (csak subtle-nél) */
  quiet?: boolean;
  
  /** Kiválasztott állapot (csak toggle-nél) */
  selected?: boolean;
  
  /** Loading állapot */
  loading?: boolean;
  
  /** Teljes szélesség */
  fullWidth?: boolean;
  
  /** Gyermek elemek (szöveg) */
  children?: React.ReactNode;
}

/**
 * Button Komponens
 * 
 * @example
 * // Primary button
 * <Button variant="primary" size="large" icon="add-line">
 *   Add Item
 * </Button>
 * 
 * // Outline button
 * <Button variant="outline" size="medium" color="negative" icon="delete-bin-line">
 *   Delete
 * </Button>
 * 
 * // Icon only button
 * <Button variant="primary" iconOnly icon="search-line" aria-label="Search" />
 * 
 * // Toggle button
 * <Button variant="toggle" selected={isSelected} onClick={() => setIsSelected(!isSelected)}>
 *   Favorite
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      color = 'brand',
      iconOnly = false,
      icon,
      iconPosition = 'left',
      quiet = false,
      selected = false,
      loading = false,
      fullWidth = false,
      disabled = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    // CSS osztályok összeállítása
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const sizeClass = `btn-${size}`;
    const colorClass = color !== 'brand' ? `btn-${color}` : '';
    const iconOnlyClass = iconOnly ? 'btn-icon-only' : '';
    const quietClass = quiet && variant === 'subtle' ? 'btn-quiet' : '';
    const selectedClass = selected && variant === 'toggle' ? 'btn-selected' : '';
    const loadingClass = loading ? 'btn-loading' : '';
    const fullWidthClass = fullWidth ? 'btn-full-width' : '';
    
    const classes = [
      baseClass,
      variantClass,
      sizeClass,
      colorClass,
      iconOnlyClass,
      quietClass,
      selectedClass,
      loadingClass,
      fullWidthClass,
      className
    ].filter(Boolean).join(' ');
    
    // Icon méret mapping
    const iconSizeMap: Record<ButtonSize, string> = {
      large: 'lg',
      medium: 'md',
      small: 'sm',
      xsmall: 'xs'
    };
    
    const iconSize = iconSizeMap[size];
    
    // Icon szín mapping
    const getIconColor = () => {
      if (variant === 'primary') {
        return color === 'inverted' ? 'brand' : 'inverted';
      }
      if (variant === 'outline') {
        return color === 'inverted' ? 'inverted' : color;
      }
      if (variant === 'subtle' || variant === 'toggle') {
        if (color === 'inverted') return 'inverted';
        if (color === 'neutral') return 'default';
        return color;
      }
      return 'default';
    };
    
    const iconColor = getIconColor();
    
    // Loading spinner ikon
    const renderIcon = () => {
      if (loading) {
        return <RemixIcon name="loader-2-line" size={iconSize} color={iconColor} className="btn-spinner" />;
      }
      if (icon) {
        return <RemixIcon name={icon} size={iconSize} color={iconColor} />;
      }
      return null;
    };
    
    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {!iconOnly && icon && iconPosition === 'left' && renderIcon()}
        {iconOnly && renderIcon()}
        {!iconOnly && children && <span className="btn-text">{children}</span>}
        {!iconOnly && icon && iconPosition === 'right' && renderIcon()}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

