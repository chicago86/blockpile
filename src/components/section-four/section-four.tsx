import React, { useState } from 'react';
import styles from './section-four.module.scss'

import SimpleSlider from '../slider/slider.jsx'


export const SectionFour: React.FC = () => {

  return <div className={styles.SectionFour}>
    <div className={styles.container}>
      <SimpleSlider></SimpleSlider>
    </div>
  </div>
}
