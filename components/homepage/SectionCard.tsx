import * as React from "react";
import { ButtonControl } from "../ui/ButtonControl";
import styles from "../../styles/SectionCard.module.scss";
import { useContext } from "react";
import { HomepageContext } from "../../contexts/HomepageContext";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  isDraggable?: boolean;
  isAddable?: boolean;
  id: string;
  title: string;
  subtitle?: string;
};
export const SectionCard = ({
  isDraggable = false,
  isAddable = false,
  id = "",
  title = "",
  subtitle = "",
}: Props) => {
  const { addUserSection, removeUserSection } = useContext(HomepageContext);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={styles.sectionCard}
    >
      {isDraggable && (
        <div className={styles.handle} {...listeners}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
          >
            <g transform="translate(-1196 -121)">
              <circle cx="2" cy="2" r="2" transform="translate(1196 121)" />
              <circle cx="2" cy="2" r="2" transform="translate(1196 128)" />
              <circle cx="2" cy="2" r="2" transform="translate(1196 135)" />
              <circle cx="2" cy="2" r="2" transform="translate(1202 121)" />
              <circle cx="2" cy="2" r="2" transform="translate(1202 128)" />
              <circle cx="2" cy="2" r="2" transform="translate(1202 135)" />
            </g>
          </svg>
        </div>
      )}

      <div className={styles.inner}>
        <div className="mr-5">
          <span>{title}</span>
          {subtitle && <i className="text-faded"> - {subtitle}</i>}
        </div>

        <ButtonControl
          className={"ml-a"}
          onClick={
            isAddable ? () => addUserSection(id) : () => removeUserSection(id)
          }
          theme={isAddable ? "accentMatch" : "default"}
          icon={isAddable ? "plus" : "minus"}
        />
      </div>
    </div>
  );
};
