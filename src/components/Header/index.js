import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {isToggleActive: false}

  whenToggleButtonClick = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  showDropDownMenu = () => (
    <>
      <ul className="navBar">
        <Link to="/" className="link">
          <li className="item">Home</li>
        </Link>
        <Link to="/about" className="link">
          <li className="item">About</li>
        </Link>
      </ul>
    </>
  )

  render() {
    return (
      <>
        <li className="nav1">
          <Link to="/">
            <div className="website-logo">
              <p>COVID19</p>
              <p className="color">INDIA</p>
            </div>
          </Link>
          <div>
            <ul className="menu">
              <button type="button" className="btn1">
                <li>
                  <Link to="/">Home </Link>
                </li>
              </button>
              <button type="button" className="btn2">
                <li>
                  <Link to="/about">About </Link>
                </li>
              </button>
            </ul>
          </div>
        </li>
      </>
    )
  }
}

export default Header
