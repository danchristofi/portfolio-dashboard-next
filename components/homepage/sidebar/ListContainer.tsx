import * as React from "react";
import { bps } from "../../../utils/bps";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import styles from "../../../styles/CusomiseSidebar.module.scss";
import { InputLabel } from "../../ui/InputLabel";

type Props = {
  title: string;
  children?: React.ReactNode;
};
export const ListContainer = ({ title, children }: Props) => {
  const { cbp } = useContext(GlobalContext);

  return (
    <div className={`${styles.list} ${cbp < bps.md ? "w-100" : ""}`}>
      <InputLabel text={title} />
      {children}
    </div>
  );
};
