import React, {useState} from 'react'
import "./project1.css"
import HeaderMain from "../../HeaderMain"
import Footer from "../../Footer"

const ProjectOne = () => {
  const[showModal, setShowModal] = useState(false);

  const styleProjectOne = {
  
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

<div className='container__project1_one'>
    
    <div className='the_background__leftt'>
     
    </div>
    <div className='the_background__rightt'></div>
    <div className='photo__project'>
   
    <img style={styleProjectOne} src='https://images.unsplash.com/photo-1574619150954-daa4c5ffad57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTk4NjkyNnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
    </div>
    <h2 className='title__of__project'>Project 1</h2>

    <div className='photo__left_project'> 
   

    <img style={styleProjectOne} src='https://images.unsplash.com/photo-1574619309164-1ecba8514a35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTk4NjkyNnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
   
    </div>
    <div className='photo__left_small_project'> 
    <p>
        Here you can see a little bit of text to 
        Here you can see a little bit of  
      </p></div>
    <div className='the_description__final'>
    <h6>Project Web</h6>
    <p>2022 May </p>


    </div>
    <div className='the_description__left'>
      <h6>ProjectOne</h6>
    </div>


  </div>
    
    <Footer/>
    </div>

    </>

  )
}

export default ProjectOne