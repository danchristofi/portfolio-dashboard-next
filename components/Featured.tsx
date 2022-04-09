import * as React from "react";
import styles from "../styles/Featured.module.scss";
import { SectionTitle } from "./SectionTitle";
import { Tile } from "./Tile";
import Panel from "./ui/Panel";
import Icon from "./ui/Icon";
import { Announcements } from "./Announcements";
import { useContext } from "react";
import { HomepageContext } from "../contexts/HomepageContext";

export const Featured = () => {
  const { featuredTiles } = useContext(HomepageContext);

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <SectionTitle
          hasBorder
          title={"Featured"}
          className={styles.featuredTitle}
        />

        {featuredTiles.map((tile, index) => {
          return (
            <Tile
              className={index === 0 ? styles.lg : ""}
              text={tile.text}
              key={tile.id}
              isCollection={tile.isCollection || false}
              image={tile.image}
              type={tile.type}
            />
          );
        })}

        <SectionTitle
          hasBorder
          icon={"message"}
          title={"Latest"}
          sm
          className={styles.announcementsTitle}
        />

        <Announcements className={styles.announcements} />

        <Panel className={styles.backdrop} bg={"match"} />
      </div>

      <div className={styles.prompt}>
        <Icon size={"md"} width={"thick"} name={"chevron-down"} />
      </div>
    </section>
  );
};
