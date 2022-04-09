import * as React from "react";
import { bps } from "../../../utils/bps";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";

type Props = {
  children?: React.ReactNode;
};
export const List = ({ children }: Props) => {
  const { cbp } = useContext(GlobalContext);

  return (
    <div
      className={
        cbp >= bps.md ? "scroll-styling scroll-styling--offset h-100" : ""
      }
    >
      {children}
    </div>
  );
};
