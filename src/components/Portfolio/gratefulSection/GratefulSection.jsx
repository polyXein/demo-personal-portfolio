import React, {useState} from 'react'
import './gratefulSection.css'
import Footer from "../../Footer.jsx"
import HeaderMain from '../../HeaderMain'
 const GratefulSection = () => {

  const[showModal, setShowModal] = useState(false);


  return (

<>
<div className='contain_all_view'>

<HeaderMain
    showModal={showModal}
    setShowModal={setShowModal}
    />

    <div className='container__grateful'>
      <div className='first__background'></div>
      <div className='second__background'></div>

        <div className='third__background'>
        <div className='column__left1'></div>
        <div className='column__middle1'></div>
        <div className='column__right1'></div> 

        <p className='title__left'>THANK YOU</p>  

        <p className='title__right'>
      Some people dream of success, while other people get up every morning and make it happen.
          </p>
        <p className='title__rightDown'>Wayne Huizeng</p>

        <p className='footer_phrase'> 
          You can   <br/>
          do it.
        </p> 
        
      </div>

      

    </div>
    <Footer/>
    </div>

    </>

)
}
export default GratefulSection;
