'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { gallery } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components/CustomTexts';

const Drawing = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState(' ');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (

    <section className={`${styles.paddings}`} id="drawing">
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} />
        <img
          src="/close.svg"
          className="close"
          onClick={() => setModel((prev) => !prev)}
        />
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col my-[200px]`}
      >
        <div
          className={`${styles.flexCenter} flex-wrap my-10 p-5 bg-black-gradient-2 rounded-[10px] `}
        >
          <TypingText title="| My Drawings" textStyles="text-center pb-10" />
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
          >
            <div className="gallery flex-wrap w-full">
              {gallery.map((img) => (
                <div
                  className="pics"
                  key={img.id}
                  onClick={() => getImg(img.imgSrc)}
                >
                  <img src={img.imgSrc} className="mb-5" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Drawing;
