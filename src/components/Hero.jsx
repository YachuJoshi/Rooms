import React, { useState } from "react";
import cx from "classnames";

import { Gallery } from "./Gallery";
import { Pagination } from "./Pagination";
import { Article } from "../ui-kit";

import { CONTENT } from "../Content";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={cx(styles.Hero)}>
      <div className={styles.HeroLeft}>
        <Gallery currentIndex={currentIndex} />
      </div>
      <Pagination setCurrentIndex={setCurrentIndex} />
      <div className={styles.HeroRight}>
        {CONTENT.filter((_, index) => currentIndex === index).map(
          (item, index) => (
            <Article key={index} heading={item.heading} text={item.text} />
          )
        )}
      </div>
    </div>
  );
};
