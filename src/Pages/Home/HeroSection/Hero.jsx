import React from "react";
import './Hero.css'
import {TypeAnimation} from 'react-type-animation'


const Hero = () => {
  return (
    <>

      <div className="flex justify-center align-center h-[600px] !text-sm !lg:text-xs !md:text-xs xl:h-[500px] lg:h-[600px]  sm:h-[300px] md:h-[600px] ">
        <h1 className=" ">Hi I'm Hafiz, i want to be a <br/><TypeAnimation
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
