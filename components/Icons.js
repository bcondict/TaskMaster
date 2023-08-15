

/**
 * Icon of a plus sign
 * @param {*} props 
 * @returns {JSX.Element} The icon of a plus sign
 */
export const AddTaskIcon = (props) => {
  const { fillColor } = props

  return (
    <svg width="50%" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* <rect x="-20%" y={"-10"} width="150%" height="150%" rx="100" fill="#EEE0C9"/> */}
      <rect x="48" width="25" height="120" rx="12.5" fill={fillColor}/>
      <rect y="73" width="25" height="120" rx="12.5" transform="rotate(-90 0 73)" fill={fillColor}/>
    </svg>
  )

}

