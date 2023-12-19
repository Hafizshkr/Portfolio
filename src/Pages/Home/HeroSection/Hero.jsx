import React from "react";
import './Hero.css'
import {TypeAnimation} from 'react-type-animation'


const Hero = () => {
  return (
    <>

      <div className="Hero-container">
        <h1>Hi I'm Hafiz, i want to be a <br/><TypeAnimation
      sequence={[
        'Web Developer', // Types 'One'
        1000, // Waits 1s
        'Frontend Dev', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Backend Dev', 
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      
    /></h1>
      </div>
    </>
  );
};



export default Hero;
