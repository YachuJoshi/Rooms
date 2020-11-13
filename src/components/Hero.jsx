import React, { useState } from "react";
import cx from "classnames";

import HeroOne from "../images/desktop-image-hero-1.jpg";
import HeroTwo from "../images/desktop-image-hero-2.jpg";
import HeroThree from "../images/desktop-image-hero-3.jpg";
import { ReactComponent as Arrow } from "../images/icon-arrow.svg";
import { ReactComponent as LeftArrow } from "../images/icon-angle-left.svg";
import { ReactComponent as RightArrow } from "../images/icon-angle-right.svg";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={cx(styles.Hero)}>
      <div className={styles.HeroLeft}>
        <div className={styles.Gallery}>
          <figure
            style={{
              transform: `translate3d(${currentIndex * -100}% , 0, 0)`,
            }}
            className={styles.HeroImageContainer}
          >
            <img src={HeroOne} alt="Hero" className={styles.HeroImage} />
          </figure>
          <figure
            style={{
              transform: `translate3d(${currentIndex * -100}% , 0, 0)`,
            }}
            className={styles.HeroImageContainer}
          >
            <img src={HeroTwo} alt="Hero" className={styles.HeroImage} />
          </figure>
          <figure
            style={{
              transform: `translate3d(${currentIndex * -100}% , 0, 0)`,
            }}
            className={styles.HeroImageContainer}
          >
            <img src={HeroThree} alt="Hero" className={styles.HeroImage} />
          </figure>
        </div>
      </div>
      <div className={styles.Pagination} style={{}}>
        <div className={styles.ArrowLeft}>
          <LeftArrow
            onClick={() =>
              setCurrentIndex((prevIndex) => {
                if (prevIndex === 0) return 2;
                return prevIndex - 1;
              })
            }
          />
        </div>
        <div className={styles.ArrowRight}>
          <RightArrow
            onClick={() =>
              setCurrentIndex((prevIndex) => {
                if (prevIndex === 2) return 0;
                return prevIndex + 1;
              })
            }
          />
        </div>
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
