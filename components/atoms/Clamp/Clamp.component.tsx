import React, { Fragment, useEffect, useRef, useState } from "react";

import styles from "./Clamp.module.scss";

interface ClampProps {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  noOfLines?: number;
  showReadMoreButton?: boolean;
  children: React.ReactNode;
}

const Clamp: React.FC<ClampProps> = (props) => {
  const { children, as, noOfLines, showReadMoreButton = true } = props;

  const [clamped, setClamped] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const onExpandToggle = () => setClamped(!clamped);

  // useEffect(() => {
  //   const hasClamping = (el) => {
  //     const { clientHeight, scrollHeight } = el;
  //     return clientHeight !== scrollHeight;
  //   };

  //   const checkButtonAvailability = () => {
  //     if (containerRef.current) {
  //       // Save current state to reapply later if necessary.
  //       const hadClampClass = containerRef.current.classList.contains("clamp");
  //       // Make sure that CSS clamping is applied if aplicable.
  //       if (!hadClampClass) containerRef.current.classList.add("clamp");
  //       // Check for clamping and show or hide button accordingly.
  //       setShowButton(hasClamping(containerRef.current));
  //       // Sync clamping with local state.
  //       if (!hadClampClass) containerRef.current.classList.remove("clamp");
  //     }
  //   };

  //   checkButtonAvailability();
  //   window.addEventListener("resize", checkButtonAvailability);

  //   return () => {
  //     window.removeEventListener("resize", checkButtonAvailability);
  //   };
  // }, [containerRef]);

  return (
    <Fragment>
      <div ref={containerRef} style={{ WebkitLineClamp: noOfLines }} className={clamped ? styles.content : ""}>
        {children}
      </div>
      {showButton && showReadMoreButton && (
        <button className={styles.content__readmore} onClick={onExpandToggle}>
          Read {clamped ? "more" : "less"}
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
