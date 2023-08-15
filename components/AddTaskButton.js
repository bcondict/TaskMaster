import { IconButton } from "@chakra-ui/react"
import { AddTaskIcon } from "./Icons"
import { AddButton } from "./ButtonStyle"
import styles from './AddTaskButton.module.css'


/**
 * Button to add a new task to the list
 * @param { function } onClic - Function to execute when the button is clicked
 * @returns { JSX.Element } Button to add a task
 */
const AddTaskButton = ({ onClic }) => {
  return (
    <button className={styles.customButton}/>
  )
}
export default AddTaskButton

