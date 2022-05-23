import React, {useState} from 'react'
import "./bloghome.css"
import LastBlog from "./LastBlog"


import HeaderMain from "../../HeaderMain"

import Footer from "../../Footer"
import { Link } from 'react-router-dom'


const BlogHome = () => {
  const [showModal, setShowModal] = useState(false);

  const styleblog = {
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

        <div className='container__bloghome'>


        <div className='box__imgup__right'>
          <img 
            style={styleblog}
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          className="box__img__bloghome" />
        </div>
        <div className='box__imgup__left'>
          <img
            style={styleblog}
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className='box__title__bloghome'>

        <p>------- NEW BLOGS</p>
        <Link 
        className='link_personal_blog_qa'
        to="/blog/QA">
        <p id='id_qa_title'> PERSONAL</p>
        </Link>

        </div>
        <div className='bg__sideright'> 
         <img 
            style={styleblog}
            src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            className="box__img__bloghome" />
        </div>
        <div className='img__bg__leftdown'>
          <img
            style={styleblog}
            src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="box__img__bloghome" />
        </div>
        <div className='bg__leftdown'></div>

        <p className='lecture__box__blog'>독서를 좋아합니다</p>


        </div>

        <div className='container_main_blogs'>
          <div className='headline__blog'>
            <div className='box__title_date'>
              <h1>HEADLINE</h1>
              <p>Today, February 23rd</p>
            </div>
            <div>X</div>
          </div>
          <div className='box__search_blogs'>
            <div className='container__searching'>
              <span>♂</span>
              <input type="text" placeholder='Search articles'/>
              <span>δ</span>
            </div>
          </div>
          <div className='box__topics_blogs'> 
              <button>All</button>
              <button>Francais</button>
              <button>한국인</button>
              <button>English</button>
          </div>
          <div className='container__trending__blogs'>
            <div className='box__title__trendings'>
              <h2>Trending</h2>
              <p>View More</p>
            </div>
            <div className='box__compont_blogtrending'>
              <div className='box__img_compt_blog_trending'>
                <img style={styleblog} src='https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmd1YWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
              </div>
              <h3 className='title__blog_compt_trending'>
                NEW LANGUAGES: THE BEST TEORYS TO LEARN A NEW LANGUAGES
              </h3>
              <div className='box__details__compont_blog'>
              <h3>World</h3>
              <div>
                <p><span>⇝</span> 1h ago  <span>✘</span></p>

              </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='container___latest__blogs'>
        <div className='box__title__trendings titleslasts'>
              <h2>Latest</h2>
              <p>View More</p>
            </div>
          <div className='box__component_latestblog'>
            <LastBlog/>
            <LastBlog id="last_blog_to_delete"/>
            <LastBlog id="last_blog_to_delete"/>
            <LastBlog id="last_blog_to_delete"/>
            <LastBlog id="last_blog_to_delete"/>
          </div>
        </div>

        <Footer />
        
        
        </div>

    </>
  )
}

export default BlogHome