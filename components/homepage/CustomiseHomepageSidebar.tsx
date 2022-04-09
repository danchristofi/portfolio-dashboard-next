import * as React from "react";
import SideBar from "../SideBar";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { bps } from "../../utils/bps";
import { UserSectionsList } from "./sidebar/UserSectionsList";
import { AvailableSectionsList } from "./sidebar/AvailableSectionsList";
import styles from "../../styles/CusomiseSidebar.module.scss";
import { ThemePickers } from "./sidebar/ThemePickers";

export const CustomiseHomepageSidebar = () => {
  const { cbp, customiseSidebarOpen, setCustomiseSidebarOpen } =
    useContext(GlobalContext);

  return (
    <SideBar
      open={customiseSidebarOpen}
      onClose={() => setCustomiseSidebarOpen(false)}
    >
      <h1 className="text-xxl">Customise Homepage</h1>
      <p className="text-faded">
        Here are the sections available for you to add to your homepage. Add new
        ones from the <strong>Sections</strong> column and then in the
        <strong> Your Homepage</strong> column, use the handles to reorder them.
      </p>

      <div
        className={`${styles.lists} ${
          cbp < bps.md
            ? "scroll-styling scroll-styling--offset scroll-styling--no-padding fdc"
            : ""
        }`}
      >
        <UserSectionsList />

        <hr className={cbp < bps.md ? styles.hz : ""} />

        <AvailableSectionsList />
      </div>

      <p className="text-faded">
        Here are you can choose a <strong>Colour</strong> and
        <strong> Light / Dark</strong> mode.
      </p>

      <ThemePickers />
    </SideBar>
  );
};
