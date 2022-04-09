import styles from "../styles/Container.module.scss";
import React from "react";

type Props = {
  children?: React.ReactNode;
  alt?: boolean;
};

export default function Container({ children, alt = false }: Props) {
  return (
    <div className={`${styles.container} ${alt ? styles.alt : ""}`}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
