import * as React from "react";
import { SectionBase } from "./SectionBase";
import { SectionTitle } from "../../SectionTitle";
import { useContext, useState } from "react";
import { TileColleague } from "../../TileColleague";
import { HomepageContext } from "../../../contexts/HomepageContext";

export const Colleagues = () => {
  const { findSectionById } = useContext(HomepageContext);
  const [colleagues] = useState([
    {
      id: 1,
      name: "Aron Yost",
      title: "Senior Web Designer",
    },
    {
      id: 2,
      name: "Graham Nolan",
      title: "Legacy Operations Officer",
    },
    {
      id: 3,
      name: "Cydney Aufderhar",
      title: "Dynamic Quality Developer",
    },
    {
      id: 4,
      name: "Teagan Durgan",
      title: "Corporate Branding Officer",
    },
    {
      id: 5,
      name: "Callie Miller",
      title: "Direct Branding Architect",
    },
  ]);

  const titleContent = (
    <SectionTitle
      title={findSectionById("Colleagues").title}
      icon={"users"}
      hasBorder
    />
  );

  const mainContent = () => (
    <>
      {colleagues.map((colleague) => {
        return (
          <TileColleague
            key={colleague.id}
            id={colleague.id}
            name={colleague.name}
            title={colleague.title}
          />
        );
      })}
    </>
  );

  return <SectionBase titleContent={titleContent} mainContent={mainContent} />;
};
