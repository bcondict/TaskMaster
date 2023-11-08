import styles from './CustomBackground.module.css'

const CustomBackground = ({ children }) => {
  return (
    <div className={styles.customBackground} data-align="center">
      {children}
    </div>
  )
}

export default CustomBackground
