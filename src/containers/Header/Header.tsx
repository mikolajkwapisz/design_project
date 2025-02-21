import './header.css'
import { useEffect, useState } from 'react'
import { Logo} from '../../assets/img'
import Navbar from '../Navbar/Navbar'
import useWindowSize from '../../hooks/useWindowSize'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  // Closing menu on window width change 
  useEffect( () => {
    if(toggleMenu) {
      setToggleMenu(false)
    }
  }, [useWindowSize().width])

  function handleToggleMenuChange() {
    setToggleMenu( prevValue => !prevValue)
  }

  return (
    <header className='header'>
        <Navbar
          toggleMenu = {toggleMenu}
          handleToggleMenuChange={handleToggleMenuChange}/>
      {/* Show header content if menu for small devices is not visible */}
      { !toggleMenu && (
        <section>
      <div className="header__content">
        <h2 className='header__content-shortdescription'>
          GRAPHICS. WEB. DIGITAL.
        </h2>
        <h1 className='header__content-title'>
          START-UP
        </h1>
        <p className='header__content-description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incdidunt ut labore et dolore magna aliqua. Ut enim od minim.
        </p>
        <button className='header__content-button'>
          EXPLORE WORK
        </button>
      </div>
        </section>

      ) }
    </header>
  )
}

export default Header