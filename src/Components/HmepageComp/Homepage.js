import React from 'react'
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
        <h2 className="hero-heading">Welcome to Our Website</h2>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>    

    </div>



    </>
  )
}

export default Homepage
