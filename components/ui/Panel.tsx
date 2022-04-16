import React from "react";
import styles from "../../styles/Panel.module.scss";

type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  bg?: "faded" | "default" | "solid" | "match" | "accent";
  shadow?: boolean;
  innerClasses?: string;
  className?: string;
  footerContent?: any;
  children?: React.ReactNode;
  style?: Object;
};

const Panel = ({
  size = "md",
  bg = "default",
  shadow = false,
  innerClasses = "",
  className = "",
  footerContent,
  children,
  style,
}: Props) => {
  return (
    <div
      style={style}
      className={`${styles.panel} ${styles[size]} bg-contrast bg-contrast--${bg} ${shadow ? styles.shadow : ''} ${className}`}
    >
      <div className={`${styles.inner} ${innerClasses}`}>{children}</div>

      {footerContent && (
        <div className={`${styles.footer} bg-contrast bg-contrast--faded`}>
          {footerContent}
        </div>
      )}
    </div>
  );
};

export default Panel;
