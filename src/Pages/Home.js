import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import Welcome from '../Components/Welcome';
import ServiceCard from '../Components/ServiceCard';
import Review from '../Components/Review';

function Home() {
  return (
    <div>
      <HeroBanner />
      <Welcome />
      <ServiceCard />
    </div>
  );
}

export default Home;
