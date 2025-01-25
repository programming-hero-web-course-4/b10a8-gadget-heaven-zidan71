import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
    
    return (
        <div className=''>
            <h1 className='text-center'>Explore more cutting Edge Products:{products.length}</h1><br />

           <div className='flex gap-20'>
           <div className=''>
                <button className="btn">Laptop</button><br /><br />
                <button className="btn">Phone</button><br /><br />
                <button className="btn">Acsessory</button>
            </div>

       <div className='grid grid-cols-1 lg:grid-cols-3 gap-10  md:grid-cols-2'>
       {
            products.map(product => <Product product={product} key={product.id}></Product>)
        }
       </div>
           </div>
<br />
        </div>
    );
};

export default Products;