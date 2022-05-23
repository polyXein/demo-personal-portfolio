import React from 'react'
import "./Footer.css"

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='container__footer_page'>

                <div className='box__socialmedia_footer'>


                     <a 
                     target="_blank"
                     rel="noreferrer"
                     href='https://www.linkedin.com/in/nicolasortizdev/'
                    className='box__redsocial'>
                    <LinkedInIcon
                    className='icon_size_modify'
                    />

                    </a>
                    <a 
                     target="_blank"
                     rel="noreferrer"
                     href='https://github.com/polyXein'
                     className='box__redsocial'>
                    <GitHubIcon 
                    className='icon_size_modify'
                    />

                    </a>
                    <a 
                     target="_blank"
                     rel="noreferrer"
                     href='https://twitter.com/polyXein'
                     className='box__redsocial'>
                    <TwitterIcon 
                    className='icon_size_modify'
                    />

                    </a>
                    <a 
                     target="_blank"
                     rel="noreferrer"
                     href='https://www.instagram.com/polyxein/'
                     className='box__redsocial'>
                    <InstagramIcon 
                    className='icon_size_modify'
                    />
                    </a>
                </div>

    </div>
  )
}

export default Footer