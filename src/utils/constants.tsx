import { ReactComponent as AlignLeftIcon } from "assets/align-left.svg";
import { ReactComponent as AlignRightIcon } from "assets/align-right.svg";
import { ReactComponent as AlignCenterIcon } from "assets/align-center.svg";
import { ReactComponent as AlignJustifyIcon } from "assets/align-justify.svg";

const mockFormat: React.CSSProperties = {
  fontFamily: "Fira Sans",
  fontWeight: 700,
  fontSize: 14,
  color: "#292929",
  lineHeight: 125,
  letterSpacing: 0.6,
  textAlign: "left",
};

const persistedFormat = localStorage.getItem("format");

export const initialFormat: React.CSSProperties = persistedFormat
  ? JSON.parse(persistedFormat)
  : mockFormat;

export const fonts = ["Fira Sans", "Arial", "Times New Roman", "Montserrat"];

export const weights = [
  {
    label: "Regular",
    weight: 400,
  },
  {
    label: "Medium",
    weight: 500,
  },
  {
    label: "Semibold",
    weight: 600,
  },
  {
    label: "Bold",
    weight: 700,
  },
];

export const aligns: Array<{
  align:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
  icon: React.ReactNode;
}> = [
  {
    align: "left",
    icon: <AlignLeftIcon />,
  },
  {
    align: "center",
    icon: <AlignCenterIcon />,
  },
  {
    align: "right",
    icon: <AlignRightIcon />,
  },
  {
    align: "justify",
    icon: <AlignJustifyIcon />,
  },
];
