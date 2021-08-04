import React from 'react'

const Title = (props) => {
  return (
    <div className={`sunday-title ${props.colorClassName}`}>
      <h3>
        {props.firstHalfTitle}
        <br />
        {props.secondHalfTitle}
      </h3>
    </div>
  );
}

export default Title;
