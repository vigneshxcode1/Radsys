import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import "./corosal.css"
import Image from "../../assets/illustration/headerimg.jpg"
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function UncontrolledExample() {
  const corol = useRef(null);

  useEffect(()=>{
    gsap.fromTo("#corol", 
    { x: 500, opacity: 1 },  // Start from -200px on the x-axis and invisible
    { 
        x: 0,             
        opacity: 1,         
        duration: 2,       
        ease: "power1.out", 
       
    }
);
  },[])
  return (

    <Carousel>
      <Carousel.Item>
        <img
        id='corol'
          className="d-block w-100 "
          src={Image} 
          alt="First slide"
        />
        
        <Carousel.Caption>
  
          {/* <h3 className='title-header'>Innovative Web Solutions for Your Business</h3> */}
         
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;
