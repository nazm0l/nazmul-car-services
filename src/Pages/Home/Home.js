import React from 'react';
import Services from '../Services/Services';
import Brands from './Brands/Brands';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Brands></Brands>
        </div>
    );
};

export default Home;