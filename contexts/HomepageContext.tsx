import React, { createContext, useState } from "react";

type SectionType = {
  id: string;
  title: string;
  subtitle?: string;
};

export type TileType = {
  id: string | number;
  text: string;
  type?: "link" | "video" | "file";
  image?: string;
  isCollection?: boolean;
};

type Provider = {
  children: React.ReactNode;
};

interface HomepageContextInterface {
  featuredTiles: TileType[];
  setFeaturedTiles: (value: ((prevState: []) => []) | []) => void;
  userSections: string[];
  findSectionById: (id: string) => SectionType;
  availableSections: SectionType[];
  addUserSection: (id: string) => void;
  removeUserSection: (id: string) => void;
  setUserSections: (
    value: ((prevState: string[]) => string[]) | string[]
  ) => void;
}

const HomepageContextDefaultValues: HomepageContextInterface = {
  featuredTiles: [],
  setFeaturedTiles: () => {},
  userSections: [],
  findSectionById: () => {
    return { id: "none", title: "none" };
  },
  availableSections: [],
  addUserSection: () => {},
  removeUserSection: () => {},
  setUserSections: () => {},
};

export const HomepageContext = createContext<HomepageContextInterface>(
  HomepageContextDefaultValues
);

export default function ContextProvider({ children }: Provider) {
  // Featured
  const [featuredTiles, setFeaturedTiles] = useState<TileType[]>([
    {
      id: 1,
      text: "Booking PTO",
      type: "file",
      image: "/images/1.jpg",
    },
    {
      id: 2,
      type: "link",
      text: "IT Support",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      text: "Troubleshooting",
      image: "/images/3.jpg",
      isCollection: true,
    },
  ]);

  // Sections
  const allSections: SectionType[] = [
    {
      id: "AssignedToMe",
      title: "Assigned to me",
    },
    {
      id: "MyActivity",
      title: "Activity",
    },
    {
      id: "MyContent",
      title: "My Content",
    },
    {
      id: "Colleagues",
      title: "Colleagues",
    },
    {
      id: "CollectionsCBM",
      title: "Collections",
      subtitle: "Created by me",
    },
    {
      id: "CollectionsSWM",
      title: "Collections",
      subtitle: "Shared with me",
    },
  ];
  const [userSections, setUserSections] = useState<string[]>([
    "Colleagues",
    "AssignedToMe",
    "MyActivity",
    "CollectionsCBM",
    "MyContent",
  ]);
  const availableSections: SectionType[] = allSections.filter(
    (section) => !userSections.includes(section.id)
  );
  const findSectionById = (id: string) => {
    const x = allSections.find((section) => section.id === id);
    return (
      x || {
        id: "none",
        title: "none",
      }
    );
  };
  const addUserSection = (id: string) => {
    setUserSections([id, ...userSections]);
  };
  const removeUserSection = (id: string) => {
    const x = userSections.filter((section) => section !== id);
    setUserSections(x);
  };

  const contextValue: HomepageContextInterface = {
    featuredTiles,
    setFeaturedTiles,
    availableSections,
    userSections,
    findSectionById,
    addUserSection,
    removeUserSection,
    setUserSections,
  };

  return (
    <HomepageContext.Provider value={contextValue}>
      {children}
    </HomepageContext.Provider>
  );
}
