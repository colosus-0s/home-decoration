import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  showArrow?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  target,
  rel,
  showArrow = true,
  icon,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ...rest
}) => {
  // Arrow Icon SVG component
  const ArrowIcon = () => (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary-token group';
      case 'secondary':
        return 'btn-secondary-token group';
      case 'text':
        return 'link-underline-token group py-2';
      default:
        return 'btn-primary-token group';
    }
  };

  const combinedClassName = `${getVariantStyles()} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {icon ? (
        <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
      ) : showArrow ? (
        <ArrowIcon />
      ) : null}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        className={combinedClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClassName}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
