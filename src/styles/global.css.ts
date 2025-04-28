import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#f0f0f0",
    text: "#333333",
  },
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  fontFamily: "system-ui, sans-serif",
  backgroundColor: vars.color.background,
  color: vars.color.text,
});
