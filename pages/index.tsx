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
        <h1 data-align="Center">Today's task</h1>
        {/*
        <TaskList summary={"Doing homework"} dateEnd={"10/10/2023"} dateStart={undefined}>task 1</TaskList>
        <TaskList summary={"My shopping list"} dateEnd={undefined} dateStart={undefined}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"Something I don't know"} dateEnd={undefined} dateStart={undefined}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList summary={"puede ser "} dateEnd={undefined} dateStart={undefined}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"some some some some some some some some some some some some some some"} dateEnd={undefined} dateStart={undefined}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl "} dateEnd={undefined} dateStart={undefined}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "} dateEnd={undefined} dateStart={undefined}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl "} dateEnd={undefined} dateStart={undefined}>mucho texto mucho texto mnucho texto </TaskList>
        <TaskList summary={"algo algo algo algo algoagl algo algo algo algo algoagl algo algo algo algo algoagl "} dateEnd={undefined} dateStart={undefined}>mmucho texto mucho texto mucho texto ucho texto mucho texto mucho texto </TaskList>
      */}
        {tasks.map(task => (
        <TaskList
        key={task._id}
        summary={task.name}
        dateEnd={task.dateEnd}
        dateStart={task.dateStart}
        // priority={task.priority}
        // status={task.status}
        >
        {task.description}
        </TaskList>
        ))}

      </CustomBackground>

      {/* <AddTaskScreen buttonPressed={buttonPressed}/> */}
      <DisplayOptionsScreen buttonPressed={buttonPressed}/>
      <AddTaskButton buttonPressed={buttonPressed} hanldeButtonClick={hanldeButtonClick}/>
    </div>
  )
}
