import React, { useState} from 'react'
import "./homeAbout.css"
import Footer from "../../Footer"
import HeaderMain from '../../HeaderMain';
import { Link } from 'react-router-dom';

const HomeAbout = () => {

  const [showModal, setShowModal] = useState(false);

  const containerStyle = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1596403387934-b711c8218ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };


  return (

    <>
    <div className='contain_all_view'>

  
    <HeaderMain
    showModal={showModal}
    setShowModal={setShowModal}
    />

    <div style={containerStyle} className='container__about'>

      <div className='container__header logo hamburger menu'> </div>



    <div className='container__main__about'>
      <h1>About me</h1>
      <p>Hi, here you can see a little bit about me and know more 
        about my education
      </p>
    </div>


        <div className='container__footer__about'>
          <div className='box__numbers__left'>
            <p>03 --</p>
            <p>-- 06</p>
          </div>

          <div className='box__readme__right'>
           <p>
           <Link
           className='linkt_readme_right'
           to="/about/me">
            <span>Me</span>
           </Link>
              <br/>
           <Link
           className='linkt_readme_right'
           to="/about/education">
            <span> Education </span>  
            </Link>

            </p>
          </div>
        </div>

    </div>

      <Footer />
      </div>
    </>
  )
}

export default HomeAbout