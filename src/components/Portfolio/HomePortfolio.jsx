import React, {useState} from 'react'
import './HomePortfolio.css'
import Footer from "../Footer"
import HeaderMain from '../HeaderMain'

import { Link } from 'react-router-dom'


const HomePortfolio = () => {


  const stylingBgImg = {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const[showModal, setShowModal] = useState(false);


  return (
    
    <>

    <div className='contain_view_all'>
      
    <HeaderMain
      showModal={showModal}
      setShowModal={setShowModal}
    />

    <div className='container__index'>
            <div className='box__titles'>
                <p>
                    <Link
                    className='link'
                    to="/portfolio/project1">
                      <span>Project1</span>
                    </Link>
                </p>
                <p>
                  <Link 
                  className='link'
                  to="/portfolio/project3">
                      <span>Project3</span>
                  </Link>
                </p>
            </div>

            <div className='box__titles_bottom'>
                <p>
                  <Link
                  className='link'
                   to="/portfolio/project2">
                      <span>Project2</span>
                  </Link>

                </p>
                <p>  
                    <Link
                    className='link'
                    to="/portfolio/project4">
                        <span>Project4</span>
                    </Link>
                </p>
            </div>
            <div className='container__mainContent'>
                <h1>
                  <Link 
                  className='link'
                  to="/portfolio/grateful"
                  >
                    <span>Portfolio</span>
                  </Link>
                </h1>
                <p>Here you can see a little bit about my main projects during my journey in programming and learning more about my process learning to code.</p>

            </div>

            <div className='box__image'>
                <div>
                  {/*   <img src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" /> */}
                  <img style={stylingBgImg} src='https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />

                </div>

            </div>

    </div>
    <Footer />
    
    </div>
    
    </>
  )
}

export default HomePortfolio