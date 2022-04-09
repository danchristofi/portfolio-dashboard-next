import React, { useEffect, useState } from "react";
// @ts-ignore
import { createPortal } from "react-dom";

type Props = {
  children?: React.ReactNode;
};

const Portal = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector("#modal"))
    : null;
};

export default Portal;
