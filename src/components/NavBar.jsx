import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cx from "classnames";

import Logo from "../images/logo.svg";

import { ReactComponent as HamburgerMenu } from "../images/icon-hamburger.svg";
import { ReactComponent as CloseButton } from "../images/icon-close.svg";

import styles from "./NavBar.module.scss";

const navItems = ["home", "shop", "about", "contact"];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuIcon = !isOpen ? HamburgerMenu : CloseButton;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <header>
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
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className={styles.NavList}
                key="nav"
                initial={{ translateY: -100 }}
                animate={{ translateY: 0 }}
                exit={{ translateY: -100 }}
              >
                {navItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.Overlay}
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            />
          )}
        </AnimatePresence>
        <div className={styles.NavDesktop}>
          <img src={Logo} alt="Logo" className={styles.Logo} />
          <ul className={cx(styles.NavListDesktop)}>
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
