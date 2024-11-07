import {Link, withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const Header = props => {
  const {history} = props
  const logoutButton = () => {
    history.replace('/login')
    Cookie.remove('jwt_token')
  }
  return (
    <nav className="nav-container">
      <div className="nav-card">
        <Link to="/" style={{textDecoration: 'none'}}>
          <h1 className="nav-logo">Travel Trip</h1>
        </Link>

        <div>
          <Link to="/" className="Home-nav">
            Home
          </Link>
          <Link to="/my-trips" className="Home-nav">
            My Trips
          </Link>
        </div>
        <button className="logout-btn" type="button" onClick={logoutButton}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
