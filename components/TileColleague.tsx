import * as React from "react";
import styles from "../styles/TileColleague.module.scss";

type Props = {
  id: number;
  name: string;
  title: string;
};
export const TileColleague = ({ id, name, title }: Props) => {
  return (
    <div className="flex fdc aic text-center">
      <div
        className={styles.img}
        style={{ backgroundImage: `url('/images/avatars/${id}.jpg` }}
      />
      <div className="text-lg mt-7 mb-2">{name}</div>
      <span className="text-body-sm mb-0 text-faded">{title}</span>
    </div>
  );
};
