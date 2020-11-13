import React from "react";
import cx from "classnames";

export const Image = ({ src, alt, className, figClassName, style }) => {
  return (
    <figure className={cx(figClassName)} style={style}>
      <img src={src} alt={alt} className={className} />
    </figure>
  );
};
