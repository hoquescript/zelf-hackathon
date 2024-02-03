import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: "filled" | "outlined";
  className?: string;
  children: React.ReactNode;
}
const Button = (props: ButtonProps) => {
  const { variant = "filled", children, className } = props;

  return <button className={`${styles.button} ${styles[variant]} ${className}`}>{children}</button>;
};

export default Button;
