import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5'

import './index.css'

class Login extends Component {
  state = {
    isEyesOpened: false,
    inputType: 'password',
    username: '',
    password: '',
    errorMsg: '',
  }

  showHidePassword = () => {
    this.setState(prevState => {
      const newInputType = prevState.isEyesOpened ? 'password' : 'text'
      return {isEyesOpened: !prevState.isEyesOpened, inputType: newInputType}
    })
  }

  passwordShow = () => {
    this.setState(prevState => ({
      isEyesOpened: !prevState.isEyesOpened,
      inputType: 'text',
    }))
  }

  passwordHide = () => {
    this.setState(prevState => ({
      isEyesOpened: !prevState.isEyesOpened,
      inputType: 'password',
    }))
  }

  onChangeUserName = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  showSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.showSuccess(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {isEyesOpened, inputType, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="login-card">
          <form onSubmit={this.submitLogin}>
            <h1 className="login-heading">Travel Trip</h1>
            <div className="input-container">
              <label htmlFor="username" className="label-el">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="input-El"
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="label-el">
                Password
              </label>
              <div className="password-container">
                <input
                  id="password"
                  type={inputType}
                  placeholder="Password"
                  className="password-input-el"
                  onChange={this.onChangePassword}
                />
                <button
                  type="button"
                  className="show-hide-button"
                  data-testid="show-password"
                  onClick={this.showHidePassword}
                >
                  {isEyesOpened ? (
                    <IoEyeOffOutline className="eye-icon" />
                  ) : (
                    <IoEyeOutline className="eye-icon" />
                  )}
                </button>
              </div>
            </div>
            <p className="error-message">{errorMsg}</p>
            <button
              type="submit"
              className="login-button"
              onClick={this.submitLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
