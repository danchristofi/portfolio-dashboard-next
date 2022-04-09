import * as React from "react";
import styles from "../styles/Tile.module.scss";
import Icon from "./ui/Icon";
import { Tab } from "./ui/Tab";

type Props = {
  image: string;
  className?: string;
  text: string;
  isCollection?: boolean;
  createdByMe?: boolean;
  type?: "link" | "video" | "file";
};
export const Tile = ({
  image,
  className,
  text,
  isCollection = false,
  type = "link",
  createdByMe = false,
}: Props) => {
  return (
    <div
      className={`${styles.tile} ${
        isCollection ? styles.isCollection : ""
      } ${className}`}
    >
      <div className={styles.tabs}>
        {!isCollection && <Tab icon={type} />}

        {createdByMe && <Tab icon={"user"} theme={"accent"} />}
      </div>

      <div className={`${styles.title} clamp-1`}>{text}</div>

      {isCollection && (
        <div className={styles.icon}>
          <Icon name={"collection"} />
        </div>
      )}

      <div
        className={styles.img}
        style={{ backgroundImage: `url(${image})` }}
      />

      {!isCollection && <div className={styles.grad} />}

      {isCollection && (
        <div className={styles.pages}>
          <span />
        </div>
      )}
    </div>
  );
};
