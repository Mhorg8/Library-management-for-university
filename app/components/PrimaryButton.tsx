import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  text: string;
  type: "button" | "submit";
  bgColor?: string;
  textColor?: string;
  click?: () => void;
  Icon?: IconType;
  iconColor?: string;
  iconSize?: number;
  link?: boolean;
  path?: string;
  customStyle?: string;
};

const PrimaryButton = ({
  customStyle,
  text,
  type,
  bgColor,
  textColor,
  click,
  Icon,
  iconColor,
  iconSize,
  path,
  link,
}: Props) => {
  if (link) {
    return (
      <Link
        href={path ? path : "/"}
        onClick={click}
        type={type}
        style={{
          backgroundColor: bgColor ? bgColor : "",
        }}
        className={`primary-btn ${customStyle}`}
      >
        <span
          className="font-semibold"
          style={{ color: textColor ? textColor : "" }}
        >
          {text}
        </span>
        {Icon && <Icon size={iconSize} color={iconColor} />}
      </Link>
    );
  }

  return (
    <button
      onClick={click}
      type={type}
      style={{
        backgroundColor: bgColor ? bgColor : "",
      }}
      className={`primary-btn ${customStyle}`}
    >
      <span
        className="font-semibold"
        style={{ color: textColor ? textColor : "" }}
      >
        {text}
      </span>
      {Icon && <Icon size={iconSize} color={iconColor} />}
    </button>
  );
};

export default PrimaryButton;
