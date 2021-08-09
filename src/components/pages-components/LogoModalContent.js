import React from 'react';
import { Row, Col } from 'react-bootstrap';


const LogoModalContent = (props) => {
  return (
    <div className='modal-logo-container'>
      <div
        className='modal-logo-div'
        style={{ backgroundImage: `url(${props.bgImg})` }}
      ></div>
      <Row>
        <Col md={4}>
          <div className='title-box'>
            <span className='title'>{props.title}</span>
            <br />
            <a href={props.href} target='_blank' rel="noreferrer">
              {props.link}{' '}
            </a>
          </div>
        </Col>
      </Row>
      <Row className='logo-row-modal'>
        <Col md={4}>
          <div className='logo-content mb-3'>
            <p>{props.content}</p>
            <p className='quote'>{props.quote}</p>
          </div>
        </Col>
        <Col md={8}>
          <video
            width='100%'
            controls=''
            preload='auto'
            id='jesse-video'
            poster='./assets/img/dko-thumb.jpg'
          >
            <source src={props.videoSource} />
          </video>
          <p className='video-title text-right'>
            <strong style={{ fontWeight: '600' }}>{props.name}</strong>
            <br />
            {props.jobTitle}
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default LogoModalContent
