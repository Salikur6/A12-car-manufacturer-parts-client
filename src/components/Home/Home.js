import React from 'react';
import CarouselBanner from './CarouselBanner';
import CarParts from './CarParts';
import PartsItems from './PartsItems';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <CarParts></CarParts>
            <PartsItems></PartsItems>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;