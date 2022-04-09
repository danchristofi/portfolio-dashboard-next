import * as React from "react";
import Panel from "./ui/Panel";
import { Pill } from "./ui/Pill";

type Props = {
  isNew?: boolean;
  hasContent?: boolean;
  hasCollection?: boolean;
  time?: number;
  text?: string;
};

export const Activity = ({
  isNew = false,
  hasContent = false,
  hasCollection = false,
  time = 2,
  text = "Amet qui est et soluta perferendis quia eligendi ea voluptatem.",
}: Props) => {
  return (
    <Panel bg={isNew ? "solid" : "faded"} size={"sm"}>
      <p>
        {isNew && <Pill theme={"contrast"} className={"mr-4"} />}
        <i className="text-faded">
          {time} hour{time !== 1 ? "s" : ""} ago -{" "}
        </i>
        <span dangerouslySetInnerHTML={{ __html: text }} />
        {hasCollection && (
          <a href="#" className="ml-3 text-faded wsnw">
            View Collection
          </a>
        )}
        {hasContent && (
          <a href="#" className="ml-3 text-faded wsnw">
            View Content
          </a>
        )}
      </p>
    </Panel>
  );
};
