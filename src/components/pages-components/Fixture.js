import React from 'react'

const Fixture = (props) => {
  const { type, items } = props;
  console.log(type, items);
  return (
    <div className={`fixture-modal-body ${type}`}>
      <div className='fixture-container'>
        <h3 className="fixture-title">{type}</h3>
        <div className="fixture-list">
          {items.map((item, index) => {
            return (
              <div key={index} className="fitting">
                <h6 className="fitting-title">
                  {item.item}
                </h6>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Fixture
