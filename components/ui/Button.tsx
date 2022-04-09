import Icon from "./Icon";
import styles from "../../styles/Button.module.scss";
import React from "react";

type Props = {
  theme?:
    | "default"
    | "ghost"
    | "light"
    | "lightAccent"
    | "accentLight"
    | "accentDark"
    | "accentMatch"
    | "contrastSolid";
  size?: "sm" | "md" | "lg";
  block?: boolean;
  text?: string;
  icon?: boolean | string;
  iconSize?: "xs" | "sm" | "md" | "lg";
  className?: string;
  onClick?: React.MouseEventHandler;
};

export default function Button({
  theme = "default",
  size = "md",
  block = false,
  text = "See All",
  icon = false,
  iconSize = "sm",
  className = "",
  onClick,
}: Props) {
  return (
    <>
      <button
        onClick={onClick}
        className={`
                  ${styles.btn}
                  ${styles[theme]} 
                  ${styles[size]} 
                  ${block ? styles.block : ""} 
                  ${className}
            `}
      >
        {icon && <Icon name={icon} size={iconSize} />}
        {text}
      </button>
    </>
  );
}
