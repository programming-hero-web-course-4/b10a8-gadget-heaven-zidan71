import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('All')

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const filteredProducts = filter === 'All' ? products : products.filter(product => product.category === filter)

    return (
        <div className=''>
            <h1 className='text-center font-bold text-3xl text-white'>Explore more cutting Edge Products</h1><br />

            <div className='flex gap-20'>
                <div>
                    <button className="btn" onClick={() => setFilter('Laptop')}>Laptop</button><br /><br />
                    <button className="btn" onClick={() => setFilter('Phone')}>Phone</button><br /><br />
                    <button className="btn" onClick={() => setFilter('Accessory')}>Accessory</button><br /><br />
                    <button className="btn" onClick={() => setFilter('All')}>All Products</button>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10  md:grid-cols-2'>
                    {
                        filteredProducts.length === 0 ? (
                            <p className='text-center'>No products found for this Category</p>
                        ) : (
                            filteredProducts.map(product => <Product product={product}></Product>)
                        )
                    }
                </div>
            </div>
            <br />
        </div>
    );
};

export default Products;