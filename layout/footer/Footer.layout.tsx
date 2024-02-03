import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Icon from "@/components/atoms/Icon/Icon.component";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <nav className={styles.footer__links}>
            <a href="https://hellozelf.com/wp-content/uploads/2022/03/Zelf.-Terms-of-Service.pdf" target="_blank">
              Terms of Service
            </a>
            <a href="https://hellozelf.com/wp-content/uploads/2022/04/Zelf.-Privacy-Policy-1.pdf" target="_blank">
              Privacy Policy
            </a>
            <a href="https://hellozelf.com/wp-content/uploads/2022/04/Zelf.-DMCA.pdf" target="_blank">DMCA</a>
          </nav>
          <div className={styles.footer__social}>
            <p>© All rights reserved by Zelf. 2024</p>
            <span className={styles.footer__social_icons}>
              <Icon className="mr-10">instagram</Icon>
              <Icon className="mr-10">tiktok</Icon>
              <Icon className="mr-10">facebook</Icon>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
