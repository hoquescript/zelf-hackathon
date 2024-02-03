import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: "filled" | "outlined";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const Button = (props: ButtonProps) => {
  const { variant = "filled", children, className, onClick } = props;

  return (
    <button className={`${styles.button} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
