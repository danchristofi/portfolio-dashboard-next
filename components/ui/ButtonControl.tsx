import * as React from "react";
import Icon from "./Icon";
import styles from "../../styles/ButtonControl.module.scss";

type Props = {
  theme?: "accentMatch" | "default";
  icon?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: React.MouseEventHandler;
};

export const ButtonControl = ({
  theme = "accentMatch",
  icon = "plus",
  size = "md",
  className = "",
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btnControl} ${styles[theme]} ${styles[size]} ${className}`}
    >
      <Icon size={"sm"} width={"thick"} name={icon} />
    </button>
  );
};
