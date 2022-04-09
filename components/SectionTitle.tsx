import * as React from "react";
import styles from "../styles/SectionTitle.module.scss";
import Icon from "./ui/Icon";
import Button from "./ui/Button";

type Props = {
  className?: string;
  title: string;
  subtitle?: string;
  icon?: string;
  sm?: boolean;
  hasBorder?: boolean;
};

export const SectionTitle = ({
  className = "",
  title = "",
  subtitle = "",
  icon = "star",
  sm = false,
  hasBorder = false,
}: Props) => {
  return (
    <div
      className={`
      ${styles.sectionTitle} 
      ${sm ? styles.sm : ""} 
      ${hasBorder ? styles.hasBorder : ""}
      ${className}
    `}
    >
      <h2>
        <Icon name={icon} size={sm ? "md" : "lg"} /> {title}
        {subtitle && (
          <span className="text-faded text-lg mb-0 font-normal mt-1 ml-5">
            {subtitle}
          </span>
        )}
      </h2>

      <Button size={sm ? "sm" : "md"} />
    </div>
  );
};
