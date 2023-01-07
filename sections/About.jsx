'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { skills } from '../constants';
import { fadeIn, slideIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components/CustomTexts';

const About = () => (
  <section
    id="about"
    className={`${styles.paddings} relative z-10`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={slideIn('up', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="flex-[0.75] flex flex-col justify-center pt-[200px]"
      >
        <p className="font-semibold text-white text-[24px]">Hi, I’m Ronan Marasigan.</p>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-[8px] font-normal sm:text-[28px] text-[18px] text-justify text-secondary-white"
        >
          A well-organized and well-disciplined person. I’m a Front-end Developer located in Philippines. I have passion for creating and building responsive websites. I enjoy building things on the internet and have an interest on digital arts.
        </motion.p>

        <TypingText title="| My Skills" textStyles="text-center mt-10" />
        <TypingText title="| TECH STACKS" textStyles="text-center" />
        <motion.div
          variants={slideIn('left', 'spring', 0.2, 1)}
          initial="hidden"
          whileInView="show"
        >
          <div className={`${styles.flexCenter} flex-wrap w-full mt-10`}>
            {skills.map((skill) => (
              <div key={skill.name}>
                <img src={skill.url} className=" w-[80px] h-[70px] flex-col object-contain mr-3 my-10 hover:animate-bounce" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.35] flex  flex-col lg:pt-[200px] pt-[50px]"
      >
        <img
          src="/About.png"
          alt="Hero"
          className=" xs:w-[100%] w-[90%] xs:h-[90%] h-[90%] object-contain xs:mt-[10] mt-0"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
