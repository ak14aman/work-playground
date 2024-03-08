import React from 'react'
import './MobileStyles.css'
import dayjs from 'dayjs';

import playgroundimg from '../ImgAssets/playground.png'
import calendar from '../ImgAssets/calendar.png'
import phonealert from '../ImgAssets/phonealert.png'
import taskmanagement from '../ImgAssets/taskmanagement.png'
import teambuilder from '../ImgAssets/teambuilder.png'
import todolist from '../ImgAssets/todolist.png'
import whiteboard from '../ImgAssets/whiteboard.png'
import workflow from '../ImgAssets/workflow.png'

const MobileView = () => {
  return (
    <>
      
    {/* <div className='m-navbar'>
        <div className='m-ComponentDiv1'> Work-Playground </div>
        <div className='m-ComponentDiv2'>
                <a href="https://ak14aman.vercel.app/" style={{color: '#ffff'}}>Who Me? 👀 </a>
            </div>
    </div> */}

      {/* HERO CONTAINER */}

    <div className="m-component-container">
      
      <div className="m-hero-content">
        <div className='m-hero-contenthead'>
        <h2 className="m-hero-heading">Hey there! Welcome to
        <div style={{ color: '#613dc1'}}>WORK-PLAYGROUND.</div> 
        </h2>

        <div className="m-hero-image-container">
            <div>
                <img
                src={playgroundimg}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>
        
        </div>


        <p className="m-hero-description">
        ➤ Your one stop solution for planning, organizing, and managing every aspect of your team's operations. <br/>
        ➤ From streamlined project management to efficient resource allocation, this platform offers a single destination for all your organizational needs.
        </p>
      </div>

      {/* <div className="m-hero-image-container">
        <div>
            <img
            src={playgroundimg}
            alt="Your Image"
            className="image"
            />
        </div>
      </div> */}

    </div>


    </>
  )
}

export default MobileView
