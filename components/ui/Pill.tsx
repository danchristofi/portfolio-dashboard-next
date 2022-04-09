import * as React from "react";
import styles from "../../styles/Pill.module.scss";

type Props = {
  size?: "md" | "sm";
  text?: string;
  theme?: "default" | "contrast";
  className?: string;
};
export const Pill = ({
  size = "md",
  text = "New",
  theme = "default",
  className = "",
}: Props) => {
  return (
    <span
      className={`${styles.pill} ${styles[theme]} ${styles[size]} ${className}`}
    >
      {text}
    </span>
  );
};
