import React from "react";
import Panel from "./ui/Panel";
import Portal from "./Portal";
import Icon from "./ui/Icon";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/SideBar.module.scss";

type Props = {
  children?: React.ReactNode;
  open: boolean;
  heightAuto?: boolean;
  width?: "md" | "lg";
  onClose?: React.MouseEventHandler;
};

const SideBar = ({
  children,
  open = false,
  onClose,
  heightAuto = false,
  width = "lg",
}: Props) => {
  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, translateX: "20%" }}
            animate={{ opacity: 1, translateX: "0%" }}
            exit={{ opacity: 0, translateX: "20%" }}
            transition={{ ease: "anticipate", duration: 0.3 }}
            className={`${styles.sidebar} ${
              heightAuto ? styles.heightAuto : ""
            } ${styles[width]}`}
          >
            <Panel bg={"match"} size={"xl"}>
              <button className={styles.closeButton} onClick={onClose}>
                <Icon size="md" name="cross" />
              </button>

              {children}
            </Panel>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${styles.overlay}`}
            onClick={onClose}
          />
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default SideBar;
