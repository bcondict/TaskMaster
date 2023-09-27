import styles from "./TaskListContent.module.css";

const ContentDate = ({ date, text }) => {
  return (
    <div className={styles.something}>
      <div className={styles.dateInformation}>
        {text}
      </div>
      <div className={styles.dateNumer}>
        {date}
      </div>
    </div>
  )
}

const TaskListContent = ({ children, customRef, className}) => {
  return (
    <div className={`${className} + ${styles.taskListContent}`} ref={customRef}>
      <div className={styles.date}>
        <ContentDate date="01-01" text="Start" />
        <ContentDate date="01-01" text="End" />
      </div>
      <div className={styles.contentText}>
        {children}
      </div>
      <div className={styles.removeButton}>
        Remove
      </div>
    </div>
  )
}

export default TaskListContent;
