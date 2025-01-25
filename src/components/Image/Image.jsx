import React from 'react';
import img from '../../assets/banner.jpg'

const Image = () => {
    return (
        <div>
            <div className='relative flex justify-center'>
       
       <img className='mb-20 w-[400px] relative bottom-14 rounded-2xl' src={img} alt="" />
      </div>
        </div>
    );
};

export default Image;