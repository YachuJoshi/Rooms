import React from "react";
import cx from "classnames";

export const Image = ({
  src,
  srcSet,
  alt,
  className,
  figClassName,
  ...rest
}) => {
  return (
    <figure className={cx(figClassName)} {...rest}>
      <picture className={className}>
        <source
          media="(min-width: 432px)"
          srcSet={srcSet}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <img
          src={src}
          alt={alt}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </picture>
    </figure>
  );
};
