import React from "react";
import cx from "classnames";

export const Image = ({ src, alt, className, figClassName, ...rest }) => {
  return (
    <figure className={cx(figClassName)} {...rest}>
      <img src={src} alt={alt} className={className} />
    </figure>
  );
};
