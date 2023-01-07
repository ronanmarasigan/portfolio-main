'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { contactFeatures } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components/CustomTexts';

const Contact = () => (
  <section
    id="contact"
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
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter} `}
      >
        <img
          src="/Capture.png"
          alt="contact"
          className="xs:w-[100%] w-[60%] xs:h-[60%] h-[90%] object-contain md:mt-0 mt-5"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Contact Me" />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {contactFeatures.map((skill) => (
            <div key={skill.name} className="flex">
              <img src={skill.url} className={`${styles.flexCenter} p-5 rounded-[24px] bg-[#323f5d]`} />
              <span className="pl-8 pt-4 text-white font-normal sm:text-[18px] text-[12px]">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Contact;
