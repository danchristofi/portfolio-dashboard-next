import * as React from "react";
import { SectionBase } from "./SectionBase";
import { SectionTitle } from "../../SectionTitle";
import { useContext, useEffect, useState } from "react";
import { HomepageContext } from "../../../contexts/HomepageContext";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { bps } from "../../../utils/bps";
import { Activity } from "../../Activity";
import Panel from "../../ui/Panel";
import PieChart from "../../ui/PieChart";
import Button from "../../ui/Button";
import { BarChart } from "../../ui/BarChart";
import { collectionIcon, svgBase } from "../../../utils/icons";
import { faker } from "@faker-js/faker";

export const MyActivity = () => {
  const { findSectionById } = useContext(HomepageContext);
  const { cbp } = useContext(GlobalContext);

  const [activities, setActivities] = useState([]);

  const generate = () => {
    if (Math.random() < 0.33) {
      return {
        text: `<b>${faker.name.firstName()} ${faker.name.lastName()}</b> shared a <b>
                ${svgBase(
                  collectionIcon,
                  "sm vam thick mb-1"
                )} Collection</b> with you.`,
        hasCollection: true,
      };
    } else if (Math.random() < 0.33) {
      return {
        text: `<b>${faker.name.firstName()} ${faker.name.lastName()}</b> has added some new content to a <b>
                ${svgBase(
                  collectionIcon,
                  "sm vam thick mb-1"
                )} Collection</b> that's shared with you.`,
        hasCollection: true,
      };
    }

    return {
      text: `<b>${faker.name.firstName()} ${faker.name.lastName()}</b> assigned some <b>Content</b> to you.`,
      hasContent: true,
    };
  };

  useEffect(() => {
    const x = [];
    for (let i = 0; i < 10; i++) {
      x[i] = generate();
    }

    setActivities(x);
  }, []);

  const titleContent = (
    <SectionTitle
      title={findSectionById("MyActivity").title}
      subtitle={findSectionById("MyActivity").subtitle}
      icon={"activity"}
      hasBorder
    />
  );

  const mainContent = () => (
    <div className={`flex gap-lg ${cbp < bps.lg ? "fdc" : ""}`}>
      <div
        style={{ height: "38rem" }}
        className={`scroll-styling ${cbp < bps.lg ? "w-100" : "w-2/3"}`}
      >
        {activities.map((activity, index) => {
          return (
            <Activity
              key={index}
              hasCollection={activity.hasCollection}
              hasContent={activity.hasContent}
              isNew={index < 2}
              time={index + 1}
              text={activity.text}
            />
          );
        })}
      </div>

      <Panel
        bg={"match"}
        style={{ boxShadow: "0 3rem 3rem -1.5rem rgba(0, 0, 0, 0.1)" }}
        innerClasses={"flex jcc"}
        className={cbp < bps.lg ? "w-100 mt-10" : "w-1/3"}
      >
        <div className="p-3 flex fdc aic jcc h-50">
          <h6 className="text-body mb-6">Profile Completion</h6>
          <PieChart percentage={60} />
          <Button size={"md"} className={"mt-6"} text={"View Profile"} />
        </div>

        <hr className="hr mt-8 mb-8" />

        <div className="p-3 flex fdc aic jcc h-50">
          <h6 className="text-body mb-8">Goals Reached</h6>
          <BarChart />
          <Button size={"md"} className="mt-6" text="View Goals" />
        </div>
      </Panel>
    </div>
  );

  return (
    <SectionBase
      titleContent={titleContent}
      mainContent={mainContent}
      gridType={"none"}
    />
  );
};
