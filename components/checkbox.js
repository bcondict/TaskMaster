import React, { useState } from "react"
import { Checkbox, Stack, Grid, Box, Text } from "@chakra-ui/react"
import { CustomCheckbox as CCheckbox} from "./customCheckbox"


export function MultiCheckbox({ children }) {
  const [checkedItems, setCheckedItems] = React.useState([false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  return (
    <Grid templateColumns={"1fr"}>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        size={"lg"}
        mx={10}
        mb={3}
        style={{
          textDecoration: allChecked ? "line-through" : "none",
        }}
      >
        {children}
      </Checkbox>
      <Stack
        mt={1}
        spacing={1}
        ml={16}
        mr={10}
        mb={6}
      >
        <Checkbox
          isChecked={checkedItems[0]} 
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
          size={"lg"}
          style={{
            textDecoration: checkedItems[0] ? "line-through" : "none",
          }}
          mb={5}
        >
          {/* Child Checkbox 1 */}
          un texto muy largo para escribir aqui que sea bastante combicente
          un texto muy largo para escribir aqui que sea bastante combicente
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]} 
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
          size={"lg"}
          style={{
            textDecoration: checkedItems[1] ? "line-through" : "none",
          }}
        >
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </Grid>
  )

}

export function SingleCheckbox({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <Grid templateColums="1fr">
      <Checkbox
        isChecked={isChecked}
        onChange={handleChange}
        size={"lg"}
        mx={10}
        mb={5}
        style={{
          textDecoration: isChecked ? "line-through" : "none",
        }}
      >
        {children}
      </Checkbox>
    </Grid>
  )
}


export function CustomCheckbox({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Box p={4}>
      <CCheckbox
        type="checkbox"
        onChange={handleCheckboxChange}
        isChecked={isChecked}
      />
      <Text ml={2}>Custom Checkbox</Text>
    </Box>
    // <Grid templateColumns="1fr">
    //   <CCheckbox
    //     type="checkbox"
    //     size={"lg"}
    //     mx={10}
    //     mb={5}
    //   >
    //     {children}
    //   </CCheckbox>
    // </Grid>
  )
}

