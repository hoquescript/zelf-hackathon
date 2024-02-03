/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "../styles/pages/login.module.scss";
import RadioButton from "@/components/atoms/Forms/radiobutton/RadioButton.component";
import Button from "@/components/atoms/Button/Button.component";
import Link from "next/link";

const Loginpage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <img src="/login_bg.svg" alt="Login Background" className={styles.form__image} />
        <aside className={styles.form__main}>
          <h2>Register Your Account</h2>
          <div>
            <RadioButton options={["I represent a Brand"]} />
          </div>
          <Button className={styles.form__button}>Continue</Button>
          <p className={styles.form__link}>
            Already a member? <Link href="/api/auth/login/">Sign In</Link>
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Loginpage;
