import { Box, Container, Heading } from "@chakra-ui/react";
import AddTaskButton from "../components/AddTaskButton";
import CustomCheckbox from "../components/CustomCheckbox"
import axios from "axios"
import { useEffect, useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5555/tasks")
      .then((res) => {
        setTasks(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <Container maxW="container" >
      <Box
        borderRadius={"lg"}
        bg={"palidBlue"}
        p={3}
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

        {tasks.map((task, index) => (
          <CustomCheckbox key={index}>{task.task}</CustomCheckbox>
        ))}
      </Box>

      <AddTaskButton/>

    </Container>
  )
}
