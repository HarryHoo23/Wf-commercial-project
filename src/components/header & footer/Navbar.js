import React from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';

const Navbar = (props) => {
  const { openAndCloseNavbar, isOpen, onClickScrollDown } = useGlobalContext();
  return (
    <div className={`${isOpen ? 'nav-wrapper active-nav' : 'nav-wrapper'}`}>
      <div className={`${props.additionClass} nav-bottom-row`}>
        <div className='btn-left-box scroll-down-box'>
          <span id='scroll-down-title' className={props.additionClass}>
            {props.title}
          </span>
          <div
            className={`menu-arrow-box ${props.additionClass}`}
            onClick={onClickScrollDown}
          >
            <svg
              id='menu-arrow'
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
        </div>
        <div className={`btn-right-box ${props.additionClass}`}>
          <a id='phone-btn' href='facetime:0435165633'>
            <span id='nav-phone-btn'>
              <svg
                id='_8'
                data-name='8'
                xmlns='http://www.w3.org/2000/svg'
                width='19.063'
                height='19.021'
                viewBox='0 0 19.063 19.021'
              >
                <path
                  id='Path_99'
                  data-name='Path 99'
                  d='M593.614,427.195c-.428-.685-.351-.876-.351-.876l1.278-1.855a1.157,1.157,0,0,0-.114-1.51l-2.649-2.631a1.083,1.083,0,0,0-1.426-.088l-1.15.891a1.31,1.31,0,0,0-.264.267c-2.27,3.167.915,8.156,4.841,12.059,3.819,3.8,8.988,7.18,12.108,4.762a1.3,1.3,0,0,0,.234-.239l.9-1.174a1.082,1.082,0,0,0-.1-1.426l-2.648-2.631a1.157,1.157,0,0,0-1.51-.1l-1.848,1.288s-.739.268-4.328-3.3a27.73,27.73,0,0,1-2.559-2.833c-.175-.232-.311-.43-.416-.6'
                  transform='translate(-588.181 -420.007)'
                  fill='#fff'
                />
              </svg>
            </span>
          </a>

          <span id='nav-open-btn' role='button' onClick={openAndCloseNavbar}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24.85'
              height='19.021'
              viewBox='0 0 24.85 19.021'
            >
              <g
                id='Layer_47'
                data-name='Layer 47'
                transform='translate(-10.5 -17.84)'
              >
                <path
                  id='Path_221'
                  data-name='Path 221'
                  d='M11.507,19.855H34.343a1.007,1.007,0,0,0,0-2.015H11.507a1.007,1.007,0,1,0,0,2.015Z'
                  fill='#fff'
                />
                <path
                  id='Path_222'
                  data-name='Path 222'
                  d='M35.35,31.507A1.008,1.008,0,0,0,34.343,30.5H11.507a1.007,1.007,0,1,0,0,2.015H34.343A1.008,1.008,0,0,0,35.35,31.507Z'
                  transform='translate(0 -4.157)'
                  fill='#fff'
                />
                <path
                  id='Path_223'
                  data-name='Path 223'
                  d='M20.91,43.16h-9.4a1.007,1.007,0,1,0,0,2.015h9.4a1.007,1.007,0,0,0,0-2.015Z'
                  transform='translate(0 -8.314)'
                  fill='#fff'
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
