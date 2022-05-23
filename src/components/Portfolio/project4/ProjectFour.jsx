import React,{useState} from 'react'
import './ProjectFour.css'

import HeaderMain from "../../HeaderMain"
import Footer from "../../Footer"

const ProjectFour = () => {


  const styleProjectFour = {
  
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const[showModal, setShowModal] = useState(false);


  return (

    <>
    <div className='contain_all_view'>

     <HeaderMain
    showModal={showModal}
    setShowModal={setShowModal}
    />



      <div className='box__project4_Four'>
      
      <div className='box__title_four'>
        <h1>PROJECT 4</h1>
      </div>

      <div className='box__text_four'>
        <p>
        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
        </p>
      </div>
      
      <div className='container__image_four'>
      <img style={styleProjectFour} src='https://images.unsplash.com/photo-1648149348849-9d64ac2989bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG8lMjBjbGFyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
       
      </div>

      

      <div className='circle__bg_four'>
      </div>

      <div className='box__technologies_four'>
        <h6>HTML/CSS</h6>
        <p>Grid | Flex-box</p>
        <h6>JAVASCRIPT</h6>
        <p>React Js</p>
      </div>

      </div>

      <Footer/>
      </div>

    </>

  )
}

export default ProjectFour