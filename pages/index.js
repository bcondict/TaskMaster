import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import axios from "axios"
import { useEffect, useState } from "react";
import styles from "./index.module.css"
import "@fontsource/ubuntu"
import TaskListContent from "../components/TaskListContent";
import AddTaskScreen from "../components/AddTaskScreen";

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

        {tasks.map((task, index) => (
          <TaskList
            key={index}
            // summary={tasks.summary}
            summary={task.name}
            dateEnd={task.dateEnd}
            dateStart={task.dateStart}
            // priority={task.priority}
            // status={task.status}
          >
            {task.description}
            {/* {task.task} */}
          </TaskList>
        ))};

      </div>
      {/* <div style={{
        width: "100vh",
        height: "100vh",
        backgroundColor: "red",
      }}></div> */}

      <AddTaskScreen buttonPressed={buttonPressed}/>
      <AddTaskButton buttonPressed={buttonPressed} hanldeButtonClick={hanldeButtonClick}/>
      {/* {console.log(buttonPressed)} */}
    </div>
  )
}
