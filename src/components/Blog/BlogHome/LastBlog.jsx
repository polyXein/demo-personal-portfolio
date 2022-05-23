import React from 'react'
import "./LastBlog.css"
import { Link } from 'react-router-dom';
import Footer from "../../Footer"

const stylelastblog = {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

const LastBlog = () => {
  return (
    <>

    
    <div className='container_compont__last_blog'>

            <Link to="/blog/winterseason" className='descript__part_left_lastblog'> 
                <p>Francais</p>
                <h6>The new ways to learn francais a little more easy</h6>
                <p><span>⇝</span> 14 ago  <span>✘</span></p>
            </Link>
            <div className='part_left_img_lastblog'>
                <img style={stylelastblog} src='https://images.unsplash.com/photo-1652078140599-1d7e1eafb90b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
            </div>
    </div>

    </>
  )
}

export default LastBlog