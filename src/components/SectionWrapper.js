import React from 'react';

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
