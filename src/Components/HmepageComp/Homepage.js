import React from 'react'
import dayjs from 'dayjs';
import './HomeStyles.css'
import playgroundimg from '../ImgAssets/playground.png'
import calendar from '../ImgAssets/calendar.png'
import phonealert from '../ImgAssets/phonealert.png'
import taskmanagement from '../ImgAssets/taskmanagement.png'
import teambuilder from '../ImgAssets/teambuilder.png'
import todolist from '../ImgAssets/todolist.png'
import whiteboard from '../ImgAssets/whiteboard.png'
import workflow from '../ImgAssets/workflow.png'


const Homepage = () => {
  return (
    <>
    {/* <div className="about-container">
      <div className="photo-container">
        <img src={playgroundimg} alt="Your Photo" className="photo" />
      </div>
      
      <div className="content-container">
        <h1 className="heading">About Us</h1>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at ex nisi.</p>
        <p className="text">Fusce vel nisl sed magna condimentum faucibus eget vel est.</p>
        <p className="text">Vivamus euismod nisi ut lacus eleifend, sed tincidunt mi suscipit.</p>
      </div>
    </div> */}


    {/* HERO CONTAINER */}

    <div className="component-container">
      
      <div className="hero-content">
        <h2 className="hero-heading">Hey there! Welcome to
        <div style={{ color: '#613dc1'}}>WORK-PLAYGROUND.</div> 
        </h2>
        <p className="hero-description">
        ➤ Your one stop solution for planning, organizing, and managing every aspect of your team's operations. <br/>
        ➤ From streamlined project management to efficient resource allocation, this platform offers a single destination for all your organizational needs.
        </p>
      </div>

      <div className="hero-image-container">
        <div>
            <img
            src={playgroundimg}
            alt="Your Image"
            className="image"
            />
        </div>
      </div>

    </div>


    {/* SUB HEADING */}
    <div className='subheading-container'>
        <div className='subheading'>So, what all do you get?</div>
    </div>


    {/* SUB CONTAINER Whiteboard */}
    <div className="sub-container">   

        <div className="sub-image-container">
            <div>
                <img
                src={whiteboard}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   

      <div className="sub-content">
        <h2 className="sub-heading">1. Interactive Whiteboard</h2>
        <p className="sub-description">
          A digital canvas designed for real-time brainstorming and ideation. Engage your team in dynamic discussions, 
          visualize concepts, and capture ideas effortlessly, fostering innovation and driving productivity to new heights.
        </p>
      </div>    

    </div>

    {/* SUB CONTAINER Workflow */}
    <div className="sub-container">   

        <div className="sub-image-container">
            <div>
                <img
                src={workflow}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   

      <div className="sub-content">
        <h2 className="sub-heading">2. WorkFlow Builder</h2>
        <p className="sub-description">
        Create custom workflows tailored to your specific needs, streamline operations, 
        and ensure consistency and efficiency across your entire organization, all from one intuitive interface.
        </p>
      </div>    

    </div>

    {/* SUB CONTAINER teambuilder */}
    <div className="sub-container">   

        <div className="sub-image-container">
            <div>
                <img
                src={teambuilder}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   

      <div className="sub-content">
        <h2 className="sub-heading">3. Team Builder</h2>
        <p className="sub-description">
            Build and strategically organize your go-to team within the organization, creating a 
            dynamic hierarchy structure for optimizing human resource utilization and productivity.
        </p>
      </div>    

    </div>

    {/* SUB CONTAINER taskmanagement */}
    <div className="sub-container">   

        <div className="sub-image-container">
            <div>
                <img
                src={taskmanagement}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   

      <div className="sub-content">
        <h2 className="sub-heading">4. Task Manager</h2>
        <p className="sub-description">
            A centralized hub for organizing, prioritizing, and tracking assignments. Stay on top of deadlines,
            monitor progress, and collaborate seamlessly with team members, amplifying performance.
        </p>
      </div>    

    </div>

    {/* SUB CONTAINER calendar */}
    <div className="sub-container">   

        <div className="sub-image-container">
            <div>
                <img
                src={calendar}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   

      <div className="sub-content">
        <h2 className="sub-heading">5. Event Calendar</h2>
        <p className="sub-description">
        Stay organized and informed with our Event Calendar, your go-to tool for managing important 
        dates and events. Plan meetings, schedule deadlines, and coordinate team activities effortlessly.
        </p>
      </div>    

    </div>

    {/* SUB CONTAINER todolist */}
    <div className="sub-container">   

        <div className="sub-image-container">
            <div>
                <img
                src={todolist}
                alt="Your Image"
                className="image"
                />
            </div>
        </div>   

      <div className="sub-content">
        <h2 className="sub-heading">6. Multi To-Do-Lists</h2>
        <p className="sub-description">
            Stay focused and productive with our Multi To-Do-Lists feature, and track progress with ease, 
            enabling you to stay organized, motivated, and on track to achieve your goals.
        </p>
      </div>    

    </div>



    {/* SUB HEADING */}
    <div className='subheading-container'>
        <div className='subheading' style={{fontSize: '32px'}}>Alright, you're good to go, have a good time exploring the platform :)</div>
    </div>



    {/* FOOTER */}
    <div className="footer-container"> 

    <div className='footer-content'>   
         
         <div style={{ padding: '0.5rem 2rem 0rem 2rem', display: 'flex', justifyContent: 'center' }}> Great that you actually took the time and went through my project, I'm really glad. Thank you.
         </div>
        <div style={{ padding: '0rem 2rem 2rem 2rem',  }}> <span style={{color: '#ccff01', }}>Feature under work:</span> Customizing end-to-end usage for specific users/organizations along with authentication and progress saving.
         </div>
         

         <div className='foot-end'>Copyright ©️ {dayjs().format('YYYY')} Developed in a hurry by &nbsp;  
         <a className='userhandle' href="https://ak14aman.vercel.app/">@ak14aman</a>  
        </div>
        <div className='foot-end'>All Rights Reserved.</div>
    </div>

    </div>



    </>
  )
}

export default Homepage
