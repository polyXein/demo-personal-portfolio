import React, {useState} from 'react'
import "./Education.css"
import Footer from "../../Footer"

import HeaderMain from '../../HeaderMain'

const Education = () => {

    const[showModal, setShowModal] = useState(false);

    const styling = {
        backgroundImage:
          "url(https://images.unsplash.com/photo-1614107151491-6876eecbff89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZ3VhZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
        width: "84%",
        height: "90%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };

  return (

    <>
    <div className='contain_view_all'>

    
    <HeaderMain
    showModal={showModal}
    setShowModal={setShowModal}
    />
    <div className=' container__title__education'>
        <h1>Nick's Education</h1>
    </div>
    
    <div className='container__education'>
        <div className='container__school edu__platzi'>
            <div  className='img_edu'>
                <div className='' style={styling}></div>
            </div>
            <div className='box__descript__edu'>
                <div className='box__row__date'>
                    2022 - Actual
                </div>
                <div className='box__row__title'>
                    Platzi
                </div>
                <div className='box__row__descript'>
                    Plataforma de online
                     education tuve donde estudie
                     tecnologias a frontend
                      enfocado en react js y back.
                </div>
            </div>
        </div>

        <div className='container__school edu__freecodecamp'>
                <div className='box__descript__edu'>
                        <div className='box__row__date'>
                            2022 - Actual
                        </div>
                        <div className='box__row__title'>
                            Platzi
                        </div>
                        <div className='box__row__descript'>
                            Plataforma de online
                            education tuve donde estudie
                            tecnologias a frontend
                            enfocado en react js y back.
                        </div>
                    </div>
                <div  className='img_edu'>
                        <div className='' style={styling}></div>
                </div>
        </div>

        <div className='container__school edu__cs50'>
        <div  className='img_edu'>
                <div className='' style={styling}></div>
            </div>
            <div className='box__descript__edu'>
                <div className='box__row__date'>
                    2022 - Actual
                </div>
                <div className='box__row__title'>
                    Platzi
                </div>
                <div className='box__row__descript'>
                    Plataforma de online
                     education tuve donde estudie
                     tecnologias a frontend
                      enfocado en react js y back.
                </div>
            </div>
        </div>

        

        <div className='container__school edu__univalle'>
        <div className='box__descript__edu'>
                        <div className='box__row__date'>
                            2022 - Actual
                        </div>
                        <div className='box__row__title'>
                            Platzi
                        </div>
                        <div className='box__row__descript'>
                            Plataforma de online
                            education tuve donde estudie
                            tecnologias a frontend
                            enfocado en react js y back.
                        </div>
                    </div>
                <div  className='img_edu'>
                        <div className='' style={styling}></div>
                </div>
        </div>
    </div>

    <Footer/>
    </div>

    </>
  )
}

export default Education