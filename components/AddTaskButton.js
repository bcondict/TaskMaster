import styles from './AddTaskButton.module.css'
import { useState } from "react"


/**
 * Button to add a new task to the list
 *
 * @returns { JSX.Element } Button to add a task
 */
const AddTaskButton = () => {
  const [buttonPressed, setButtonPressed] = useState(false)

  const hanldeButtonClick = () => {
    setButtonPressed(!buttonPressed)
  }

  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.customButton} ${buttonPressed ? styles.rotated : ''}`}
        onClick={hanldeButtonClick}
      />
    </div>
  )
}
export default AddTaskButton

