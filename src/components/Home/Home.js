import React from 'react';
import BusinessSummary from './BusinessSummary';
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
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;