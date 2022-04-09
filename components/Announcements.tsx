import * as React from "react";
import { Activity } from "./Activity";

type Props = {
  className?: string;
};

export const Announcements = ({ className }: Props) => {
  return (
    <div className={`scroll-styling ${className}`}>
      <Activity
        isNew
        time={1}
        text={"Christmas Party! See the featured tile for more information"}
      />

      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        return <Activity key={i} time={i + 1} />;
      })}
    </div>
  );
};
