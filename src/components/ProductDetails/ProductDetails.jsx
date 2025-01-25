import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Specification from '../Specification/Specification';
import { IoStar } from 'react-icons/io5';
import { FaCartShopping } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { addToStoredReadList, addToStoredWishList } from '../utility/utility';


const ProductDetails = () => {

    const {id} = useParams()
    const data = useLoaderData()

    const idInt = parseInt(id)

    const product = data.find(product => product.id === idInt);

    const {id: productIdd , image,title,price,availability,description,specification,rating} = product;
    console.log(product)


    const handleAddToCart = (id) => {
        addToStoredReadList(id)
    }

    const handWishList = (id) => {
        addToStoredWishList(id)
    }


    return (
        <div className=''>
       <div className='hero bg-purple-700 rounded-2xl'>
  <div className=" hero-content flex-col lg:flex-row-reverse">
   
   <div>
     <h1 className="text-5xl pt-20 font-bold text-white text-center">Product Details</h1>
     <p className="py-6 text-gray-300 text-center">
     Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
     </p>
     

    
   

     

   </div>
 
 </div>


        
  </div><br />

  <div className=" bg-base-300 ">
  <div className="flex p-4 gap-5 flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl object-fill" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">
       Price: ${price}
      </p>
      <button className="btn btn-outline bg-green-200 rounded-2xl text-green-800">{
        availability === true ? 'In Stock' : 'Out of Stock'
        }</button><br />

    <p>{description}</p>

    {
        specification.map(spec => <Specification spec={spec}></Specification>)
    }

    <h2>Rating</h2>
   
     <div className='flex items-center gap-2'>
     
      <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
        <IoStar></IoStar>
     
      <button className="btn btn-outline">{rating}</button>
     </div>
    
   <div className='flex gap-3 mt-3'>
   <button onClick={() => handleAddToCart(id)} className="btn bg-purple-500">Add to Cart <FaCartShopping></FaCartShopping></button>
   <button onClick={()=> handWishList(id)} className="btn rounded-full"><FaHeart></FaHeart></button>
   </div>

    </div>
  </div>
</div><br />
  
      
     </div>
    );
};

export default ProductDetails;