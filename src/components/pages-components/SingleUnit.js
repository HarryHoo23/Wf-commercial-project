import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { sitePlanData } from '../../data/Content';
import { useEffect } from 'react';

const SingleUnit = () => {
  const { id } = useParams();
  const [unitData, setUnitData] = useState(sitePlanData[0]);
  let history = useHistory();

  useEffect(() => {
    if (id) {
      const unit = sitePlanData.find((element) => element.unit_id === id);
      setUnitData(unit);
    } else {
      const unit = sitePlanData.find(
        (element) => element.unit_id === 'unit-01'
      );
      setUnitData(unit);
    }
  }, []);
  return (
    <article className={`${id ? 'unit-wrapper' : ''}`}>
      <Row>
        <Col md={5}>
          <h4 className='unit-title'>{unitData.unit_number}</h4>
          <p className='unit-info'>
            <span>Price:</span> {unitData.unit_price}
          </p>
          <p className='unit-info'>
            <span>Office:</span> {unitData.mezzanine_level}
          </p>
          <p className='unit-info'>
            <span>Warehouse:</span> {unitData.ground_level}
          </p>
          <p className='unit-info'>
            <span>Total:</span> {unitData.total_area}
          </p>
          <p className='unit-info'>
            <span>Car Spaces:</span> {unitData.allocated_car_spaces}
          </p>
        </Col>
        <Col md={7}>
          {id && ( <button className='btn btn-primary' type='button' onClick={() => history.goBack()}>Go Back</button>
          )}
        </Col>
      </Row>
    </article>
  );
};

export default SingleUnit;
