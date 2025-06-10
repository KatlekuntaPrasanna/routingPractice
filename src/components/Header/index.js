import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="text">Wave</h1>
    </div>
    <ul className="nav-list">
      <li>
        <Link to="/" className="text">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="text">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
