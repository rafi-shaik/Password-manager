import './index.css'

const PasswordItem = props => {
  const {details, condition} = props
  const {id, deleteFunction, website, username, password} = details

  const deletebtn = () => {
    deleteFunction(id)
  }

  return (
    <li className="list-item">
      <p className="initial-container">{username.slice(0, 1)}</p>
      <div className="text-container">
        <p className="para">{website}</p>
        <p className="para">{username}</p>
        {condition ? (
          <p className="para">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            alt="stars"
            className="starts-img"
          />
        )}
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={deletebtn}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
