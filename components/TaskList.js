/**
 * Task List component
 * 
 * This component provides a customizable checkbox with label text and a delete button.
 * 
 * @component
 * @param {string} children - The text to be displayed in the checkbox
 * @returns {JSX.Element} - Returns a checkbox with label text and a delete button
 * 
 * @example
 * // Import the TaskList component
 * import TaskList from "./components/TaskList"
 * 
 * // Use the TaskList component
 * <TaskList>Task 1</TaskList>
 */
import DeleteButton from "./DeleteButton";
import CustomCheckbox from "./CustomCheckbox";
import styles from "./TaskList.module.css"

const TaskList = ({ sumary, children }) => {
  return (
    <details className={styles.taskList}>
      <summary className={styles.taskListSummary} >
        <CustomCheckbox className={styles.taskListActionCheck}/>
        <div>{sumary}</div>
        <DeleteButton className={styles.taskListActionRemove}/>
      </summary>
      <div className={styles.taskListContent}>
        {children}
      </div>
    </details>
  )
}

export default TaskList;