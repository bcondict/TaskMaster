import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./index.module.css"
import DisplayOptionsScreen from "../components/DisplayOptionsScreen";
import CustomBackground from "../components/CustomBackground";
import NewTask from "../public/new_task";

export default function Home() {
  const [buttonPressed, setButtonPressed] = useState(false)

  const hanldeButtonClick = () => {
    setButtonPressed(!buttonPressed)
  }
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
    <div className={styles.container}>
      <CustomBackground>
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
        {/* 
        {tasks.map((task, index) => (
          <TaskList
            key={index}
            summary={task.name}
            dateEnd={task.dateEnd}
            dateStart={task.dateStart}
            // priority={task.priority}
            // status={task.status}
          >
            {task.description}
          </TaskList>
        ))}
          */}
      <NewTask/>

      </CustomBackground>

      {/* <AddTaskScreen buttonPressed={buttonPressed}/> */}
      <DisplayOptionsScreen buttonPressed={buttonPressed}/>
      <AddTaskButton buttonPressed={buttonPressed} hanldeButtonClick={hanldeButtonClick}/>
    </div>
  )
}
