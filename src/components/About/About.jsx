import React from 'react'
import './About.css'
import me from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={me} alt=''/>
            </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>

              <article className='about__card'>
                <FaAward className='about__icon'></FaAward>
                <h5>Experience</h5>
                <small>working</small>
              </article>

              <article className='about__card'>
                <FaAward className='about__icon'></FaAward>
                <h5>Experience</h5>
                <small>working</small>
              </article>

              <article className='about__card'>
                <FaAward className='about__icon'></FaAward>
                <h5>Experience</h5>
                <small>working</small>
              </article>

            </div>
            <p>
              lorem
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About