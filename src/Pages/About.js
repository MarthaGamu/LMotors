import React from 'react';
import Gallery from '../Components/Gallery';
import AbtHeroBanner from '../Components/AbtHeroBanner';

import TopSectionAbt from '../Components/TopSectionAbt';
import Video from '../Components/Video';

function About() {
  return (
    <div>
      <AbtHeroBanner />
      <TopSectionAbt />
      <Video />
      <Gallery />
    </div>
  );
}

export default About;
