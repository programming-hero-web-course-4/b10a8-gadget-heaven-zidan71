import React, { useState } from 'react';

const Dashboard = () => {
  
    const [selectedView, setSelectedView] = useState('cart');
    const cartItems = ['Smartphone', 'Laptop', 'Headphones'];
    const wishlistItems = ['Smartwatch', 'Gaming Console', 'Wireless Earbuds'];

    

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
                                className={`btn btn-outline rounded-2xl text-xl font-semiBold w-32 ${
                                    selectedView === 'cart' ? 'btn-primary' : 'text-white'
                                }`}
                                onClick={() => setSelectedView('cart')}
                            >
                                Cart
                            </button>
                            <button
                                className={`btn btn-outline text-xl font-semibold  rounded-2xl ${
                                    selectedView === 'wishlist' ? 'btn-primary' : 'text-white'
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
                    {selectedView === 'cart' ? 'My Cart List' : 'My Wishlist'}
                </h1>
                <ul className="mt-4 list-disc pl-5">
                    {selectedView === 'cart'
                        ? cartItems.map((item, index) => (
                              <li key={index} className="text-gray-700">
                                  {item}
                              </li>
                          ))
                        : wishlistItems.map((item, index) => (
                              <li key={index} className="text-gray-700">
                                  {item}
                              </li>
                          ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
