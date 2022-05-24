import React from 'react';
import CarouselBanner from './CarouselBanner';
import CarParts from './CarParts';
import PartsItems from './PartsItems';

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <CarParts></CarParts>
            <PartsItems></PartsItems>
        </div>
    );
};

export default Home;