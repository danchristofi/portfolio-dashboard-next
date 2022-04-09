import * as React from "react";
import Icon from "../../ui/Icon";
import Panel from "../../ui/Panel";

type Props = {
  title: string;
  children?: React.ReactNode;
};
export const ListError = ({ title, children }: Props) => {
  return (
    <Panel
      bg={"faded"}
      size={"sm"}
      innerClasses={"flex-center text-center h-100"}
      className={"h-100"}
    >
      <span className="mb-3 mt-6 text-body-sm text-faded">{title}</span>
      <span className="text-md">{children}</span>
      <Icon name={"collection"} className={"mb-6"} />
    </Panel>
  );
};
