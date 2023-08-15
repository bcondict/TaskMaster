import { Checkbox, Grid } from "@chakra-ui/react"

export default function MultiCheckbox({ children }) {
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
        mx={8}
        p={2}
        mb={3}
        bg={"lightPalidBlue"}
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
          Child Checkbox 1 
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
