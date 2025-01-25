import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { id,image,title,price } = product

    return (
        <div className="card border-2 border-gray-600  w-96 shadow-xl">

           

            <figure className=''>
                <img className='w-full h-52  object-cover  rounded-2xl p-3'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="p-4">
                <h2 className="text-white font-bold text-xl text-center">{title}</h2><br />
                <p className='text-center'>Price: ${price}</p><br />
                <div className="card-actions justify-center">
                   <Link to={`/products/${id}`}> <button className="btn btn-primary">Details</button></Link>
                </div>
            </div><br />
        </div>
    );
};

export default Product;