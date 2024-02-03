import React, { Fragment, useEffect, useRef, useState } from "react";

import styles from "./Clamp.module.scss";
import Link from "next/link";

interface ClampProps {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  noOfLines?: number;
  showReadMoreButton?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Clamp: React.FC<ClampProps> = (props) => {
  const { children, className, noOfLines, showReadMoreButton = true } = props;

  const [clamped, setClamped] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const onExpandToggle = () => setClamped(!clamped);

  return (
    <Fragment>
      <div
        ref={containerRef}
        style={{ WebkitLineClamp: noOfLines }}
        className={`${clamped ? styles.content : ""} ${className}`}
      >
        {children}
      </div>
      {showButton && showReadMoreButton && (
        <button className={styles.content__readmore} onClick={onExpandToggle}>
          See {clamped ? "more" : "less"}
        </button>
      )}
    </Fragment>
  );
};

Clamp.defaultProps = {
  noOfLines: 3,
  as: "p",
};

export default Clamp;
