import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {  getStoredCartList, getStoredWishList } from '../utility/utility';
import CartWishList from '../CartWishList/CartWishList';

const Dashboard = () => {

    const [selectedView, setSelectedView] = useState('cart');


    const [cartList, setCartList] = useState([]);
    const [wishlist, setWishList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const allProducts = useLoaderData()



    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));

        // console.log(storedCartList, storedCartListInt, allProducts);

        const cartListFilter = allProducts.filter(product => storedCartListInt.includes(product.id));

        setCartList(cartListFilter)

    }, [])

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));


        const wishListFilter = allProducts.filter(p => storedWishListInt.includes(p.id));

        setWishList(wishListFilter)
    }, []);

    useEffect(() => {
        const total = cartList.reduce((sum, product) => sum + product.price, 0);

        setTotalCost(total)
    }, [cartList]);

    const sortByPrice = () => {
        const sortedList = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedList)
    }

    return (
        <div>
            <div className="hero bg-purple-700 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl pt-10 font-bold text-white text-center">
                            Dashboard
                        </h1>
                        <p className="py-6 text-gray-300 text-center">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                        </p>

                        <div className="flex justify-center gap-5">
                            <button
                                className={`btn btn-outline rounded-2xl text-xl font-semiBold w-32 ${selectedView === 'cart' ? 'btn-primary' : 'text-white'
                                    }`}
                                onClick={() => setSelectedView('cart')}
                            >
                                Cart
                            </button>
                            <button
                                className={`btn btn-outline text-xl font-semibold  rounded-2xl ${selectedView === 'wishlist' ? 'btn-primary' : 'text-white'
                                    }`}
                                onClick={() => setSelectedView('wishlist')}
                            >
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5">
                <h1 className="text-2xl font-bold">
                    {selectedView === 'cart' ? <div className='flex justify-between items-center'>

                        <h1>Cart</h1>

                        <div className='flex gap-28 items-center'>
                            <h1>Total cost: {totalCost.toFixed(2)}$</h1>
                            <div className='flex gap-3'>
                                <button onClick={sortByPrice} className="btn btn-outline">Sort by price</button>

                                <button className="btn btn-accent">Purchase</button>
                            </div>
                        </div>

                    </div> : 'Wishlist'}
                </h1>
                <ul className="mt-4 list-disc pl-5">
                    {selectedView === 'cart'
                        ? cartList.map(product => <CartWishList product={product}></CartWishList>)
                        : wishlist.map(product => <CartWishList product={product}></CartWishList>)}

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
