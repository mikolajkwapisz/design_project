import './footer.css';
import { Logo } from '../../assets/img';
import {FaFacebookF, FaPinterest} from 'react-icons/fa'
import {AiOutlineTwitter, AiOutlineDribbble} from 'react-icons/ai'
import {TiSocialGooglePlus} from 'react-icons/ti'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__design'>
        <div className='footer__design-wrapper'>
          <div className='footer__design-logo-wrapper'>
            <img src={Logo} alt="logo"/>
          </div>
          <ul className='footer__design-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <ul className='footer__design-socials'>
            <li>
              <a href="">
                <FaFacebookF size={24}/>
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineTwitter size={27}/>
              </a>
            </li>
            <li>
              <a href="">
                <TiSocialGooglePlus size={35}/>
              </a>
            </li>
            <li>
              <a href="">
                <FaPinterest size={22}/>
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineDribbble size={28}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright &copy;, 2022</p>
      </div>
    </footer>
  )
}

export default Footer