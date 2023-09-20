import styles from './DeleteButton.module.css'
// import DeleteIcon from '../public/delete_button.svg'

const DeleteIcon = ({ fill }) => (
  <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <g id="xSymbol">
      <g id="line">
        <rect x="0.0561523" y="18.0294" width="25" height="120" rx="12.5" transform="rotate(-45 0.0561523 18.0294)"
        // style={{fill: fill}}
        style={styles.deleteButtonIcon}
        />
      </g>
      <g id="line">
        <rect x="84.9706" y="1.05603" width="25" height="120" rx="12.5" transform="rotate(45 84.9706 1.05603)"
        // style={{fill: fill}}
        style={styles.deleteButtonIcon}
        />
      </g>
    </g>
  </svg>
)

const DeleteButton = () => {
  return (
    <button
      className={styles.deleteButton}
    >
      {/* <DeleteIcon fill="red" className={styles.deleteButtonIcon}/> */}
      <DeleteIcon />
    </button>
  )
}

export default DeleteButton
