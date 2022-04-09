import * as React from "react";
import styles from "../../styles/Tab.module.scss";
import Icon from "./Icon";

type Props = {
  icon?: string;
  theme?: string;
  size?: "md" | "sm";
};

export const Tab = ({
  icon = "collection",
  theme = "default",
  size = "md",
}: Props) => {
  return (
    <div className={`${styles.tab} ${styles[theme]} ${styles[size]}`}>
      <Icon name={icon} size={"sm"} />
    </div>
  );
};
