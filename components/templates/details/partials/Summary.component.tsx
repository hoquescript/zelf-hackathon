import React from "react";
import styles from "./Summary.module.scss";

const Summary = () => {
  return (
    <div className={styles.summaries}>
      <div className={styles.summary}>
        <h5>95k</h5>
        <p>Total views</p>
      </div>
      <div className={styles.summary}>
        <h5>6k</h5>
        <p>Total likes</p>
      </div>
      <div className={styles.summary}>
        <h5>12k</h5>
        <p>Total comments</p>
      </div>
      <div className={styles.summary}>
        <h5>16.8%</h5>
        <p>Engagement Rates</p>
      </div>
    </div>
  );
};

export default Summary;
