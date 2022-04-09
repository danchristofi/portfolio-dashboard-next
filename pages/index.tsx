import Head from "next/head";
import CTA from "../components/CTA";
import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { HomepageContext } from "../contexts/HomepageContext";
import Container from "../components/Container";
import { bps } from "../utils/bps";
import Icon from "../components/ui/Icon";
import Button from "../components/ui/Button";
import { Featured } from "../components/Featured";
import { CustomiseHomepageSidebar } from "../components/homepage/CustomiseHomepageSidebar";
import { MyContent } from "../components/homepage/sections/MyContent";
import { CollectionsCBM } from "../components/homepage/sections/CollectionsCBM";
import { CollectionsSWM } from "../components/homepage/sections/CollectionsSWM";
import { MyActivity } from "../components/homepage/sections/MyActivity";
import { AssignedToMe } from "../components/homepage/sections/AssignedToMe";
import { Colleagues } from "../components/homepage/sections/Colleagues";

export default function Home() {
  const { cbp, setCustomiseSidebarOpen } = useContext(GlobalContext);

  const { userSections } = useContext(HomepageContext);

  const components = {
    MyContent: MyContent,
    CollectionsCBM: CollectionsCBM,
    CollectionsSWM: CollectionsSWM,
    MyActivity: MyActivity,
    AssignedToMe: AssignedToMe,
    Colleagues: Colleagues,
  };

  return (
    <main>
      <Head>
        <title>Dashboard | Dan Christofi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />

      <Container>
        <CTA
          mode={cbp > bps.md ? "md" : "sm"}
          buttonText="Start Customising"
          onAction={() => setCustomiseSidebarOpen(true)}
          headerContent={
            <>
              Customise your Homepage
              <Icon
                size={"md"}
                name={"edit"}
                className="ml-3"
                style={{ opacity: 0.3 }}
              />
            </>
          }
          bodyContent={
            <p className="text-faded">
              Welcome! It looks like this is your first time here. Your homepage
              is completely customisable. You can choose a colour, light or dark
              mode, and even add/reorder the sections of this page.
            </p>
          }
        />
      </Container>

      {userSections.map((section, index) => {
        const SpecificSection = components[section];
        return (
          <Container alt={!!(index % 2)} key={section}>
            <SpecificSection />
          </Container>
        );
      })}

      {!userSections.length && (
        <Container>
          <div className="flex fdc jcc aic mb-10" style={{ height: "50vh" }}>
            <h2 className="text-xxl">Your Homepage is empty</h2>
            <p className="text-faded">
              Add some sections to your homepage using the button below
            </p>
            <Button
              text="Add Section"
              icon={"plus"}
              theme={"contrastSolid"}
              size={"lg"}
              onClick={() => setCustomiseSidebarOpen(true)}
            />
          </div>
        </Container>
      )}

      <CustomiseHomepageSidebar />
    </main>
  );
}
