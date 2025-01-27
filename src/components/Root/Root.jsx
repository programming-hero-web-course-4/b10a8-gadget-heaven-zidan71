import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Root = () => {

const location = useLocation()

const purple = location.pathname === '/';


    return (

<div className=' max-w-[1550px] mx-auto mt-4'>
<div className={` ${purple ? "bg-purple-700 rounded-2xl" : ""}`}>
            <Navbar />
            {purple && <Banner />} 
        </div>
            <Outlet />
            <Footer />
</div>
    );
};

export default Root;