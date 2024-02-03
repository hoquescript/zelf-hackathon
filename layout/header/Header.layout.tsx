/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Header.module.scss";
import Button from "@/components/atoms/Button/Button.component";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <img src="/logo.svg" alt="Zelf Logo" />
          <nav>
            <Button variant="outlined" className="mr-10">
              Sign In
            </Button>
            <Button>Join</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
