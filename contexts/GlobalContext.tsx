import React, { createContext, useState, useEffect } from "react";
import { bps, bpSizes } from "../utils/bps";

type Provider = {
  children: React.ReactNode;
};

interface GlobalContextInterface {
  customiseSidebarOpen: boolean;
  setCustomiseSidebarOpen: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;

  cbp: number;
  setCbp: (value: ((prevState: number) => number) | number) => void;

  color: number;
  setColor: (value: ((prevState: number) => number) | number) => void;
  colorOptions: string[];

  isDark: boolean;
  setIsDark: (value: ((prevState: boolean) => boolean) | boolean) => void;
  setTheme: (theme: boolean, initial: boolean) => void;
}

const GlobalContextDefaultValues: GlobalContextInterface = {
  customiseSidebarOpen: false,
  setCustomiseSidebarOpen: () => {},
  cbp: bps.xl,
  setCbp: () => {},
  color: 0,
  setColor: () => {},
  colorOptions: [],
  isDark: true,
  setIsDark: () => {},
  setTheme: () => {},
};

export const GlobalContext = createContext<GlobalContextInterface>(
  GlobalContextDefaultValues
);

export default function ContextProvider({ children }: Provider) {
  const [customiseSidebarOpen, setCustomiseSidebarOpen] =
    useState<boolean>(false);

  // Breakpoints
  const [cbp, setCbp] = useState<number>(bps.xl);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> = setTimeout(() => {});

    const handleResize = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const windowWidth = window.innerWidth;

        if (windowWidth > bpSizes.xl) {
          setCbp(bps.xl);
        } else if (windowWidth > bpSizes.lg) {
          setCbp(bps.lg);
        } else if (windowWidth > bpSizes.md) {
          setCbp(bps.md);
        } else if (windowWidth > bpSizes.sm) {
          setCbp(bps.sm);
        } else {
          setCbp(bps.xs);
        }
      }, 10);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Colours
  const [color, setColor] = useState<number>(0);
  const colorOptions: string[] = [
    "199, 89, 131",
    "89, 191, 199",
    "199, 174, 89",
    "167, 186, 86",
  ];
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent",
      `${colorOptions[color]}`
    );
  }, [color]);

  // Density
  const [lowDensity, setLowDensity] = useState<boolean>(false);
  useEffect(() => {
    const updateDensity = () => {
      setLowDensity(window.devicePixelRatio <= 1 && window.innerWidth > 1350);

      if (lowDensity) {
        document.documentElement.classList.add("low-density");
      } else {
        document.documentElement.classList.remove("low-density");
      }
    };

    updateDensity();

    window.addEventListener("resize", updateDensity);
    return () => {
      window.removeEventListener("resize", updateDensity);
    };
  });

  // Theme
  const [isDark, setIsDark] = useState<boolean>(false);
  const setTheme = (theme, initial) => {
    setIsDark(theme);
    if (!initial) {
      localStorage.setItem("isDark", theme ? "true" : "false");
    }
  };
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const theme = localStorage.getItem("isDark");
    if (theme) {
      setTheme(theme === "true", true);
    }
  }, []);

  const contextValue: GlobalContextInterface = {
    cbp,
    setCbp,
    customiseSidebarOpen,
    setCustomiseSidebarOpen,
    color,
    setColor,
    colorOptions,
    isDark,
    setIsDark,
    setTheme,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
