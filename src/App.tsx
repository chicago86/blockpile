import React from 'react';

import { SectionOne } from './components/section-one/section-one';
import { SectionTwo } from './components/section-two/section-two';
import { SectionThree } from './components/section-three/section-three'
import { SectionFour } from './components/section-four/section-four';
import { SectionFive } from './components/section-five/section-five';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div>
      <Header></Header>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <SectionFive></SectionFive>
      <Footer></Footer>
    </div>
  );
}

export default App;
