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
import styles from "./TaskList.module.css"
import CustomCheckbox from "./CustomCheckbox";
import { useEffect, useRef } from "react";


const TaskList = ({ summary, children }) => {
  // use a ref to store the animation handler
  const containerAnimation = useRef(null);
  const closeContainer = useRef(null);
  const animationHandler = useRef(null);
  const closeAnimationHandler = useRef(null);

  // when the component mounts, create the animation
  useEffect(() => {
    const animationSettings = {
        fill: "forwards",
        duration: 200,
        delay: 33
      };

      // if containerAnimation.current is not null, create the animation
      if (containerAnimation.current) {
      closeContainer.current = containerAnimation.current.cloneNode(true)
      
      // create the animation and store the handler in animationHandler.current
      animationHandler.current = containerAnimation.current.animate(
        // keyframes
        [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }],
        animationSettings
      );

      // when the animation finishes, hide the container
      closeAnimationHandler.current = closeContainer.current.animate(
        // keyframes
        [{ transform: "translateY(0)", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }, { transform: "translateY(-100%)", clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }],
        // [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }],
        animationSettings
      )
    }
  }, [containerAnimation.current])

  return (
    <details
      className={styles.taskList}
      onToggle={(e) => {
        // prevent the default toggle behavior
        e.preventDefault();
        // if the animationHandler.current is not null and the animation is finished, play the animation
        if (animationHandler.current && animationHandler.current.playState === "finished") {
          const open = e.target.open;
          // if the details is open, play the animation in reverse
          if (open)
          {
            animationHandler.current.reverse();
            animationHandler.current.playbackRate = -1;
          }
          // if the details is closed, play the animation
          else
          {
            animationHandler.current.play();
            animationHandler.current.playbackRate = 1;
            const {top, left, height, width} = containerAnimation.current.getBoundingClientRect();
            closeContainer.current.style.position = "absolute";
            closeContainer.current.style.top = `${top + height}px` ;
            closeContainer.current.style.left = `${left}px`;
            closeContainer.current.style.height = `${height}px`;
            closeContainer.current.style.width = `${width}px`;
            // closeContainer.current.style.padding = "0px";
            closeContainer.current.style.zIndex = -0;
            closeContainer.current.style.boxSizing = "border-box";
            closeContainer.current.style.fontFamily = "inherit";


            document.body.appendChild(closeContainer.current)
            closeAnimationHandler.current.play();
            closeAnimationHandler.current.playbackRate = 1;
            closeAnimationHandler.current.onfinish = () => {
              document.body.removeChild(closeContainer.current)
            }
          }
        }
      }}
    >
      <summary className={styles.taskListSummary} >
        <CustomCheckbox className={styles.taskListActionCheck}/>
        <div>{summary}</div>
      </summary>
      <div style={{overflow: "hidden"}}>
        <div className={styles.taskListContent} ref={containerAnimation}>
          {children}
        </div>
      </div>
    </details>
  )
}

export default TaskList;
