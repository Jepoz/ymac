import React from 'react';
import styles from  './button.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  icon?: React.ReactNode;
  text?: string;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  as = 'button',
  href,
  target,
  rel,
  className = '',
  ...props
}) => {
  const content = (
    <>
      {icon && <span className={styles["button-icon"]}>{icon}</span>}
      {text && <span>{text}</span>}
    </>
  );

  const classes = `${styles["base-button"]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
