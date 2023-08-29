import { Box, Container, Heading } from "@chakra-ui/react";
import AddTaskButton from "../components/AddTaskButton";
import CustomCheckbox from "../components/CustomCheckbox"

export default function Home() {
  return (
    <Container maxW="container" >
      <Box
        borderRadius={"lg"}
        bg={"palidBlue"}
        // bg={"#538499"}
        // bg={"#6EB0CC"}
        p={3}
        // h={100}
        minH={"90vh"}
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
        <CustomCheckbox>Task 1 </CustomCheckbox>
        <CustomCheckbox>mucho texto mucho texto mnucho texto </CustomCheckbox>
        <CustomCheckbox>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </CustomCheckbox>
      </Box>

      <AddTaskButton/>

    </Container>
  )
}
