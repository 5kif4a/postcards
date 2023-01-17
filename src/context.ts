import { createContext } from "react";

export const FormatContext = createContext<{
  format: React.CSSProperties;
  setFormat: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
} | null>(null);
