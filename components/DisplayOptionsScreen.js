import styles from "./DisplayOptionsScreen.module.css";
// import NewTask from "../public/new_task";

const DisplayOptionsScreen = ({ buttonPressed }) => {
  return (
    <div className={`
      ${styles.displayScreen}
      ${buttonPressed ? styles.active : styles.inactive}
    `}>
      <div className={`${styles.button}`} >
        <p>new task</p>
        <button className={`${styles.task}`}></button>
        {/* <NewTask className={`${styles.task}`}/> */}
      </div>
      <div className={`${styles.button}`}>
        <p>Routine</p>
        <button className={`${styles.routine}`}></button>
      </div>
      <div className={`${styles.button}`}>
        <p>New project</p>
        <button className={` ${styles.project}`}></button>
      </div>
    </div>
  )
}

export default DisplayOptionsScreen;
