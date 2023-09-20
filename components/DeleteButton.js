import styles from './DeleteButton.module.css'
// import DeleteIcon from '../public/delete_button.svg'
import DeleteIcon from '../public/delete_button_icon'


const DeleteButton = () => {
  return (
    <button
      className={styles.deleteButton}
    >
      <DeleteIcon classGroup={styles.iconGroup} classChild={styles.iconChild }/>
    </button>
  )
}

export default DeleteButton
