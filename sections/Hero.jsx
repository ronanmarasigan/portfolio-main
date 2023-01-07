'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, Button } from '../components';
import { fadeIn, staggerContainer, slideIn } from '../utils/motion';
import { TypingTexts } from '../components/CustomTexts';
import { socials } from '../constants';

const Hero = () => (
  <section
    id="hero"
    className={`${styles.paddings} relative z-0`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter} `}
      >
        <img
          src="/Hero.png"
          alt="Hero"
          className="md:w-[70%] w-[50%] md:h-[70%] h-[50%] object-contain md:mt-0 mt-5"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex flex-col md:pt-[250px] pt-[100px] lg:items-start xs:items-center"
      >
        <p className="font-semibold text-secondary-white xs:text-[24px] text-[18px]">| Hi, I'm Ronan Marasigan</p>
        <TypingTexts title="| A Front-End Developer" />
        <TitleText title={<>I build and code websites, and I enjoy what I do</>} />
        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
          <Button styles="mt-10" />
        </motion.div>
      </motion.div>
    </motion.div>

    <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      initial="hidden"
      whileInView="show"
      className="top-2 absolute"
    >
      {socials.map((social) => (
        <img onClick={() => window.open(`${social.link}`)} key={social.id} src={social.url} className="p-5 hover:animate-spin" />
      ))}
    </motion.div>
  </section>
);

export default Hero;
