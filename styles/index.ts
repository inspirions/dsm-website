import { createTheme } from "@mantine/core";

export const myTheme = createTheme({
  primaryColor: "dsm-primary",
  defaultRadius: "md",
  focusRing: "auto",
  fontFamily: "Urbanist, sans-serif",
  headings: { fontFamily: "Urbanist, sans-serif" },
  components: {
    ActionIcon: {
      defaultProps: {
        variant: "subtle",
      },
    },
    Loader: {
      defaultProps: {
        type: "bars",
      },
    },
  },
  colors: {
    "dsm-primary": [
      "#ebecff",
      "#d2d5fe",
      "#a2a7f9",
      "#6f77f4",
      "#454ef0",
      "#2b34ee",
      "#023047",
      "#0f1bd4",
      "#0617be",
      "#0012a8",
    ],
  },
});
// #dadef9 bg
// #010210 text
