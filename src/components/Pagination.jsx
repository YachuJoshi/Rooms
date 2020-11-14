import React from "react";

import { ReactComponent as LeftArrow } from "../images/icon-angle-left.svg";
import { ReactComponent as RightArrow } from "../images/icon-angle-right.svg";

import styles from "./Pagination.module.scss";

export const Pagination = ({ setCurrentIndex }) => {
  return (
    <div className={styles.Pagination}>
      <button
        className={styles.ArrowLeft}
        onClick={() =>
          setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) return 2;
            return prevIndex - 1;
          })
        }
      >
        <LeftArrow />
      </button>
      <button
        className={styles.ArrowRight}
        onClick={() =>
          setCurrentIndex((prevIndex) => {
            if (prevIndex === 2) return 0;
            return prevIndex + 1;
          })
        }
      >
        <RightArrow />
      </button>
    </div>
  );
};
