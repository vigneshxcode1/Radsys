import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './works.css';
import workimg from '../../assets/images/callimg.jpg';
import marian from '../../assets/images/Marian.jpg';
import { Link } from 'react-router-dom';

const Work = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.title-container');

    gsap.fromTo(sections,{opacity:1,x:-200,duration:5,ease:"power1.in"},{ opacity:3 , x:0, duration:2,ease:'power1.in'})

    const fadeInOnScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: 'power1.out',
            stagger: 0.3,
          });
        } else {
          gsap.to(section, {
            opacity: 0,
            y:50, 
            duration: 0.5,
          });
        }
      });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); 


    return () => {
      window.removeEventListener('scroll', fadeInOnScroll);
    };
    
  }, []);

  return (
    <div className='container-work'>
      <div className='title-container'>
        <span className='title-work'>Overview of Our Work</span>
        <h1 className='title-1'>Online Shopping Applications</h1>
        <div className='img-container'>
          <img src={workimg} className='img-1' alt="Shopping App" />
          <Link className='live-demo' to={"https://www.zculture.in/"}>Live Demo</Link>
          <button className='getqoute'>Get Quote</button>
        </div>
      </div>

      <div className='title-container'>
        <h1 className='title-1'>Online Hotel Applications</h1>
        <div className='img-container'>
          <img src={marian} className='img-1' alt="Hotel App" />
          <Link className='live-demo' to={"https://hotelwhiteemount.netlify.app/"}>Live Demo</Link>
          <button className='getqoute'>Get Quote</button>
        </div>
      </div>

      <div className='title-container'>
        <h1 className='title-1'>Online Booking Applications</h1>
        <div className='img-container'>
          <img src={workimg} className='img-1' alt="Booking App" />
          <button className='live-demo'>Live Demo</button>
          <button className='getqoute'>Get Quote</button>
        </div>
      </div>

      <div className='title-container'>
        <h1 className='title-1'>Online Shopping Applications</h1>
        <div className='img-container'>
          <img src={workimg} className='img-1' alt="Shopping App" />
          <button className='live-demo'>Live Demo</button>
          <button className='getqoute'>Get Quote</button>
        </div>
      </div>
    </div>
  );
}

export default Work;
