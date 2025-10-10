const Notification = ({ message, classes }) => {
  return (
      <div className={classes}>
        <p>{message}</p>
      </div>
    )
}

export default Notification