import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import Welcome from '../Components/Welcome';
import Services from '../Components/Services';
import Review from '../Components/Review';

function Home() {
  return (
    <div>
      <HeroBanner />
      <Welcome />
      <Services />
      <Review />
    </div>
  );
}

export default Home;
