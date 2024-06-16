import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./corosal.css"

import Image from "../../assets/images/img3.jpg"
import Image2 from "../../assets/images/img2.jpg"
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
  
          <h3 className='title-1'>Innovative Web Solutions for Your Business</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id='corol'
          className="d-block w-100"
          src={Image}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3 className='title-1'>Custom Web Development Tailored to Your Needs</h3>
        
        

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id='corol'
          className="d-block w-100"
          src={Image2} 
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3 className='title-1'>Crafting High-Performance Web Experiences</h3>
       

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
