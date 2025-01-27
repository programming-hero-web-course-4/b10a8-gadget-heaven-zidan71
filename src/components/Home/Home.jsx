import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Image from '../Image/Image';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Gadget Heaven</title>
            </Helmet>

    <Image></Image>
    <Products></Products>        
        </div>
    );
};

export default Home;