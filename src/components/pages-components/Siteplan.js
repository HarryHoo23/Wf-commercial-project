import React from 'react';
import UnitDropdown from './UnitDropdown';
import { Row, Col } from 'react-bootstrap';
import SitePlanImg from '../../assests/img/slider-1.jpg';
import { sitePlanData } from '../../data/Content';
import { useGlobalContext } from '../../contexts/GlobalContext';

const Siteplan = () => {
  const { onClickScrollDown } = useGlobalContext();
  return (
    <Row>
      <Col md={4}>
        <UnitDropdown />
        <div className="siteplan_Info">
          <p>Ground Level: {sitePlanData[0].ground_level}</p>
          <p>Mezzainne: {sitePlanData[0].mezzanine_level}</p>
          <p>Total: {sitePlanData[0].total_area}</p>
          <p>Allocated Car Spaces: {sitePlanData[0].allocated_car_spaces}</p>
        </div>
        <button className="btn" type='button' onClick={onClickScrollDown}>View Unit || Specs</button>
      </Col>
      <Col md={8}>
        <img className="siteplan-img" src={SitePlanImg} alt='Siteplan Image' />
      </Col>
    </Row>
  );
};

export default Siteplan;
