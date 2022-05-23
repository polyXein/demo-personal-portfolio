import './App.css';
import Introduction from './components/introduction/Introduction.jsx'
import Home from './components/Home/Home.jsx'
import CallApi from './components/Home/CallApi';
import { Route, Routes } from 'react-router-dom';

import HomePortfolio from './components/Portfolio/HomePortfolio';
import ProjectOne from './components/Portfolio/project1/ProjectOne';
import ProjectTwo from './components/Portfolio/project2/ProjectTwo.jsx'
import ProjectThree from './components/Portfolio/project3/ProjectThree.jsx'
import ProjectFour from './components/Portfolio/project4/ProjectFour.jsx'
import GratefulSection from './components/Portfolio/gratefulSection/GratefulSection';

import About from './components/Aboutme/About/HomeAbout'
import AboutMeIntroduction from './components/Aboutme/AboutMeIntroduction/AboutMeIntroduction.jsx'
import Education from './components/Aboutme/myEducation/Education.jsx'

import BlogHome from './components/Blog/BlogHome/BlogHome.jsx'
import BlogOne from './components/Blog/BlogOne/BlogOne.jsx'
import BlogQuestionsAboutMe from "./components/Blog/BlogAllofme/BlogQuestionsAboutMe.jsx"


import ContactMe from "./components/Contact/ContactMe.jsx"

function App() {

  

  return (

    
      <Routes> 
        {/* introductio => choose language
            home => choose section 1. about 2. blog 3. projects 4. team
          */}
            <Route path="/" index element={<Introduction />} />
            <Route path="/home" element={<Home />} />
            
            {/* routes portfolio 
              portfolio. home, welcome. 
              projects 1,2,3,4 
              grateful, goodbyes
            */}
            <Route path="/portfolio" element={<HomePortfolio />} />
            <Route path="/portfolio/project1" element={<ProjectOne />} />
            <Route path="/portfolio/project2" element={<ProjectTwo />} />
            <Route path="/portfolio/project3" element={<ProjectThree />} /> 
            <Route path="/portfolio/project4" element={<ProjectFour />} /> 
            <Route path="/portfolio/grateful" element={<GratefulSection />} />
       
       {/* routes about */}
       <Route path="/about" element={<About />} />
       <Route path="/about/me" element={<AboutMeIntroduction />} />
       <Route path="/about/education" element={<Education />} />
       
       {/* routes blog  3*/}
       
       <Route path="/blog" element={<BlogHome />} />
       <Route path="/blog/winterseason" element={<BlogOne />} />
       <Route path="/blog/QA" element={<BlogQuestionsAboutMe />} />

       {/* routes contact 4 */}
       <Route path="/contactme" element={<ContactMe />} />
       
       
       
       { /*{/* only testing with callApi */}
            <Route path="/call" element={<CallApi />} />
      </Routes>
          
  
 

   
  );
}

export default App;


/* 

*/