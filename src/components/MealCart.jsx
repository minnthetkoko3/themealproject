import React from 'react';
import {BiSearch} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import "./MealCart.css";

const MealCart = ({name, image, id}) => {
  return (
    <div className='relative parent'>
        <img className=' image h-[300px] object-cover rounded-lg' src={image} alt="" />      
        <Link to={`/detail/${id}`}> 
        <p className= '  icon bg-orange-500 flex align-middle justify-center items-center h-12 w-12 rounded-[100%] absolute top-[43%] left-[42%] '>
           <BiSearch className='text-3xl text-white'/>
        </p>
        </Link>
    </div>
  )
}

export default MealCart;