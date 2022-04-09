import * as React from "react";
import { SectionBase } from "./SectionBase";
import { SectionTitle } from "../../SectionTitle";
import { useContext } from "react";
import { TileInfo } from "../../TileInfo";
import { HomepageContext } from "../../../contexts/HomepageContext";

export const CollectionsSWM = () => {
  const { findSectionById } = useContext(HomepageContext);

  const titleContent = (
    <SectionTitle
      title={findSectionById("CollectionsSWM").title}
      subtitle={findSectionById("CollectionsSWM").subtitle}
      icon={"collection"}
      hasBorder
    />
  );

  const mainContent = (mode: string) => (
    <>
      {[1, 2, 3, 4].map((tile) => {
        return (
          <TileInfo key={tile} compact={mode === "compact"} sharedWithMe />
        );
      })}
    </>
  );

  return (
    <SectionBase
      titleContent={titleContent}
      mainContent={mainContent}
      gridType={"info"}
    />
  );
};
