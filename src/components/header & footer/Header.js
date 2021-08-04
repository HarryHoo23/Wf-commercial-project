import React from 'react';
// import InfoLogout from './InfoLogout';
import { Col } from 'react-bootstrap';
import { links } from '../../data/Menu';
import { useAuth } from '../../contexts/AuthContext';
import { useGlobalContext } from '../../contexts/GlobalContext';

export default function Header() {
  const { currentUser } = useAuth();
  const { isOpen } = useGlobalContext();
  return (
    <aside className={`${isOpen ? 'menubar-overlay show' : 'menubar-overlay'}`}>
      {currentUser && isOpen && (
        <header>
          <nav
            className={`${
              isOpen
                ? 'sunday-navbar fixed-bottom sunday-navbar-active'
                : 'sunday-navbar fixed-bottom'
            }`}
          >
            <div className='menu-box'>
              <Col md='7' id='mobile-nav-content'>
                <p className='menu-title'>Navigation</p>
                <ul className='nav navbar-nav'>
                  {links.map((link) => {
                    const { id, href, text } = link;
                    return (
                      <li key={id}>
                        <a className='nav-link' href={href}>
                          {text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            </div>
          </nav>
        </header>
      )}
    </aside>
  );
}
