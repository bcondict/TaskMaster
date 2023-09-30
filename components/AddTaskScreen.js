import styles from "./AddTaskScreen.module.css"

const AddTaskScreen = ({ buttonPressed }) => {
  return (
    // <div>
    //   {buttonPressed ?(
    //     <div
    //       className={`
    //         ${styles.addTaskScreen}
    //         ${buttonPressed ? styles.active : styles.inactive}
    //       `}
    //     >
    //       hola
    //     </div>
    //   ) : null}
    // </div>
    <div
      className={`
        ${styles.addTaskScreen}
        ${buttonPressed ? styles.active : styles.inactive}
      `}
    >
      {/* <input /> */}
    </div>
  )
}

export default AddTaskScreen;
