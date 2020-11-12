import React from "react";
import cx from "classnames";

import HeroOne from "../images/desktop-image-hero-1.jpg";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={cx(styles.Hero)}>
      <div className={styles.HeroLeft}>
        <figure className={styles.HeroImageContainer}>
          <img src={HeroOne} alt="Hero" className={styles.HeroImage} />
        </figure>
      </div>
      <div className={styles.HeroRight}>
        <article className={styles.HeroContent}>
          <h1 className={styles.HeroHeading}>
            Discover innovative ways to decorate
          </h1>
          <p className={styles.HeroDescription}>
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <span className={styles.ShopButton}>
            SHOP NOW <Arrow className={styles.Arrow} />
          </span>
        </article>
      </div>
    </div>
  );
};
