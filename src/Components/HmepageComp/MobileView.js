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

import SouthIcon from '@mui/icons-material/South';

const MobileView = () => {
  return (
    <>
      
    <div className='m-navbar'>
        <div className='m-ComponentDiv1'> Work-Playground </div>
        <div className='m-ComponentDiv2'>
                <a href="https://ak14aman.vercel.app/" style={{color: '#ffff'}}>Who Me? 👀 </a>
            </div>
    </div>


    {/* SUB CONTAINER phone alert */}
    <div className="m-sub-container">

        <div className='m-subimgcentercontainer' style={{paddingTop: '3rem'}}>
      <div className="m-sub-image-container">
            <div>
                <img
                src={phonealert}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   
        </div>   

      <div className="m-sub-content">

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2 className="m-sub-heading" style={{fontSize: '1.4rem'}}>Uh, Sorry mate :(</h2>
        </div>

        <p className="m-sub-description" style={{color: '#0a2751'}}>
        This is a desktop heavy app, it just won't work properly on mobiles. So hop on to your pc and explore it seamlessly :)
        <br/><br/>

        To the section of people who don't give a sh*t (me included): <br/>
        You can always test your phone's limit by switching to desktop view, and if it works perfectly, drop me a text 
        "Fu*k you aman, my so-and-so phone {' >>> '} your dabba phone hahaha".
        <br/>
        <br/>
        But SERIOUSLY, SWITCH TO DESKTOP please ;_;
        <br/>
        Meanwhile go through the introductory homepage.
        </p>
      </div>      


      <div style={{ padding: '35px 15px 20px 15px', display: 'flex', justifyContent: 'center' }}> <SouthIcon/> </div> 

    </div>




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

    </div>


    {/* SUB HEADING */}
    <div className='m-subheading-container'>
        <div className='m-subheading'>So, what all do you get?</div>
    </div>


    {/* SUB CONTAINER Whiteboard */}
    <div className="m-sub-container">   

      <div className="m-sub-content">
        <h2 className="m-sub-heading">1. Interactive Whiteboard</h2>
        <p className="m-sub-description">
          A digital canvas designed for real-time brainstorming and ideation. Engage your team in dynamic discussions, 
          visualize concepts, and capture ideas effortlessly, fostering innovation and driving productivity to new heights.
        </p>
      </div> 

      <div className='m-subimgcentercontainer'>
      <div className="m-sub-image-container">
            <div>
                <img
                src={whiteboard}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   
        </div> 

    </div>


    {/* SUB CONTAINER Workflow */}
    <div className="m-sub-container">   

      <div className="m-sub-content">
        <h2 className="m-sub-heading">2. WorkFlow Builder</h2>
        <p className="m-sub-description">
        Create custom workflows tailored to your specific needs, streamline operations, 
        and ensure consistency and efficiency across your entire organization, all from one intuitive interface.
        </p>
      </div> 

      <div className='m-subimgcentercontainer'>
      <div className="m-sub-image-container">
            <div>
                <img
                src={workflow}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   
        </div> 

    </div>


    {/* SUB CONTAINER teambuilder */}
    <div className="m-sub-container">   

      <div className="m-sub-content">
        <h2 className="m-sub-heading">3. Team Builder</h2>
        <p className="m-sub-description">
        Build and strategically organize your go-to team within the organization, creating a 
        dynamic hierarchy structure for optimizing human resource utilization and productivity.
        </p>
      </div> 

      <div className='m-subimgcentercontainer'>
      <div className="m-sub-image-container">
            <div>
                <img
                src={teambuilder}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   
        </div> 

    </div>


    {/* SUB CONTAINER taskmanagement */}
    <div className="m-sub-container">   

      <div className="m-sub-content">
        <h2 className="m-sub-heading">4. Task Manager</h2>
        <p className="m-sub-description">
        A centralized hub for organizing, prioritizing, and tracking assignments. Stay on top of deadlines,
        monitor progress, and collaborate seamlessly with team members, amplifying performance.
        </p>
      </div> 

      <div className='m-subimgcentercontainer'>
      <div className="m-sub-image-container">
            <div>
                <img
                src={taskmanagement}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   
        </div> 

    </div>


    {/* SUB CONTAINER calendar */}
    <div className="m-sub-container">   

      <div className="m-sub-content">
        <h2 className="m-sub-heading">5. Event Calendar</h2>
        <p className="m-sub-description">
        Stay organized and informed with our Event Calendar, your go-to tool for managing important 
        dates and events. Plan meetings, schedule deadlines, and coordinate team activities effortlessly.
        </p>
      </div> 

      <div className='m-subimgcentercontainer'>
      <div className="m-sub-image-container">
            <div>
                <img
                src={calendar}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   
        </div> 

    </div>


    {/* SUB CONTAINER todolist */}
    <div className="m-sub-container">   

      <div className="m-sub-content">
        <h2 className="m-sub-heading">6. Multi To-Do-Lists</h2>
        <p className="m-sub-description">
        Stay focused and productive with our Multi To-Do-Lists feature, and track progress with ease, 
        enabling you to stay organized, motivated, and on track to achieve your goals.
        </p>
      </div> 

      <div className='m-subimgcentercontainer'>
      <div className="m-sub-image-container">
            <div>
                <img
                src={todolist}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   
        </div> 

    </div>


    {/* SUB HEADING */}
    <div className='m-subheading-container'>
        <div className='m-subheading' style={{fontSize: '1.1rem', marginLeft: '8px'}}>Alright, you're good to go, have a good time exploring the platform :)</div>
    </div>



    {/* FOOTER */}
    <div className="m-footer-container"> 

    <div className='m-footer-content'>   
         
         <div style={{ padding: '0.5rem 1rem 0.25rem 1rem', }}> Great that you actually took the time and went through my project, <br/> I'm really glad. Thank you. 
         </div>
         
        <div style={{ padding: '0rem 1rem 1rem 1rem', }}> 
        <span style={{color: '#ccff01', }}>Feature under work:</span> Customizing end-to-end usage for specific users/organizations along with authentication and progress saving.
         </div>
         

         <div className='m-foot-end'>Copyright ©️ {dayjs().format('YYYY')} Developed in a hurry by&nbsp;  
         <a className='m-userhandle' href="https://ak14aman.vercel.app/">@ak14aman</a>  
        </div>
        <div className='m-foot-end'>All Rights Reserved.</div>
    </div>

    </div>


    </>
  )
}

export default MobileView
