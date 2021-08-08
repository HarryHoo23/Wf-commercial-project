import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import SectionWrapper from './SectionWrapper';
import { hrefLinks } from '../data/Menu';
import { tabContent } from '../data/Content';
import { useState } from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import { useGlobalContext } from '../contexts/GlobalContext';
import Navbar from './header & footer/Navbar';
import TopNavbar from './header & footer/TopNavbar';
import Title from './pages-components/Title';
import { svgImagePath } from '../data/ImageList';
import ImageGallary from './ImageGallary';
import HomeVideo from '../video/Sunday-Hero-Video.mp4';
import LogoContainer from './pages-components/LogoContainer';
import LogoModalContent from './pages-components/LogoModalContent';
import SundayModal from './pages-components/SundayModal';
import SingleUnit from './pages-components/SingleUnit';
import Siteplan from './pages-components/Siteplan';

const Fullpage = () => {
  const { individualModalContent, handleModalClickOpen } = useGlobalContext();
  const [name, setName] = useState([
    { id: 1, className: '' },
    { id: 2, className: '' },
    { id: 3, className: '' },
  ]);

  const [navBarTitle, setNavBarTitle] = useState({
    bgColorClass: '',
    title: 'Sunday Everyday',
    topTitle: 'Home',
  });

  return (
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      // sectionsColor={['orange', 'purple', 'green']}
      navigation={false}
      anchors={[
        'home',
        'intro',
        'every',
        'partners',
        'welcomeHome',
        'siteplan',
        'units',
        'fixtures',
        'video',
        'map',
        'contact-us',
        'disclaimer',
        'backpage',
      ]}
      autoScrolling={true}
      scrollBar={true}
      // normalScrollElements: '.vs-img, .sale-intro, #map',
      touchSensitivity={15}
      fitToSection={true}
      afterLoad={(origin, destination, direction) => {
        if (document.body.classList.contains(hrefLinks[0])) {
          let newArr = [...name];
          newArr[0].className = 'show';
          setName(newArr);
          setNavBarTitle({
            bgColorClass: '',
            title: 'Sunday you know',
            topTitle: 'Home',
          });
        }
        if (document.body.classList.contains(hrefLinks[1])) {
          setNavBarTitle({
            bgColorClass: 'opacity-deep',
            title: 'Creative Partners',
            topTitle: 'Sunday you know',
          });
        }
        if (document.body.classList.contains(hrefLinks[4])) {
          setNavBarTitle({
            bgColorClass: 'opacity-deep',
            title: 'Creative Partners',
            topTitle: 'Sunday you know',
          });
        }
      }}
      render={({ state }) => {
        return (
          <ReactFullpage.Wrapper>
            <Navbar
              title={navBarTitle.title}
              additionClass={navBarTitle.bgColorClass}
            />
            <TopNavbar
              heading={navBarTitle.topTitle}
              addtionalClass={navBarTitle.bgColorClass}
            />

            {/* First Section */}
            <SectionWrapper class={'section'} idName={'home'}>
              <div className='home-video'>
                <video loop autoPlay muted id='home-bg-video'>
                  <source src={HomeVideo} type='video/mp4' />
                </video>
              </div>
            </SectionWrapper>

            {/* Second Section */}
            <SectionWrapper class={'section'} idName={'home-modal'}>
              <div
                id='home-modal-container'
                className={name[0].className}
              ></div>
            </SectionWrapper>

            {/* Third Section */}
            <SectionWrapper class={'section'} idName={'sunday-everyday'}>
              <Row className='sd-everyday-row'>
                <Col lg={4} md={3} className='sunday-paragraph'>
                  <Title
                    colorClassName=''
                    firstHalfTitle='Sunday,'
                    secondHalfTitle='every day.'
                  />

                  <p style={{ paddingTop: '18px', marginBottom: '30px' }}>
                    Sunday is slow, deliberate. It’s a Tivoli Road croissant. Or
                    an afternoon stroll around Como Park. It’s about being truly
                    present — exploring each moment with curiosity, without
                    striving for it to be something more.
                  </p>
                </Col>
                <Col lg={8} md={9} className='sunday-everyday-carousel-box'>
                  <ImageGallary />
                </Col>
              </Row>
            </SectionWrapper>

            <SectionWrapper class={'section'} idName={'sunday-partners'}>
              <div className='bg-wrapper'>
                <Title
                  colorClassName='white-title'
                  firstHalfTitle='Creative'
                  secondHalfTitle='partners.'
                />
                <Row className='logo-row'>
                  {svgImagePath.map((svgImage, index) => {
                    return (
                      <Col
                        key={index}
                        md={4}
                        role='button'
                        onClick={() => handleModalClickOpen(index)}
                      >
                        <LogoContainer bgImg={svgImage} />
                      </Col>
                    );
                  })}
                </Row>
                <SundayModal>
                  <LogoModalContent {...individualModalContent} />
                </SundayModal>
              </div>
            </SectionWrapper>

            <SectionWrapper class={'section'} idName={'sunday-welcome-home'}>
              <div className='bg-wrapper'>
                <Title
                  colorClassName='white-title'
                  firstHalfTitle='Welcome'
                  secondHalfTitle='home.'
                />
                <Row className='welcome-tabs'>
                  <Tab.Container defaultActiveKey='first'>
                    <Col md={4}>
                      <Nav variant='pills' className='flex-column tabs-column'>
                        {tabContent.map((tab, index) => {
                          return (
                            <Nav.Item key={index}>
                              <Nav.Link
                                eventKey={tab.position}
                                className='welcome-title'
                              >
                                {tab.title}
                              </Nav.Link>
                            </Nav.Item>
                          );
                        })}
                      </Nav>
                    </Col>
                    <Col md={8}>
                      <Tab.Content>
                        {tabContent.map((tab) => {
                          return (
                            <Tab.Pane
                              key={tab.position}
                              eventKey={tab.position}
                            >
                              <p>{tab.content}</p>
                            </Tab.Pane>
                          );
                        })}
                      </Tab.Content>
                    </Col>
                  </Tab.Container>
                </Row>
              </div>
            </SectionWrapper>

            <SectionWrapper class={'section'} idName={'floor-plans'}>
              <div className='bg-wrapper'>
                <Title
                  colorClassName='white-title'
                  firstHalfTitle='The Siteplan.'
                  secondHalfTitle=''
                />
                <Siteplan />
              </div>
            </SectionWrapper>

            <SectionWrapper class={'section'} idName={'unit-sitemap'}>
              <div className='bg-wrapper'>
                <Title
                  colorClassName='white-title'
                  firstHalfTitle='Units'
                  secondHalfTitle=''
                />
                {/* <UnitDropdown /> */}
                <SingleUnit />
              </div>
            </SectionWrapper>

            <SectionWrapper class={'section'} idName={'fixtures-finishes'}>
              <div className='bg-wrapper'>
                <Title
                  colorClassName=''
                  firstHalfTitle='Fixtures'
                  secondHalfTitle='& finishes.'
                />
              </div>
            </SectionWrapper>

          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Fullpage;
