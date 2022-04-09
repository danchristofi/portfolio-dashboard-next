import * as React from "react";
import { SectionBase } from "./SectionBase";
import { SectionTitle } from "../../SectionTitle";
import { useContext, useEffect, useState } from "react";
import { Tile } from "../../Tile";
import { HomepageContext } from "../../../contexts/HomepageContext";
import { faker } from "@faker-js/faker";

export const AssignedToMe = () => {
  const { findSectionById } = useContext(HomepageContext);

  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    setTiles([
      {
        id: 1,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=1",
        type: "video",
      },
      {
        id: 2,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=2",
      },
      {
        id: 3,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=3",
        type: "file",
      },
      {
        id: 4,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=4",
        type: "link",
      },
      {
        id: 5,
        text: faker.lorem.sentence(),
        image: "https://picsum.photos/400/400?random=5",
        type: "video",
      },
    ]);
  }, []);

  const titleContent = (
    <SectionTitle
      title={findSectionById("AssignedToMe").title}
      icon={"checkbox"}
      hasBorder
    />
  );

  const mainContent = () => (
    <>
      {tiles.map((tile) => {
        return (
          <Tile key={tile.id} text={tile.text} image={tile.image} createdByMe />
        );
      })}
    </>
  );

  return <SectionBase titleContent={titleContent} mainContent={mainContent} />;
};
