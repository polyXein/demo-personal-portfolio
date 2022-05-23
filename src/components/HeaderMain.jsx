import React, {useState} from 'react'
import "./HeaderMain.css"

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"


const HeaderMain = ( {showModal, setShowModal} ) => {

const changeStateModal = () => {
    setShowModal(showModal => !showModal)
}
  return (
    <div className='Container_mainHeader_compnt'>

    <div className='box__title__logoPolyXein'>
        <Link id="route_logo__title" to="/">
            <h3>polyXein</h3>
        </Link>
    </div>
    
    <button className='button_burgerMenu_open'>
        <MenuIcon
        className="icon__burgermenu" 
        type="button"
        onClick={changeStateModal}
        />
    </button>
        
        <div className={` box__burgerNav ${showModal && 'showBurger'}`}>

            <div className='closeWrapper__iconClose'>
              <button>
                <CloseIcon
                className='CloseIcon__iconclose' id="icon_closee"
                type="button"
                onClick={changeStateModal}
                />
              </button>
            </div>

            <ul>
                <li>
                    <Link 
                    id='tag_link_route'
                    to="/home">HOME</Link>
                </li>
                <li>
                <Link 
                    id='tag_link_route'
                    to="/about">ABOUT</Link>
                </li>
                <li>
                <Link 
                    id='tag_link_route'
                    to="/blog">BLOG</Link>
                </li>
                <li>
                <Link 
                    id='tag_link_route'
                    to="/portfolio">PORTFOLIO</Link>
                </li>
                <li> 
                <Link 
                    id='tag_link_route'
                    to="/contactme">CONTACT ME</Link>
                </li>
                <li> 
                <Link 
                    id='tag_link_route'
                    to="/">LANG</Link>
                </li>
                
            </ul>
            <footer>@polyXein</footer>
        </div>
    

    </div>
  )
}

export default HeaderMain