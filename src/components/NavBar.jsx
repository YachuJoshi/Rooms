import React, { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./NavBar.module.scss";
import Logo from "../images/logo.svg";
import { ReactComponent as HamburgerMenu } from "../images/icon-hamburger.svg";
import { ReactComponent as CloseButton } from "../images/icon-close.svg";

const navItems = ["home", "shop", "about", "contact"];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuIcon = !isOpen ? HamburgerMenu : CloseButton;
  return (
    <nav className={styles.Nav}>
      <div
        className={cx(styles.NavBar, {
          [styles.NavBarActive]: isOpen,
          [styles.NavBarDisabled]: !isOpen,
        })}
      >
        <MenuIcon
          className={cx(styles.Menu, {
            [styles.HamburgerMenu]: !isOpen,
            [styles.CloseButton]: isOpen,
          })}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
        {isOpen && (
          <ul className={styles.NavList}>
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      {isOpen && <div className={styles.Overlay} />}
      <div className={styles.NavDesktop}>
        <img src={Logo} alt="Logo" className={styles.Logo} />
        <ul className={cx(styles.NavListDesktop)}>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
