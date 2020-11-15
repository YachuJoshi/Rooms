import React from "react";

import { CONTENT } from "../Content";

import { Image } from "../ui-kit";
import styles from "./Gallery.module.scss";

export const Gallery = ({ currentIndex }) => {
  return (
    <div className={styles.Gallery}>
      {CONTENT.map((item, index) => (
        <Image
          style={{
            transform: `translate3d(${currentIndex * -100}% , 0, 0)`,
          }}
          src={item.imgMobile}
          srcSet={item.imgDesktop}
          alt="Hero"
          key={index}
          figClassName={styles.HeroImageContainer}
          className={styles.HeroImage}
        />
      ))}
    </div>
  );
};
