import { useState } from "react";
import styles from "./CustomCheckbox.module.css"

const CustomCheckbox = ({ children }) => {

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <label className={styles.customCheckbox}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkboxCheckmark}></span>
        <div
          className={styles.checkboxText}
          style={{ 
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {children}
        </div>
      </label>
    </div>
  )
}

export default CustomCheckbox;
