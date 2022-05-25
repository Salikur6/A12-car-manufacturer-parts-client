import React from 'react';
import BusinessSummary from './BusinessSummary';
import CarouselBanner from './CarouselBanner';
import CarParts from './CarParts';
import Newsletter from './Newsletter';
import PartsItems from './PartsItems';
import Reviews from './Reviews';
import SecondBanner from './secondBanner'

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <CarParts></CarParts>
            <PartsItems></PartsItems>
            <SecondBanner></SecondBanner>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;