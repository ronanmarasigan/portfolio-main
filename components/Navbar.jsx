'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 " />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/favicon.png"
          alt="favicon"
          className=" w-[35px] h-[35px] object-contain "
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          Ronan Marasigan
        </h2>
        <img src="/menu.svg" className="w-[24px] h-[24px] object-contain" onClick={() => setToggle((prev) => !prev)} />
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-[12%]  mx-4 my-2 min-w[140px] rounded-xl z-10`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-normal cursor-pointer text-[16px] text-cyan-400 
              ${index === navLinks - 1 ? 'mr-0' : 'mb-4'}`}
            >
              <a href={`/#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
