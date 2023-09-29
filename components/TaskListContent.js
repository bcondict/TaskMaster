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

const TaskListContent = ({ children, customRef, className, isList, dateStart, dateEnd}) => {
  let newDateStart = dateStart
  let newDateEnd = new Date(dateEnd)

  if (newDateStart !== undefined) {
    newDateStart = new Date(dateStart)
    newDateStart = newDateStart.getDate() + "-" + (newDateStart.getMonth() + 1)
  }

  newDateEnd = newDateEnd.getDate() + "-" + (newDateEnd.getMonth() + 1)
  return (
    <div className={`${className} ${styles.taskListContent}`} ref={customRef}>
      <div className={styles.date}>
        {/* <ContentDate date={"01-01"} text="Start" />
        <ContentDate date="01-01" text="End" /> */}
        {newDateStart !== undefined ? 
          <ContentDate date={newDateStart} text="Start" /> :
          <></>
        }
        <ContentDate date={newDateEnd} text="End" />
      </div>
      <div className={`${styles.contentText} ${isList ? styles.contentTextList : ''}`}>
        {children}
      </div>
      <div className={styles.actionButton}>
        <div className={styles.actionButtonEdit}>
          Edit
        </div>
        <div className={styles.actionButtonRemove}>
          Remove
        </div>
      </div>
    </div>
  )
}

export default TaskListContent;
