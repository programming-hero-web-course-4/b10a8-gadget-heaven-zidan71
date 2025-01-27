import React from 'react';
import img from '../../assets/banner.jpg'

const Banner = () => {
    return (
     <>
     <div className=' rounded-2xl'>
       <div className='hero'>
  <div className=" hero-content flex-col lg:flex-row-reverse">
   
   <div>
     <h1 className="text-5xl pt-20 font-bold text-white text-center">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
     <p className="py-6 text-gray-300 text-center">
     Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
     </p>
     <div className='flex justify-center'>
      
     <button className="btn btn-primary  rounded-2xl">Shop Now</button>
     </div><br /><br />

    
   

     

   </div>
 
 </div>
  </div>

  
      
     </div>
     </>
    );
};

export default Banner;