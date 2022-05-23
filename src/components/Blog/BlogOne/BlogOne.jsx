import React, {useState} from 'react'
import "./BlogOne.css"
import HeaderMain from "../../HeaderMain"
import Footer from "../../Footer"
const BlogOne = () => {

  const[showModal, setShowModal] = useState(false);

  const stylebg = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1609700931311-0e320384825c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdpbnRlciUyMHNlYXNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    opacity: "0.9", 
  };

  return (
    <>
    <div className='contain_all_view'>



    <HeaderMain
      showModal={showModal}
      setShowModal={setShowModal}
    />

    <div className='container__blogOne'>
      <div style={stylebg} className='partUp__bgImg__blogOne'>
        <div className='container__buttons_tags'>
          <p>Nature</p>
          <p>Travel</p>
          <p>Earth</p>
        </div>
        <h1>Is Winter season already here?</h1>
      </div>
      <div className='partDown__paragraph__blogOne'>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
             <br/>
             <br/>
         Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text  ....</p>
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

export default BlogOne