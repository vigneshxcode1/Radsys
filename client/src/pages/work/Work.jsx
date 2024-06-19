import React from 'react'
import "./works.css"
import workimg from "../../assets/images/callimg.jpg"



const Work = () => {
  return (
    <div className='container-work'>
      <div className='title-container'>
        <span className='title-work'>Overview of Our Work </span>
        
        <h1 className='title-1'> online shopping applications.</h1>
        <div className='img-container'>
          <img  src={workimg}
          className='img-1'></img>
          
          <button className='live-demo'>live demo</button>
          <button className='getqoute'>get quote</button>
        </div>
      </div>
  
      <div className='title-container'>
       
      <h1 className='title-1'> online shopping applications.</h1>
        <div className='img-container'>
          <img  src={workimg}
          className='img-1'></img>
          
          <button className='live-demo'>live demo</button>
          <button className='getqoute'>get quote</button>
        </div>
      </div>

      <div className='title-container'>
       
      <h1 className='title-1'> online shopping applications.</h1>
        <div className='img-container'>
          <img  src={workimg}
          className='img-1'></img>
          
          <button className='live-demo'>live demo</button>
          <button className='getqoute'>get quote</button>
        </div>
      </div>

      <div className='title-container'>
       
      <h1 className='title-1'> online shopping applications.</h1>
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