import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineArrowBack} from 'react-icons/md'
import { Logo } from '../../assets/img'

interface NavbarProps {
  toggleMenu: boolean
  handleToggleMenuChange: () => void
}

const Navbar = ( {toggleMenu, handleToggleMenuChange}: NavbarProps) => {

  return (
    <nav className="navbar">
      { /* Menu for devices with above 1400px width  */}

      <div className='navbar__menu'>

      <img src={Logo} alt='logo'/>
      <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">FEATURES</a></li>
          <li><a href="">PORTFOLIO</a></li>
          <li><a href="">ELEMENTS</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">TEAM</a></li>
          <li><a href="">BLOG</a></li>
          <li><a href="">CONTACT</a></li>
      </ul>
      </div>
      
      {/* Menu for devices with less than 1400px width  */}
      <div className='smallscreen'>

        { toggleMenu ? (
          <div className='navbar__menu-smallscreen-overlay'>
            <MdOutlineArrowBack
                color='white'
                onClick={handleToggleMenuChange}/>
            <ul className='flex__center '>
              <li><a href="">HOME</a></li>
              <li><a href="">FEATURES</a></li>
              <li><a href="">PORTFOLIO</a></li>
              <li><a href="">ELEMENTS</a></li>
              <li><a href="">ABOUT</a></li>
              <li><a href="">TEAM</a></li>
              <li><a href="">BLOG</a></li>
              <li><a href="">CONTACT</a></li>
            </ul>
          </div>
        ) : (
          <div className='navbar__menu-smallscreen'>
            <img src={Logo} alt='logo'/>
            <GiHamburgerMenu 
              color='white'
              onClick={handleToggleMenuChange}/>
          </div>
        )}
        </div>

    </nav>
  )
}

export default Navbar