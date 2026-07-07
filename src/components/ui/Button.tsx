import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'outline-dark';
  children: ReactNode;
  icon?: ReactNode;
}

const variantClass: Record<string, string> = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  'outline-dark': 'btn-outline-dark',
};

export default function Button({ variant = 'primary', children, icon, className = '', ...rest }: ButtonProps) {
  return (
    <button className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
      {icon}
    </button>
  );
}
