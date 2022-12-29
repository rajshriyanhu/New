import React from 'react'
import './Experience.css'
import {BsCloudCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills i have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Developement</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>Beginer</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Developement</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>Mongo DB</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCloudCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience