import React,{useState} from 'react'
import './projectTwo.css'
import HeaderMain from "../../HeaderMain"
import Footer from "../../Footer"

 const ProjectTwo = () => {

  
  const styleProjectTwo = {
  
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


    <div className='container__projectTwo_two'>
      <div className='box__projectTwo'>

      <div className='column__leftt'>
        <img style={styleProjectTwo} src='https://images.unsplash.com/photo-1574664058376-a25801f95a89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTk4NjkyNnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
      </div>
      <p className='title__down__leftt'> Image 1</p>

      <div className='column__middlee'>
          <p className='first__title__projectt'>Work</p>
          <div className='center__imagee'> 
            <img style={styleProjectTwo} src='https://images.unsplash.com/photo-1574619151298-abfa05446e7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjF8MTk4NjkyNnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
          </div>

          <div className='description__centerr'>
            <p id='part1__descriptionn'>Passions projects</p>
            <p id='part2__descriptionn'>2020, xein fronted</p>
          </div>

      </div>

      <div className='column_of_rightt'>
        <img style={styleProjectTwo} src='https://images.unsplash.com/photo-1574664058376-a25801f95a89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTk4NjkyNnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
      </div>
      <p className='title__down_of__right'>Image 2</p>

    <p className='description_of_footer'>Description finally about my project a little bit</p>

    </div>
    </div>
  
    <Footer/>
    </div>
    </>

  )
}

export default ProjectTwo;