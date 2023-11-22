import React from 'react';
import styles from './section-five.module.scss'
import pict1 from './images/work1.jpg'
import pict2 from './images/work2.jpg'
import pict3 from './images/blog1.jpg'
import pict4 from './images/blog2.jpg'
import pict5 from './images/birdBlog3/birdLeft.jpg'
import pict6 from './images/birdBlog3/birdRight.jpg'
import { ContentWeb3 } from '../content-web3/content-web3';

export const SectionFive: React.FC = () => {

  return <div className={styles.sectionFive}>
    <div className={styles.boxFiveOne}></div>
    <div className={styles.boxFiveTwo}></div>
    <div className={styles.fiveContent}>
      <div className={styles.container}>
        <div className={styles.boxContentOne}>
          <div className={styles.heading}>
            <h3 className={styles.heading3}>Featured Work</h3>
            <h3 className={styles.heading3}>View all <span></span></h3>
          </div>
          <div className={styles.rowFive}>
            <div className={styles.collFive2}>
              <div className={styles.fiveImg}>
                <img src={pict1} alt="" />
              </div>
              <h3 className={styles.heading3}>DEFI</h3>
              <h2 className={styles.heading2}>AirSwap</h2>
              <p>Short descriptor here that can be one or two lines to give some insight before the jump.</p>
            </div>

            <div className={styles.collFive2}>
              <div className={styles.fiveImg}>
                <img src={pict2} alt="" />
              </div>
              <h3 className={styles.heading3}>NFT</h3>
              <h2 className={styles.heading2}>BirdBlotter</h2>
              <p>Short descriptor here that can be one or two lines to give some insight before the jump.</p>
            </div>

          </div>
        </div>
        
        <div className={styles.hr}></div>
      </div>



      <div className={styles.boxContenttwo}>
        <div className={styles.heading}>
          <h3 className={styles.heading3}>From the blog</h3>
        </div>
        <div className={styles.rowContenttwo}>
          <div className={styles.collFive3}>
            <div className={styles.fiveImgBlog}>
              <img src={pict3} alt="" />
              <h4 className={styles.heading4}>Smart Contract 101</h4>
            </div>
          </div>

          <div className={styles.collFive3}>
            <div className={styles.fiveImgBlog}>
              <img src={pict4} alt="" />
              <h4 className={styles.heading4}>Check out the latest launch</h4>
            </div>
          </div>

          <div className={styles.collFive3}>
            <div className={styles.fiveImgBlog}>
              <div className={styles.bird}>
                <div className={styles.imgPos}>
                  <img src={pict5} alt="" />
                  <img src={pict6} alt="" />
                </div>
              </div>
              <h4 className={styles.heading4}>Artist profile: SmokeStacks</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.boxContentThree}>
        <ContentWeb3></ContentWeb3>
      </div>

    </div>
  </div>
}
