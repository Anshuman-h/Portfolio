import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.jpeg'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I have Achieved</h5>
      <h2>Education</h2>
      <div className="container services__container">
      <article className="service">
        
        <div className="service__head">
          
          <h3>Graduation</h3>
          
        </div>
        <ul className='service__list'>
        <img className='service__list-image' src={AVTR1} alt="" />
        <li>
          <BiCheck className='service__list-icon'/>
          <p>B.Tech Graduate in Computer Science and Engineering(2023)</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>KIET GROUP OF INSTITUTIONS</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Scored a CGPA of 8.72 </p>
        </li>

        {/* <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </li> */}

        {/* <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </li> */}
        </ul>
      </article>
          {/* END OF UI/UX */}
          <article className="service">
             <div className="service__head">
               <h3>Intermediate</h3>
             </div>
             <ul className='service__list'>
             <img className='service__list-image' src={AVTR2} alt="" />
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Completed in 2018 (PCM)</p>
                 </li>
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Harihar singh Academy<br/> Varanasi , Uttar Pradesh</p>
                 </li>
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Scored an Aggregate Percentage of 79.2%</p>
                 </li>
                 
             </ul>
          </article>
          {/* END OF WEB DEVELOPMENT */}
          <article className="service">
             <div className="service__head">
               <h3>High School</h3>
             </div>
             <ul className='service__list'>
             <img className='service__list-image' src={AVTR3} alt="" />
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Completed in 2016</p>
                 </li>
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Tulsi Vidya Niketan<br/> Varanasi , Uttar Pradesh</p>
                 </li>
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Scored 89.3%</p>
                 </li>
                 
             </ul>
          </article>
          {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
