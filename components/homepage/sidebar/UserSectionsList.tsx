import * as React from "react";
import { SectionCard } from "../SectionCard";
import { useContext } from "react";
import { HomepageContext } from "../../../contexts/HomepageContext";
import { ListError } from "./ListError";
import { ListContainer } from "./ListContainer";
import { List } from "./List";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToFirstScrollableAncestor,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export const UserSectionsList = () => {
  const { userSections, findSectionById, setUserSections } =
    useContext(HomepageContext);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setUserSections((userSections) => {
        const oldIndex = userSections.indexOf(active.id);
        const newIndex = userSections.indexOf(over.id);

        return arrayMove(userSections, oldIndex, newIndex);
      });
    }
  }

  return (
    <ListContainer title={"Your Homepage"}>
      {!!userSections.length && (
        <List>
          <DndContext
            modifiers={[
              restrictToVerticalAxis,
              restrictToFirstScrollableAncestor,
            ]}
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={userSections}
              strategy={verticalListSortingStrategy}
            >
              {userSections.map((section: string) => {
                const _section = findSectionById(section);
                return (
                  <SectionCard
                    isDraggable
                    key={_section.id}
                    id={_section.id}
                    title={_section.title}
                    subtitle={_section.subtitle}
                  />
                );
              })}
            </SortableContext>
          </DndContext>
        </List>
      )}

      {!userSections.length && (
        <ListError title={"No sections added"}>
          Add some from the <br />
          <strong>Sections</strong> column
        </ListError>
      )}
    </ListContainer>
  );
};
