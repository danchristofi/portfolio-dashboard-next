import * as React from "react";
import styles from "../styles/TileInfo.module.scss";
import { Tab } from "./ui/Tab";
import Icon from "./ui/Icon";
import { Pill } from "./ui/Pill";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

type Props = {
  sharedWithMe?: boolean;
  createdByMe?: boolean;
  compact?: boolean;
};
export const TileInfo = ({
  sharedWithMe = false,
  createdByMe = false,
  compact = false,
}: Props) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setImage(`https://picsum.photos/200/200?random=${Math.random()}`);
    setDescription(faker.hacker.phrase);
    setTitle(faker.lorem.sentence());
    setName(`${faker.name.firstName()} ${faker.name.lastName()}`);
  }, []);

  return (
    <div className={`${styles.tileInfo} ${compact ? styles.compact : ""}`}>
      <div className={styles.info}>
        <div className={styles.tabs}>
          {createdByMe && <Tab size={"sm"} icon={"user"} theme={"accent"} />}
        </div>

        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div style={{ padding: "1rem 0.2rem 0.5rem" }}>
          <div className="text-sm mb-3 flex aic">
            <Icon className={"mr-2 text-faded"} size={"sm"} name={"file"} />
            <span>5 Items</span>
          </div>
          <div className="text-sm flex aic">
            <Icon className="mr-2 text-faded" size={"sm"} name={"clock"} />
            <span>01/01/22</span>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <i className="text-sm mb-3 flex text-faded">
          Created by {createdByMe ? "you" : name}
        </i>
        <div className="text-lg mb-2 clamp-1">
          {sharedWithMe && (
            <Icon
              size={"sm"}
              name={"share"}
              style={{
                verticalAlign: "middle",
                position: "relative",
                top: "-0.2em",
              }}
            />
          )}{" "}
          {title}
        </div>
        <p className="text-faded clamp-2">{description}</p>
        <hr className="mb-5" />
        <div className="flex-wrap aic text-sm">
          <span className="mr-3 text-faded">
            {sharedWithMe && <span>Also </span>} Shared With:
          </span>
          <Pill className={"mr-3"} size={"sm"} text={"Design Team"} />
          <span className="text-faded">+ 5 Individual Users</span>
        </div>
      </div>
    </div>
  );
};
