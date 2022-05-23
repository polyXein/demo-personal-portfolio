import React, {useState} from 'react'
import './introduction.css'
import { Link } from 'react-router-dom'

import HeaderMain from "../HeaderMain"
import Footer from "../Footer.jsx"

const Introduction = () => {


    const[showModal, setShowModal] = useState(false);

  return (

    <>
<div className='box__unesperate'>
       <HeaderMain
      showModal={showModal}
      setShowModal={setShowModal}
    />


      <div className='container__box'>
      <div className='container__title'>
        <div className='box__titleh3'>
          <h3>TABLE OF</h3>
        </div>
        <div className='box__titleh2'>
          <h2>CONTENTS</h2>
        </div>
      </div>

      <div className='box__all__lines'> 

        <div className='container__line one'> 
         <div className='container__flag'>
         <Link to="/home">
              <p>🇬🇧</p> 
           </Link>
          </div> 
          <div className='container__title__description'> 
              <h3>English</h3>
              <p>Choose the language</p>    
          </div>
        </div>

        <div className='container__line two'> 
         <div className='container__flag'>
            <p>🇫🇷</p> 
          </div> 
          <div className='container__title__description'> 
              <h3>Français</h3>
              <p>choisissez la langue</p>    
          </div>
        </div>

        <div className='container__line three'> 
         <div className='container__flag'>
            <p>🇵🇹</p> 
          </div> 
          <div className='container__title__description'> 
              <h3>Português</h3>
              <p>escolha o idioma</p>    
          </div>
        </div>
        <div className='container__line four'> 
         <div className='container__flag'>
            <p>🇰🇷</p> 
          </div> 
          <div className='container__title__description'> 
              <h3>한국어</h3>
              <p>언어를 선택합니다 </p>    
          </div>
        </div>
        <div className='container__line five'> 
         <div className='container__flag'>
            <p>🇩🇪</p> 
          </div> 
          <div className='container__title__description'> 
              <h3>Deutsch</h3>
              <p>Wählen Sie die Sprache</p>    
          </div>
        </div>
        <div className='container__line six'> 
         <div className='container__flag'>
            <p>🇮🇹</p> 
          </div> 
          <div className='container__title__description'> 
              <h3>Italiano</h3>
              <p>scegliere la lingua</p>    
          </div>
        </div>
        <div className='container__line sevent'> 
         <div className='container__flag'>
            <p>🇨🇳</p> 
          </div> 
          <div className='container__title__description'> 
              <h3>中文</h3>
              <p>选 择 语 言</p>    
          </div>
        </div>
        

      </div>


      </div>

      <Footer />
      </div>
    
      </>

  )
}

export default Introduction