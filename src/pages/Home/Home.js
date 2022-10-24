import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const hotels = useLoaderData();
    console.log(hotels)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            
           
          </div>
        </div>
      </div>
    );
};

export default Home;