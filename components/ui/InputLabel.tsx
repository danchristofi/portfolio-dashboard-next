import * as React from "react";

type Props = {
  text: string;
  className?: string;
};
export const InputLabel = ({ text, className }: Props) => {
  return <label className={`text-md ${className}`}>{text}</label>;
};
