import * as React from "react";
import styles from "../../styles/ColourPicker.module.scss";

type Props = {
  options: string[];
  active: number;
  onChange: (a: number) => void;
};

export const ColourPicker = ({ options, active, onChange }: Props) => {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <button
            key={option}
            className={`
              ${styles.button} 
              ${index === active ? styles.active : ""}
             `}
            onClick={() => onChange(index)}
            style={{ background: `rgba(${option}, 1)` }}
          />
        );
      })}
    </div>
  );
};
