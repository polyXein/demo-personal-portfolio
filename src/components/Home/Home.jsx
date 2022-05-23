import React, {useState} from 'react'
import './Home.css'
import imageUn from '../../assets/image-un.png'
import imageDeux from '../../assets/image-deuxx.png'
import imageTrois from '../../assets/image-trois.png'
import imageQuatre from '../../assets/image-quatre.png'

import Footer from "../Footer"
import HeaderMain from "../HeaderMain"

import { Link, NavLink } from "react-router-dom"

const Home = () => {



  const styleHome = {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };


  const [showModal, setShowModal] = useState(false);

  return (

<>

<div className='contain_all_view'>
      <HeaderMain
      showModal={showModal}
      setShowModal={setShowModal}
    />

      <div className='container__home'>
          <div className='box__background__page'>
            <div className='box__titles'>
              <h1 className='titlee'>STRATEGIC</h1>
              <p className='descriptionn'>PRESENTATION SIMPLE </p>
            </div>
          </div>

          <div className='card un'>
          <NavLink 
          className="link"
          to="/about">

            <div className='container_card_home'>
                <div className='imageUn'>
                    <img
                     style={styleHome}
                    className='image ' src="https://images.unsplash.com/photo-1652932428743-765dac835308?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500" />  
                  </div> 
            </div>

          </NavLink>
          </div>

          <div className='card deux'>
          <NavLink
          className="link"
          to="/blog">
            <div className='container_card_home'>
              <div className='imageDeux'>
               <img
                     style={styleHome}
                className='image ' 
                src="https://images.unsplash.com/photo-1652932428743-765dac835308?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500" />
              </div> 
            </div>
            </NavLink>
          </div>

          <div className='card trois'>
          <NavLink
          className="link"
          to="/portfolio">
            <div className='container_card_home'>
              <div className='imageTrois'>
               <img 
                style={styleHome}
                className='image ' 
                src="https://images.unsplash.com/photo-1652932428743-765dac835308?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500" /> 
              </div> 
            </div>
            </NavLink>

          </div>

          <div className='card quatre'>
            <NavLink
            className="link"
            to="/contactme">
              <div className='container_card_home'>
                <div className='imageQuatre'>
                <img 
                  style={styleHome}
                  className='image ' 
                  src="https://images.unsplash.com/photo-1652932428743-765dac835308?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500" /> 
              </div> 
            </div>
            </NavLink>
          </div>
      </div>
    <Footer />
</div>
      </>

  )
}

export default Home