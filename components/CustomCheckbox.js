/**
 * CustomCheckbox component
 * 
 * This component provides a customizable checkbox with label text and a delete button.
 *
 * @component
 * @param {string} children - The text to be displayed in the checkbox
 * @returns {JSX.Element} - Returns a checkbox with label text and a delete button
 * 
 * @example
 * // Import the CustomCheckbox component
 * import CustomCheckbox from "./components/CustomCheckbox"
 * 
 * // Use the CustomCheckbox component
 * <CustomCheckbox>Example</CustomCheckbox>
 */
import { useState } from "react";
import styles from "./CustomCheckbox.module.css"
import DeleteButton from "./DeleteButton";

const CustomCheckbox = ({ children }) => {

  /**
   * State to manage the checkbox's checked status
   * @type {boolean}
   */
  const [isChecked, setIsChecked] = useState(false)

  /**
   * Function to handle the checkbox's onChange event
   */
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <div className={styles.customContainer}>
        <label className={styles.customCheckbox} checked check>
          <input
            type="checkbox"
            className={styles.checkboxInput}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className={styles.checkboxCheckmark}></span>
        </label>
        <div
          className={styles.checkboxText}
        >
          {children}
        </div>
        <DeleteButton />
      </div>
    </div>
  )
}

export default CustomCheckbox;
