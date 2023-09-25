/**
 * CustomCheckbox component
 * 
 * This component provides a customizable checkbox with label text and a delete button.
 *
 * @component
 * @returns {JSX.Element} - Returns a checkbox with label text and a delete button
 * 
 * @example
 * // Import the CustomCheckbox component
 * import CustomCheckbox from "./components/CustomCheckbox"
 */
import { useState } from "react";
import styles from "./CustomCheckbox.module.css"

const CustomCheckbox = () => {

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
    // Complete the checkbox component
    <label role="button" className={styles.customCheckbox} checked check>
      {/* Default Check Box */}
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      {/* Custom Check Box */}
      <span className={styles.checkboxCheckmark}></span>
    </label>
  )
}

export default CustomCheckbox;
