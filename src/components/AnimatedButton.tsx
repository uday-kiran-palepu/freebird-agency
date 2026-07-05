import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AnimatedButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  to,
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white backdrop-blur-sm"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const motionProps = {
    whileHover: { 
      scale: disabled ? 1 : 1.05,
      y: disabled ? 0 : -2
    },
    whileTap: { 
      scale: disabled ? 1 : 0.98,
      y: disabled ? 0 : 0
    },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.2
    }
  };

  if (disabled) {
    return (
      <motion.button
        className={`${buttonClasses} opacity-50 cursor-not-allowed`}
        disabled
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link
          to={to}
          className={buttonClasses}
          onClick={() => window.scrollTo(0, 0)}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;