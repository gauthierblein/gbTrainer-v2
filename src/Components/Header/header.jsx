import { Link } from "react-scroll"

import './header.css'

// Imported icons images and sounds =========>
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";
import sound1 from "../../Assets/Sounds/click-1139.wav"



const Header = () => {

  function playClickSound() {
    new Audio(sound1).play()
  }
  
  return (
      <div className="header-container">
        <div className="header-left">
            <div className="header-logo">
                <span>GB</span><span>Trainer</span>
            </div>
            <div className="header-socials">
                <a 
                      href="https://www.instagram.com/gauthierbtrainer"
                      target="_blank" rel="noopener noreferrer"
                      onClick={playClickSound}
                >
                  <FaInstagram size={32} className='social' />
                </a >
                <a 
                      href={"mailto:gauthierbtrainer@gmail.com"}
                      onClick={playClickSound}
                >
                  <HiOutlineMail size={32} className='social'/>
                </a>
              </div>
          </div>

            <nav className="header-nav">

                  <Link 
                    onClick={playClickSound}
                    className="header-link"
                    to ="services"
                    >PRESTATIONS
                  </Link>
                  <Link 
                    onClick={playClickSound}
                    className="header-link"
                    to ="contact"
                    >CONTACT
                  </Link>
            </nav>
          </div>
    )
  };

  export default Header