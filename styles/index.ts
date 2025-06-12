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
      "#f5effe",
      "#e4dcf2",
      "#c7b7e2",
      "#a78fd2",
      "#8d6dc4",
      "#7d58bc",
      "#744db9",
      "#633ea3",
      "#5d3a9b",
      "#4c2e82",
    ],
    //need to update dark primary in future
    "dsm-dark-primary": [
      "#f5effe",
      "#e4dcf2",
      "#c7b7e2",
      "#a78fd2",
      "#8d6dc4",
      "#7d58bc",
      "#744db9",
      "#633ea3",
      "#5d3a9b",
      "#4c2e82",
    ],
    "dsm-orange": [
      "#fff3e1",
      "#ffe6cd",
      "#fbcc9f",
      "#f7b16c",
      "#f49941",
      "#f28c28",
      "#f28315",
      "#d77006",
      "#c06300",
      "#a75400",
    ],
    "dsm-green": [
      "#e6ffee",
      "#d3f9e0",
      "#a8f2c0",
      "#7aea9f",
      "#54e382",
      "#3bdf70",
      "#2bdd66",
      "#1bc455",
      "#0bae4a",
      "#00973c",
    ],
  },
});
// #dadef9 bg
// #010210 text
