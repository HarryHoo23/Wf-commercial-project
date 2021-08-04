import React from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';

const TopNavbar = (props) => {
  const { handleFormModalClickOpen, onClickScrollUp } = useGlobalContext();
  return (
    <div className='nav-wrapper-top'>
      <div className={`nav-top-row ${props.addtionalClass} `}>
        <div className='btn-left-box scroll-up'>
          <span id='scroll-up' className={props.addtionalClass}>
            {props.heading}
          </span>
          <div
            id='menu-arrow-down-box'
            className={props.addtionalClass}
            role='button'
            onClick={onClickScrollUp}
          >
            <svg
              id='menu-arrow-down'
              xmlns='http://www.w3.org/2000/svg'
              width='23.917'
              height='13.438'
              viewBox='0 0 23.917 13.438'
            >
              <g id='Arrow' transform='translate(-708.002 -808.173)'>
                <path
                  id='Fill_62'
                  data-name='Fill 62'
                  d='M731.92,809.209a1.056,1.056,0,0,0-.3-.733.976.976,0,0,0-1.415,0l-10.25,10.631-10.25-10.631a.976.976,0,0,0-1.415,0,1.065,1.065,0,0,0,0,1.466l10.96,11.365a.97.97,0,0,0,1.41,0l10.96-11.365a1.057,1.057,0,0,0,.3-.733'
                  fill='#fff'
                />
              </g>
            </svg>
          </div>
          <button
            type='button'
            className='property-contact-btn btn btn-secondary'
            onClick={handleFormModalClickOpen}
          >
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar
