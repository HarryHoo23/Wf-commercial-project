import React, {useState} from 'react';

const Fixture = ({ fixture }) => {
  const [isShow, setIsShow] = useState(false);
  const flipFixtureCard = () => {
    if (isShow) setIsShow(false);
  }
  return (
    <div
      className={`fitting ${isShow ? 'flip' : ''}`}
      onClick={flipFixtureCard}
    >
      <h6 className='fitting-title'>{fixture.item}</h6>
      <ul className='fitting-info'>
        <li>{fixture.description}</li>
        <li className={`${fixture.notes ? '' : 'last-li'}`}>{fixture.colour}</li>
        {fixture.notes && <li className='last-li'>{fixture.notes}</li>}
        <button type='button' className='view-img-btn btn' onClick={() => setIsShow(true)}>
          Click to See Image.
        </button>
      </ul>
      <div
        className='fitting-overlay'
        style={{ backgroundImage: `url(${fixture.img})` }}
      ></div>
    </div>
  );
}

export default Fixture;
