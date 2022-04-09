import * as React from "react";
import styles from "../../../styles/SectionBase.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { bps } from "../../../utils/bps";

type Props = {
  gridType?: "basic" | "info" | "none";
  titleContent?: any;
  mainContent: (mode?: string) => JSX.Element;
  children?: React.ReactNode;
};
export const SectionBase = ({
  gridType = "basic",
  titleContent,
  mainContent,
  children,
}: Props) => {
  const { cbp } = useContext(GlobalContext);

  const basicMode =
    cbp === bps.lg
      ? "count4"
      : cbp === bps.md
      ? "count3"
      : cbp <= bps.sm
      ? "count4"
      : "count5";

  const infoMode = cbp <= bps.lg ? "compact" : "full";

  return (
    <div className={styles.sectionBase}>
      {titleContent}
      {gridType === "basic" ? (
        <div className={`${styles.basicGrid} ${styles[basicMode]}`}>
          {mainContent(basicMode)}
        </div>
      ) : gridType === "info" ? (
        <div className={`${styles.infoGrid} ${styles[infoMode]}`}>
          {mainContent(infoMode)}
        </div>
      ) : (
        <div>{mainContent(infoMode)}</div>
      )}
      {children}
    </div>
  );
};
