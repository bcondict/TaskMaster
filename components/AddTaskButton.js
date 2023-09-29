import styles from './AddTaskButton.module.css'
import { useState } from "react"


/**
 * Button to add a new task to the list
 *
 * @returns { JSX.Element } Button to add a task
 */
const AddTaskButton = ({ buttonPressed, hanldeButtonClick}) => {


  return (
    <div className={`${styles.buttonContainer} ${buttonPressed ? styles.rotated : ''}`}>
      <button
        className={`${styles.customButton} ${buttonPressed ? styles.rotated : ''}`}
        onClick={hanldeButtonClick}
      />
    </div>
  )
}
export default AddTaskButton
