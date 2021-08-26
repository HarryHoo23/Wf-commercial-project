import React, { useState } from 'react';
import Fixture from './Fixture';

const FixtureList = (props) => {
  const { type, items } = props;
  return (
    <div className={`fixture-modal-body ${type}`}>
      <div className='fixture-container'>
        <h3 className='fixture-title'>{type}</h3>
        <div className='fixture-list'>
          {items.map((fixture, index) => {
            return <Fixture fixture={fixture} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FixtureList;
