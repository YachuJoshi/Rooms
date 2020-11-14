import React from "react";

import { ReactComponent as LeftArrow } from "../images/icon-angle-left.svg";
import { ReactComponent as RightArrow } from "../images/icon-angle-right.svg";

import styles from "./Pagination.module.scss";

export const Pagination = ({ setCurrentIndex }) => {
  return (
    <div className={styles.Pagination}>
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
  );
};
