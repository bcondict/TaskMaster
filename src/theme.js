import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: "#F1F0E8",
    }
  }
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const fonts = {
  heading: "Inika",
  // body: "Inika",
  // body: "Mooli",
  // body: "Croissant One",
  // body: "Ubuntu",
}

const fontWeights = {
  normal: 400,
  bold: 700,
}

const colors = {
  palidBlue: "#96B6C5",
  lightPalidBlue: "#ADC4CE",
  newBeige: "#EEE0C9",
  lightBeige: "#F1F0E8",
  darkBeige: "#DAC0A3",
  navyBlue: "#102C57"
}

const theme = extendTheme({
  config,
  styles,
  fonts,
  fontWeights,
  colors
});

export default theme;
