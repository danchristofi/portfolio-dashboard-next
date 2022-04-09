import * as React from "react";
import { SectionCard } from "../SectionCard";
import { useContext } from "react";
import { HomepageContext } from "../../../contexts/HomepageContext";
import { ListError } from "./ListError";
import { ListContainer } from "./ListContainer";
import { List } from "./List";

export const AvailableSectionsList = () => {
  const { availableSections } = useContext(HomepageContext);

  return (
    <ListContainer title={"Sections"}>
      {!!availableSections.length && (
        <List>
          {availableSections.map((section) => {
            return (
              <SectionCard
                id={section.id}
                key={section.id}
                title={section.title}
                subtitle={section.subtitle}
                isAddable
              />
            );
          })}
        </List>
      )}

      {!availableSections.length && (
        <ListError title={"No sections left"}>
          Come back when we <br />
          have some more!
        </ListError>
      )}
    </ListContainer>
  );
};
