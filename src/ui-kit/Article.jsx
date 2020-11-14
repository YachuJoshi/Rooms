import React from "react";

import styles from "./Article.module.scss";

import { ReactComponent as Arrow } from "../images/icon-arrow.svg";

export const Article = ({ heading, text }) => {
  return (
    <article className={styles.HeroContent}>
      <h1 className={styles.HeroHeading}>{heading}</h1>
      <p className={styles.HeroDescription}>{text}</p>
      <span className={styles.ShopButton}>
        SHOP NOW <Arrow className={styles.Arrow} />
      </span>
    </article>
  );
};
