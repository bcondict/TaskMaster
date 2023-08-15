import { Box, Container, Heading } from "@chakra-ui/react";
import AddTaskButton from "../components/AddTaskButton";
import CustomCheckbox from "../components/CustomCheckbox"

export default function Home() {
  return (
    <Container maxW="container" >
      <Box
        borderRadius={"lg"}
        bg={"palidBlue"}
        p={3}

      >
        <Heading
          align={"center"}
          as="h1"
          fontWeight="normal"
          fontSize={"40px"}
          pb={6}
        >
          Today's Task
        </Heading>
        <CustomCheckbox>Task 1</CustomCheckbox>
        <CustomCheckbox>mucho texto mucho texto mnucho texto </CustomCheckbox>
        <CustomCheckbox>mmucho texto mucho texto mnucho texto ucho texto mucho texto mnucho texto </CustomCheckbox>
      </Box>

      <AddTaskButton/>

    </Container>
  )
}
