import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './header & footer/Navbar';

const SectionWrapper = (props) => {
  return (
    <>
      <section className={props.class} id={props.idName}>
        {props.children}
      </section>
    </>
  )
}

export default SectionWrapper;
