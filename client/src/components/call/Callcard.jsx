import React from "react";
import callcardimg from "../../assets/illustration/callcardimg.jpg";

import whatsappimg from "../../assets/images/whatsapp.png"
import instagramimg from "../../assets/images/instagram.png"
import phoneimg from "../../assets/images/phoneimg.png"
import emailimg from "../../assets/images/gmail.png"
import "./callcard.css";
export const Callcard = () => {
  return (
    <div className="container-main">
      <span className="about-us-contacts">Contact Us</span>

      <img className="callimg" src={callcardimg}></img>

      <h1 className="title-1" id="title">We Create Your Business's Online Presence</h1>
      <p className="title-p">
        we're here to help your business shine with customized website
        solutions. Along with creative growth ideas and strategies, our aim is
        to support your business’s expansion. We’re passionate about helping
        every business thrive online, Join the future of business with Radsys
        and let’s grow together!
      </p>
    <div className="contactlink">

    <img className="icon" id="whatsapp" src={whatsappimg}></img>
       <img className="icon" id="instagram" src={instagramimg}></img>
       <img className="icon" id="phone" src={phoneimg}></img>
       <img className="icon" id="gmail" src={emailimg}></img>
       
    </div>
      
      
    </div>
  );
};
