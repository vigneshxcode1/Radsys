import React from "react";
import './about.css'; 
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="containers">
      <div className="main">
        <Link className="about-us"  to={"/about"}>About Us</Link>
        <h2 className="title-2">Web Development for Business Service</h2>
        <p className="description">
          At our company, we specialize in delivering top-notch web development services tailored to elevate your business. Our expert team is dedicated to creating custom websites that not only look great but also perform seamlessly. Here's what we offer:
        </p>
        {/* <ul className="features">
          <li>Responsive Design: Ensuring your website looks and functions perfectly on all devices.</li>
          <li>SEO Optimization: Enhancing your online presence to attract more visitors and drive traffic.</li>
          <li>E-commerce Solutions: Developing secure and efficient online stores to boost your sales.</li>
          <li>Content Management Systems: Providing easy-to-use platforms for updating your website content.</li>
          <li>Custom Web Applications: Building tailored solutions to meet your unique business needs.</li>
        </ul> */}

        <Link className="service-button-1"to={"/work"}>Explores Our Services</Link>
      </div>
    </div>
  );
};

export default About;
