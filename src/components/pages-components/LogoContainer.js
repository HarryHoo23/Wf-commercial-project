import React from 'react';

const LogoContainer = (props) => {
  return (
    <>
        <div
          className='partners-logo-container'
          style={{ backgroundImage: `url(${props.bgImg})` }}
        ></div>
    </>
  );
}

export default LogoContainer
