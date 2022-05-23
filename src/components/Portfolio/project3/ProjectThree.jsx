import React,{useState} from 'react'
import "./projectThree.css";

import HeaderMain from "../../HeaderMain"
import Footer from "../../Footer"

const ProjectThree = () => {


  const styleProjectThree = {
  
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

      <div className='box__project3_three'>

      <div className='box__firsttt'>
        <p>amigas</p>
        <p>14</p>
      </div>
      <div className='box__background_three'>
        <img style={styleProjectThree} src='https://images.unsplash.com/photo-1604341049375-a421bb4e6f08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2plY3RzJTIwdmVydGljYWwlMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
      </div>
      <div className='main__container_three'>
        <h2>PROJECT</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
      </div>

      </div>
      <Footer/>
      </div>


    </>
  )
}

export default ProjectThree