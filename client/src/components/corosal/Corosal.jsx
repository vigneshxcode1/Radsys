import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./corosal.css"

import Image from "../../assets/illustration/headerimg.jpg"
import { Link } from 'react-router-dom';

function UncontrolledExample() {
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
