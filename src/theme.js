import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Inika",
  body: "Inika",
}

const fontWeights = {
    normal: 400,
    bold: 700,
}

const colors = {
  palidBlue: "#96B6C5",
  lightPalidBlue: "#ADC4CE",
  newBeige: "#EEE0C9",
  lightBeige: "#F1F0E8"
}

const theme = extendTheme({
  fonts,
  fontWeights,
  colors
});

export default theme;
