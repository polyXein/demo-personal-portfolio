import React, { useState} from 'react'
import "./BlogQuestionsAboutMe.css"
import HeaderMain from "../../HeaderMain"

import Footer from "../../Footer"

const BlogQuestionsAboutMe = () => {

  const [showModal, setShowModal] = useState(false);


  const styleQAimg = {
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


    <div className='container__QA__allofme'>
      <div className='container__QA__partup'>
        <img  style={styleQAimg} src='https://images.unsplash.com/photo-1652122203971-51cee22fc223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
      </div>
      <div className='container__QA__partdown'>
<div>

          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions havE...... XD
          </p>
</div>
          <div>
         <button className='button_readmore__blogOne'>Read more</button>
         </div>
      </div>
    </div>
    <Footer />
</div>
</>
  )
}

export default BlogQuestionsAboutMe