'use client';

import { motion } from 'framer-motion';
import { textContainer, textContainer1, textVariant, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[16px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);
export const TypingTexts = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer1}
    className={`font-bold leading-[70px] xs:text-[25px] text-[19px] text-cyan-400 ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant(3)}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-normal md:text-[30px] text-[22px] text-secondary-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);

