import { Box, Center, Container, Heading } from "@chakra-ui/react";
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./index.module.css"
import "@fontsource/ubuntu"

export default function Home() {
  // const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5555/tasks")
  //     .then((res) => {
  //       setTasks(res.data.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, []);

  return (
    // <Container>
    //   <Box
    //     borderRadius={"lg"}
    //     bg={"palidBlue"}
    //     p={3}
    //     maxH={"1000rem"}
    //     className={styles.customBackground}
    //   >
    //     <Heading
    //       align={"center"}
    //       as="h1"
    //       fontWeight="normal"
    //       fontSize={"40px"}
    //       pb={6}
    //     >
    //       Today's Task
    //     </Heading>

    //     <TaskList sumary={"holacomo esta"}>task 1</TaskList>
    //     <TaskList sumary={"quisiera decirte algo"}>mucho texto mucho texto mnucho texto </TaskList>
    //     <TaskList sumary={"algo que no se"}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
    //     <TaskList sumary={"puede ser "}>mucho texto mucho texto mnucho texto </TaskList>
    //     <TaskList sumary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
    //     <TaskList sumary={"algo algo algo algo algoagl "}>mucho texto mucho texto mnucho texto </TaskList>
    //     <TaskList sumary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>

    //     {/*
    //     <CustomCheckbox>Task 1 </CustomCheckbox>
    //     <CustomCheckbox>mucho texto mucho texto mnucho texto </CustomCheckbox>
    //     <CustomCheckbox>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </CustomCheckbox>
    //     {tasks.map((task, index) => (
    //       <CustomCheckbox key={index}>{task.task}</CustomCheckbox>
    //     ))}
    //     */}
    //   </Box>
    //   <AddTaskButton/>
    // </Container>
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent:"center",
        backgroundColor: "#F1F0E8"
      }}
    >
      <div
        className={styles.customBackground}
        align="center"
      >
        <h1 align="Center">Today's task</h1>

        <TaskList summary={"Doing homework"}>task 1</TaskList>
        <TaskList summary={"My shopping list"}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"Something I don't know"}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList summary={"puede ser "}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"some some some some some some some some some some some some some some"}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl "}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl "}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        {/* <NewTaskList summary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </NewTaskList> */}

      </div>
      <AddTaskButton/>
    </div>
  )
}
