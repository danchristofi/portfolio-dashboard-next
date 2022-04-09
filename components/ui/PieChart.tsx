import React from "react";
import styles from "../../styles/PieChart.module.scss";

type Props = {
  percentage: number;
  className?: string;
};

const PieChart = ({ percentage = 0, className = "" }: Props) => {
  return (
    <div className={`${styles.circularChart} ${className}`}>
      <svg viewBox="0 0 36 36" className="w-100">
        <path
          className={styles.circleAlt}
          strokeDasharray="100, 100"
          d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
        />

        {percentage && (
          <path
            className={styles.circle}
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        )}
      </svg>

      <div className={styles.text}>
        {percentage}
        <span>%</span>
      </div>
    </div>
  );
};

export default PieChart;
