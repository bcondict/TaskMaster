import { Box, Container, Heading } from "@chakra-ui/react";
import { CustomCheckbox, MultiCheckbox, SingleCheckbox } from "../components/checkbox";

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
        <SingleCheckbox>Task 1</SingleCheckbox>
        <SingleCheckbox>Task 2</SingleCheckbox>
        <MultiCheckbox>
          big task 1
        </MultiCheckbox>
        <CustomCheckbox>Task 3</CustomCheckbox>
      </Box>

      
    </Container>
  )
}
