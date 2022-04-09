import {
  shareIcon,
  collectionIcon,
  starIcon,
  messageIcon,
  chevronDownIcon,
  crossIcon,
  plusIcon,
  minusIcon,
  userIcon,
  activityIcon,
  usersIcon,
  linkIcon,
  checkboxIcon,
  fileIcon,
  clockIcon,
  editIcon,
  videoIcon,
  homeIcon,
  settingsIcon,
  chevronLeftIcon,
} from "../../utils/icons";

type Props = {
  name: boolean | string;
  size?: "xs" | "sm" | "md" | "lg";
  width?: "" | "thick";
  style?: Object;
  className?: string;
};

export default function Icon({
  name,
  size = "lg",
  width = "",
  style,
  className = "",
}: Props) {
  const inner = () => {
    switch (name) {
      case "share":
        return shareIcon;
      case "collection":
        return collectionIcon;
      case "star":
        return starIcon;
      case "message":
        return messageIcon;
      case "chevron-down":
        return chevronDownIcon;
      case "cross":
        return crossIcon;
      case "plus":
        return plusIcon;
      case "minus":
        return minusIcon;
      case "user":
        return userIcon;
      case "activity":
        return activityIcon;
      case "users":
        return usersIcon;
      case "link":
        return linkIcon;
      case "checkbox":
        return checkboxIcon;
      case "file":
        return fileIcon;
      case "clock":
        return clockIcon;
      case "edit":
        return editIcon;
      case "video":
        return videoIcon;
      case "home":
        return homeIcon;
      case "settings":
        return settingsIcon;
      case "chevron-left":
        return chevronLeftIcon;
      default:
        return collectionIcon;
    }
  };

  return (
    <svg
      className={`svgIcon ${size} ${width} ${className}`}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      dangerouslySetInnerHTML={{ __html: inner() }}
    />
  );
}
