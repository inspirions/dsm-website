import { createTheme } from "@mantine/core";

export const myTheme = createTheme({
  primaryColor: "dsm-primary",
  defaultRadius: "md",
  focusRing: "auto",
  fontFamily: "Urbanist, sans-serif",
  headings: { fontFamily: "Urbanist, sans-serif" },
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
    xxl: "120em",
  },
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

    //might need in future for dark mode
    // TextInput: {
    //   defaultProps: {
    //     styles: {
    //       input: {
    //         color: "#fff",
    //         backgroundColor: "#333",
    //       },
    //     },
    //   },
    // },
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
      "#2a2437",
      "#262032",
      "#221d2c",
      "rgba(9, 6, 15, 0.9)",
      "#1d1927",
      "#191621",
      "#15121c",
      "#110e16",
      "#0d0b10",
      "#08070b",
      "#040405",
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
    "dsm-light": [
      "#f5effe",
      "#f6f1fe",
      "#f7f2fe",
      "#f8f4fe",
      "#f9f5fe",
      "#faf7ff",
      "#fbf9ff",
      "#fcfaff",
      "#fdfcff",
      "#fefdff",
      "#ffffff",
    ],
  },
});
// #dadef9 bg
// #010210 text
