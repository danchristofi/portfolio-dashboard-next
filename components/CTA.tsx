import Button from "./ui/Button";
import Panel from "./ui/Panel";
import Icon from "./ui/Icon";
import styles from "../styles/CTA.module.scss";
import React from "react";

type Props = {
  mode: "md" | "sm";
  className?: string;
  buttonText: string;
  dismissable?: boolean;
  headerContent?: React.ReactNode;
  bodyContent?: React.ReactNode;
  onAction?: React.MouseEventHandler;
};

export default function CTA({
  mode = "md",
  className = "",
  buttonText = "",
  dismissable = false,
  headerContent,
  bodyContent,
  onAction,
}: Props) {
  return (
    <Panel
      size={"lg"}
      bg={"default"}
      className={`${styles.cta} ${styles[mode]} ${className}`}
    >
      {dismissable && (
        <button className="close">
          <Icon name={"cross"} size={"md"} />
        </button>
      )}

      <h1 className="text-xl flex-wrap aic">{headerContent}</h1>

      <div className={styles.ctaContent}>
        <div className={styles.ctaBody}>{bodyContent}</div>

        <Button
          block={mode === "sm"}
          theme={"accentLight"}
          size={"lg"}
          onClick={onAction}
          text={buttonText}
        />
      </div>
    </Panel>
  );
}
