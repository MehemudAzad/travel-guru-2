import React from 'react';
import { Link } from 'react-router-dom';

const Hotels = ({hotel}) => {
    const {img, id, description, name} = hotel;
    return (
        <Link to={`/hotels/${id}`}>
          {/* <div>
           <div className=" w-64 h-96  shadow-xl rounded-xl">
            <figure><img className='rounded-xl' src={img} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{name}</h2>          
               
                </div>
            </div>
            </div> */}
            <div className='w-[240px] h-[330px] rounded-xl' style={{ backgroundImage: `url("${img}")`, backgroundSize: `cover` }}>
                <p className='font-semibold text-3xl pt-64 px-6'>{name}</p>
            </div>
        </Link>
       
      
    );
};

export default Hotels;