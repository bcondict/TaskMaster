import React from "react";
import { chakra } from "@chakra-ui/react";

const CustomCheckbox = chakra("input", {
  baseStyle: {
    display: "inline-block",
    appearance: "none",
    width: "16px",
    height: "16px",
    borderRadius: "md",
    borderWidth: "1px",
    borderColor: "gray.300",
    backgroundColor: "white",
    _checked: {
      borderColor: "green.500",
      backgroundColor: "green.500",
    },
  },
});

export default CustomCheckbox;
