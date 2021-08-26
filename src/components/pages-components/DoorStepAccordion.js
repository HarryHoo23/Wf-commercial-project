import React from 'react';
import { Card, Button, Accordion } from 'react-bootstrap';

const DoorStepAccordion = () => {
  return (
    <div className='doorstep-accordion-box right'>
      <div className='dp-container-title'>
        <p>
          A SLOW START, <br /> OR FAST HEART RATE - <br /> IT’S YOUR CHOICE
        </p>
      </div>
      <Accordion defaultActiveKey='0'>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='1'>
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default DoorStepAccordion;
