import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from './Password Item'

import './App.css'

class App extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordsList: [],
    isChecked: false,
    searchInput: '',
  }

  deleteFunction = uniqId => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(each => each.id !== uniqId)
    this.setState({passwordsList: filteredList})
  }

  toggleCheckbox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      password: '',
      username: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {isChecked, searchInput, passwordsList} = this.state
    const searchResults = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="inputs-container">
            <div className="top-container">
              <form onSubmit={this.onAddPassword} className="form-container">
                <h1 className="form-heading">Add New Password</h1>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="logo"
                  />
                  <input
                    onChange={this.onChangeWebsite}
                    type="text"
                    placeholder="Enter Website"
                    className="input"
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="logo"
                  />
                  <input
                    onChange={this.onChangeUsername}
                    type="text"
                    placeholder="Enter Username"
                    className="input"
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="logo"
                  />
                  <input
                    onChange={this.onChangePassword}
                    type="password"
                    placeholder="Enter Password"
                    className="input"
                  />
                </div>
                <div className="button-container">
                  <button className="form-button" type="submit">
                    Add
                  </button>
                </div>
              </form>
              <div className="top-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                  alt="password manager"
                  className="top-image"
                />
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <div className="header">
              <div className="count-container">
                <h1 className="form-heading">Your Passwords</h1>
                <p className="count">{searchResults.length}</p>
              </div>
              <div className="search-bar">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                  className="search-icon"
                />
                <input
                  type="search"
                  placeholder="Search"
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <hr />
            <div className="cards-container">
              <div className="checkbox-container">
                <input
                  id="checkBox"
                  type="checkbox"
                  onChange={this.toggleCheckbox}
                />
                <label htmlFor="checkBox" className="checkbox-para">
                  Show Passwords
                </label>
              </div>
              <div>
                {searchResults.length === 0 ? (
                  <div className="no-passwords-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                      alt="no passwords"
                      className="empty-image"
                    />
                    <p className="no-para">No Passwords</p>
                  </div>
                ) : (
                  <ul className="list-container">
                    {searchResults.map(each => (
                      <PasswordItem
                        key={each.id}
                        details={each}
                        condition={isChecked}
                        deleteFunction={this.deleteFunction}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
