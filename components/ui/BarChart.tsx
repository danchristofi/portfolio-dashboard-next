import * as React from "react";
import styles from "../../styles/BarChart.module.scss";

export const BarChart = () => {
  const data = [
    {
      month: "FEB",
      percent: 20,
    },
    {
      month: "MAR",
      percent: 80,
    },
    {
      month: "APR",
      percent: 50,
    },
    {
      month: "MAY",
      percent: 30,
    },
    {
      month: "JUN",
      percent: 70,
    },
    {
      month: "JUL",
      percent: 100,
    },
  ];

  return (
    <div className={styles.barChart}>
      <div className={styles.bars}>
        {data.map((month) => {
          return (
            <div key={month.month} data-month={month.month}>
              <span
                style={{ height: `${month.percent}%` }}
                className={month.percent >= 60 ? styles.active : ""}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
