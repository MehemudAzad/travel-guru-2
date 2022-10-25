import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Link, useLoaderData } from 'react-router-dom';

const HotelDetail = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    // const [selectedDate, setSelectedDate] = useState(null);

    const hotel = useLoaderData();
    console.log(hotel);
    const {id, description, name, img} = hotel;
    return (
        <div className='grid grid-cols-2 gap-12 p-20' style={{ backgroundImage: `url("${img}")`, height:`100vh`, backgroundSize:`cover`}}>
           <div>
                <h1 className='text-6xl font-bold text-white mt-28 mb-10'>{name}</h1>
                <p className='text-gray-100 '>{description}</p>
           </div>
           <div>
                <form className='border-2 bg-white w-[500px] p-6 rounded-md mt-28'>
                    <label className='text-gray-500'>Origin</label>
                    <p className='bg-base-200 p-3 rounded-md font-bold my-2'>Dhaka</p>
                    <label className='text-gray-500'>Destination</label>
                    <p className='bg-base-200  p-3 rounded-md font-bold my-2'>{name}</p>
                    <div className='flex justify-between my-8'>
                        <div >
                            <label className='text-gray-500' htmlFor="">From: </label>
                            <DatePicker 
                            selected={selectedDate} 
                            onChange={date =>setSelectedDate(date)} ></DatePicker>
                        </div>
                        <div>
                            <label className='text-gray-500' htmlFor=""> To: </label>
                            <DatePicker></DatePicker>
                        </div>
                    </div>
                    <Link to='/login'><button className='bg-yellow-400 rounded-xl w-full py-3'>Start Booking</button></Link>
                </form>
           </div>
        </div>
      
       
    );
};

export default HotelDetail;

// style={{ backgroundImage: `url("${img}")` }}