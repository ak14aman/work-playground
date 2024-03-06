import React from 'react'
import './HomeStyles.css'
import playgroundimg from '../ImgAssets/playground.png'

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



    </>
  )
}

export default Homepage
