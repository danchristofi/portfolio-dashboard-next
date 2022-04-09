import * as React from "react";
import { SectionBase } from "./SectionBase";
import { SectionTitle } from "../../SectionTitle";
import { useContext } from "react";
import { HomepageContext } from "../../../contexts/HomepageContext";
import { TileInfo } from "../../TileInfo";
import Button from "../../ui/Button";

export const CollectionsCBM = () => {
  const { findSectionById } = useContext(HomepageContext);

  const titleContent = (
    <SectionTitle
      title={findSectionById("CollectionsCBM").title}
      subtitle={findSectionById("CollectionsCBM").subtitle}
      icon={"collection"}
      hasBorder
    />
  );

  const mainContent = (mode: string) => (
    <>
      {[1, 2, 3, 4].map((tile) => {
        return <TileInfo key={tile} compact={mode === "compact"} createdByMe />;
      })}
    </>
  );

  return (
    <SectionBase
      titleContent={titleContent}
      mainContent={mainContent}
      gridType={"info"}
    >
      <div className="flex jcc mt-10">
        <Button
          className="mt-10"
          theme={"contrastSolid"}
          size={"lg"}
          icon={"plus"}
          text={"Create Collection"}
        />
      </div>
    </SectionBase>
  );
};
