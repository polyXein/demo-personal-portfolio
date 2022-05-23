import React, {useState} from 'react'
import "./ContactMe.css"


import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HeaderMain from '../HeaderMain';


const ContactMe = () => {
  
    const [showModal, setShowModal] = useState(false);
  
  /*   const changeState = () => {
        setShowModal(showModal => !showModal)
    }
 */
    return (

    <>
    <div className='contain_all_view'>

    
    <HeaderMain
    showModal={showModal}
    setShowModal={setShowModal}
    />
    <div className='container__page_contactme'>
            <div className='container__title_contactme'>
                <h1>LET'S CONNECT</h1>        
                <p>Get in to</p>

            </div>
            <div className='box__rowOne__contacme'>
                <div className='redsocial__left_contact_rowOne'>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href='https://www.linkedin.com/in/nicolasortizdev/'
                    className='box_icon_of_contactme'> 

                          <LinkedInIcon className="icon_grow_contacme"  />
                    </a>
                    <p className='dscript_title_redsocial' >LINKEDIN</p>
                </div>
                <div className='redsocial__right_contact_rowOne'>
                 <a 
                    target="_blank"
                    rel="noreferrer"
                    href='https://github.com/polyXein'
                 className='box_icon_of_contactme'> 
                     <GitHubIcon className='icon_grow_contacme' />
                </a>
                    <p className='dscript_title_redsocial' >GITHUB</p>
                </div>
            </div>
            <div className='box__rowTwo__contacme'>
                <div className='redsocial__left_contact_rowOne'>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href='https://twitter.com/polyXein'
                    className='box_icon_of_contactme'> 
                    <TwitterIcon className="icon_grow_contacme" />

                    </a>
                    <p className='dscript_title_redsocial' >TWITTER</p>
                </div>
                <div className='redsocial__right_contact_rowOne'>
                 <a 
                    target="_blank"
                    rel="noreferrer"
                    href='https://www.instagram.com/polyxein/'
                    className='box_icon_of_contactme'> 
                    <InstagramIcon className="icon_grow_contacme" />  
                    </a>
                    <p className='dscript_title_redsocial' >INSTAGRAM</p>
                </div>
            </div>
           
            <div className='box__rowThree__contacme'>
                 <p>I LOOK FORWARD TO HEARING FROM YOU!</p>
            </div>
            <div className='box__rowFive__contacme'></div>
    </div>
    </div>

    </>
  )
}

export default ContactMe
