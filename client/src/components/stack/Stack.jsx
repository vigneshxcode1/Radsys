import React from "react";
import reactimg from "../../assets/images/reactimg.png";
import nodejsimg from "../../assets/images/Node-js.jpg";
import mongodbimg from "../../assets/images/mongodb.jpeg";
import uiuximg from "../../assets/images/uiux.jpg";
import htmlcssimg from "../../assets/images/htmlcssjs.png";
import wordpressimg from "../../assets/images/wordpress.jpeg";
import flutterimg from "../../assets/images/flutter.jpeg";
import "./stack.css"
const myimg = [
  { Number: 1, image: reactimg },
  { Number: 2, image: nodejsimg },
  { Number: 4, image:  mongodbimg },
  { Number: 5, image:  htmlcssimg},
  { Number: 6, image:flutterimg},
  { Number: 7, image: uiuximg },
  { Number: 8, image:  wordpressimg },
];

const Stack = () => {
  return (
    <>
        <h1 className='title-work'>STACK WE USE</h1>
    <div className='container-stack'>
    <div className="img-main">
        {myimg.map((img, index) => (
          <span key={index}>
            <img className="stackimg" src={img.image} alt={`Technology ${img.Number}`} />
          </span>
        ))}
      </div>
      <span className="stackdetail">
        We are using the mentioned technologies to organize our stack into
        front-end, back-end, mobile, and content management segments. We can use
        each technology effectively for your projects.
      </span>
     
    </div>
    </>

  );
};

export default Stack;
