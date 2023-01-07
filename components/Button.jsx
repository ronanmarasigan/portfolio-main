import React from 'react';

const Button = ({ styles }) => (
  <button type="button" className={` py-2 px-4 rounded-xl bg-cyan-300 font-poppins font-medium text-[18px] text-white outline-none ${styles}  transition ease-in-out delay-150  hover:scale-110 duration-300 w-[150px] `}>
    <a href="/#about">Who Am I?</a>
  </button>
);

export default Button;
