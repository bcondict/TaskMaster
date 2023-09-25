import { Box, Container, Heading } from "@chakra-ui/react";
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./index.module.css"

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
        maxH={"95vh"}
        className={styles.customBackground}
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

        <TaskList sumary={"holacomo esta"}>task 1</TaskList>
        <TaskList sumary={"quisiera decirte algo"}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList sumary={"algo que no se"}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList sumary={"puede ser "}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList sumary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList sumary={"algo algo algo algo algoagl "}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList sumary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>

        {/*
        <CustomCheckbox>Task 1 </CustomCheckbox>
        <CustomCheckbox>mucho texto mucho texto mnucho texto </CustomCheckbox>
        <CustomCheckbox>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </CustomCheckbox>
        {tasks.map((task, index) => (
          <CustomCheckbox key={index}>{task.task}</CustomCheckbox>
        ))}
        */}
      </Box>
      <AddTaskButton/>
    </Container>
  )
}
