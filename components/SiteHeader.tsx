import { useContext, useEffect, useState, ReactDOM } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { bps } from "../utils/bps";
import Icon from "./ui/Icon";
import SideBar from "./SideBar";
import Panel from "./ui/Panel";
import Button from "./ui/Button";
import PieChart from "./ui/PieChart";
import styles from "../styles/SiteHeader.module.scss";

export default function SiteHeader() {
  const { cbp, setCustomiseSidebarOpen } = useContext(GlobalContext);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(cbp < bps.md);
  }, [cbp]);

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links: { icon: string; text: string }[] = [
    {
      icon: "home",
      text: "Home",
    },
    {
      icon: "checkbox",
      text: "Assigned to Me",
    },
    {
      icon: "collection",
      text: "Collections",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <Icon name={"collection"} className={"text-faded"} />
        <div className="logo flex aic">
          <span className="text-lg mb-0 ml-4">
            <span className="font-normal">Dash</span>
            <b>Board</b>
          </span>
        </div>

        {!isMobile && (
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              {links.map((link) => (
                <li
                  key={link.text}
                  className={
                    link.text === "Home" ? styles.active : styles.inactive
                  }
                >
                  <a href="#">{link.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <button
          onClick={() => setCustomiseSidebarOpen(true)}
          className="ml-a p-7"
        >
          <Icon size={"md"} name={"settings"} />
        </button>

        <button
          onClick={() => setProfileMenuOpen(true)}
          className={styles.user}
        >
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </button>

        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`${styles.mobileToggle} p-7`}
          >
            <span />
            <span />
            <span />
          </button>
        )}
      </header>

      <SideBar
        open={profileMenuOpen}
        onClose={() => setProfileMenuOpen(false)}
        heightAuto
        width={"md"}
      >
        <div className="text-center flex fdc h-100">
          <div className={`${styles.profileImage} mx-a`}>
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          <h5 className="text-xl mb-0 mt-5">John Smith</h5>
          <sub className="text-body text-faded">Developer</sub>

          <Panel bg={"faded"} className={"my-10"}>
            <div className="p-3 flex fdc aic jcc">
              <h6 className="text-body mb-6">Profile Completion</h6>
              <PieChart percentage={60} />

              <Button
                className={"mt-8 mx-a"}
                size={"md"}
                theme={"accentMatch"}
                text="View Profile"
              />
            </div>
          </Panel>

          <Button
            className={"mx-a"}
            size={"md"}
            icon={"chevron-left"}
            iconSize={"xs"}
            theme={"ghost"}
            text={"Log Out"}
          />
        </div>
      </SideBar>

      {isMobile && (
        <SideBar
          open={mobileMenuOpen}
          heightAuto
          onClose={() => setMobileMenuOpen(false)}
        >
          <ul>
            {links.map((link) => {
              return (
                <li key={link.text}>
                  <a
                    href=""
                    className={`text-lg pt-6 pb-6 pr-10 flex aic mb-0 ${
                      link.text === "Home" ? styles.active : styles.inactive
                    }`}
                  >
                    <Icon name={link.icon} className={"mr-5 text-faded"} />
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </SideBar>
      )}
    </>
  );
}
