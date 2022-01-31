import React from 'react';
import Banner from './Banner/Banner';
import InfoCard from './InfoCard/InfoCard';
import Navigation from './Navigation/Navigation';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <InfoCard></InfoCard>
        </div>
    );
};

export default Home;