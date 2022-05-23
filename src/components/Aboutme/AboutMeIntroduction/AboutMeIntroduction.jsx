import React, {useState} from 'react'
import './AboutMeIntroduction.css'
import Footer from "../../Footer"

import HeaderMain from "../../HeaderMain"

const AboutMeIntroduction = () => {
  
  const[showModal, setShowModal] = useState(false);

  const styles = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1614107151491-6876eecbff89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZ3VhZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
    width: "100%",
    height: "100%",
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
    
    <div className='container__aboutMeIntroduction'> 

        <div style={styles} className='container__bg__aboutme'>

        </div>

        <div className='container__main__aboutme'>
        <div className='name__quote__about'> 
          <p>Nicolas Ortiz Suarez</p>
        </div>
        <div className='title__about'>
          <h1>Everything You Wanted To Know About: Me</h1>
        </div>
        <div className='paragraph__about'>
          <p>
Why do we use it?

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        <div className='number__about'>
          <p>02 --</p>
        </div>
        </div>
        
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default AboutMeIntroduction