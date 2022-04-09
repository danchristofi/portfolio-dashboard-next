import * as React from "react";
import { SectionBase } from "./SectionBase";
import { SectionTitle } from "../../SectionTitle";
import { useContext, useEffect, useState } from "react";
import { Tile } from "../../Tile";
import Button from "../../ui/Button";
import { HomepageContext } from "../../../contexts/HomepageContext";
import { faker } from "@faker-js/faker";

export const MyContent = () => {
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
      title={findSectionById("MyContent").title}
      icon={"user"}
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

  return (
    <SectionBase titleContent={titleContent} mainContent={mainContent}>
      <div className="flex jcc mt-10">
        <Button
          className="mt-10"
          theme={"contrastSolid"}
          size={"lg"}
          icon={"plus"}
          text={"Create Content"}
        />
      </div>
    </SectionBase>
  );
};
