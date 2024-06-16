import React from 'react'
import "./works.css"
import workimg from "../../assets/images/callimg.jpg"

const Work = () => {
  return (
    <div className='container-work'>
      <div className='title-container'>
        <span className='title-work'>Overview of Our Work </span>
        <p className='title-1'>We develop custom online shopping applications tailored specifically for you.</p>
        <div className='img-container'>
          <img  src={workimg}
          className='img-1'></img>
          
          <button className='live-demo'>live demo</button>
          <button className='getqoute'>get quote</button>
        </div>
      </div>
  
      <div className='title-container'>
       
        <p className='title-1'>We develop custom online shopping applications tailored specifically for you.</p>
        <div className='img-container'>
          <img  src={workimg}
          className='img-1'></img>
          
          <button className='live-demo'>live demo</button>
          <button className='getqoute'>get quote</button>
        </div>
      </div>

      <div className='title-container'>
       
        <p className='title-1'>We develop custom online shopping applications tailored specifically for you.</p>
        <div className='img-container'>
          <img  src={workimg}
          className='img-1'></img>
          
          <button className='live-demo'>live demo</button>
          <button className='getqoute'>get quote</button>
        </div>
      </div>

      <div className='title-container'>
       
       <p className='title-1'>We develop custom online shopping applications tailored specifically for you.</p>
       <div className='img-container'>
         <img  src={workimg}
         className='img-1'></img>
         
         <button className='live-demo'>live demo</button>
         <button className='getqoute'>get quote</button>
       </div>
     </div>
    </div>
  )
}

export default Work