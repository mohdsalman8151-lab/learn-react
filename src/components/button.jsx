const Button = ({className, label, handleClick}) => {
  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  )
}

export default Button