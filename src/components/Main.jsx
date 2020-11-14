import React from "react";

import styles from "./Main.module.scss";

import MainImgOne from "../images/image-about-dark.jpg";
import MainImgTwo from "../images/image-about-light.jpg";

export const Main = () => {
  return (
    <main>
      <div className={styles.Container}>
        <div className={styles.LeftWrapper}>
          <figure className={styles.ImgDarkWrapper}>
            <img
              src={MainImgOne}
              alt="Dark Furniture"
              className={styles.ImgDark}
            />
          </figure>
        </div>
        <div className={styles.Content}>
          <h2 className={styles.Heading}>About Our Furniture</h2>
          <p className={styles.Text}>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className={styles.RightWrapper}>
          <figure className={styles.ImgLightWrapper}>
            <img
              src={MainImgTwo}
              alt="Light Furniture"
              className={styles.ImgLight}
            />
          </figure>
        </div>
      </div>
    </main>
  );
};
