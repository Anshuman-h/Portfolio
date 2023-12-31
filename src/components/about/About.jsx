import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
import{SiLeetcode} from 'react-icons/si'
import{SiGeeksforgeeks} from 'react-icons/si'
import{VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2> About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
            <div className="about__me-image">
              <img src={ME} alt="About image" />
            </div>
         </div>

         <div className="about__content">
             <div className="about__cards">
                <a href="https://leetcode.com/anshumanshukla21/" target='_blank'>
                 <article className="about__card">
                    <SiLeetcode className='about__icon'/>
                    <h5>LeetCode</h5>
                    <small>400+ solved</small> 
                 </article>
                 </a>

                 <a href="https://auth.geeksforgeeks.org/user/anshumanshukla21" target='_blank'>
                 <article className="about__card">
                    <SiGeeksforgeeks className='about__icon'/>
                    <h5>GeeksForGeeks</h5>
                    <small>100+ solved </small> 
                 </article>
                 </a>

                 <a href="#portfolio">
                 <article className="about__card">
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projects</h5>
                    <small>10+ Completed </small> 
                 </article>
                 </a>

                 
             </div>
             <p >
             {/* 30 words */}
             I am B.Tech graduate in Computer Science and Engineering from KIET GROUP OF INSTITUTIONS,Ghaziabad.
             I love problem solving and have good knowledge of Data Structures and Algorithms.
             I am proficient in C++ programming language and interested in front-end technologies
             ,knowledgeable with HTML,CSS,JS,Bootstrap and React. 
             <br></br> <br></br>
              I am open to talk regarding internships or full-time opportunities.
             </p>
             <a href="#contact" className="btn btn-primary">Let's Talk </a>
         </div>
      </div>
    </section>
  )
}

export default About
