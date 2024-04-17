import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[url("https://media0.giphy.com/media/xVn3ZmKrKIOLS/giphy.webp?cid=ecf05e47qvqqvzm1b90yeteqiwaxgp128jnkdiag3xbvwvwn&ep=v1_gifs_search&rid=giphy.webp&ct=g")]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-300'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Mohamed Akthar
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a FrontEnd Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          
            As a frontend developer with expertise in crafting outstanding user interfaces, I specialize in constructing responsive web applications that deliver exceptional digital experiences, occasionally incorporating design elements into the process.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>
            <Link to="work">View Work</Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;