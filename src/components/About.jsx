import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Akthar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm enthusiastic about crafting impactful software that enhances the experiences of those in my community. My focus is on developing software solutions for various clients, from individuals and small businesses to large enterprises. Imagine having a dedicated software expert at your fingertips – that's the level of commitment and passion I bring as a budding frontend developer.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;