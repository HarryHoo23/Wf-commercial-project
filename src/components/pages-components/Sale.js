import React from 'react';

const Sale = ({ sale }) => {
  return (
    <>
      <div className='sale-img-box'>
        <a aria-roledescription="button">
          <img src="https://sundayhawksburn.com.au/client/assets/img/icons/video.svg" alt="expand-icon" className="expand-icon" />
        </a>
        <img src={sale.img} className='sale-img' alt='Fox-Image' />
        <div className='contact-btn-container'>
          <button className='email btn btn-outline-secondary'>Message</button>
          <button className='call btn btn-outline-secondary'>
            <a href='facetime:marty@whitefoxrealestate.com.au'>Facetime</a>
          </button>
        </div>
      </div>
      <div className='sale-info'>
        <h5 className='sale-name'>{sale.name}</h5>
        <p className='sale-job-title'>{sale.title}</p>

        <div className='sale-intro'>
          <p>{sale.sale_intro}</p>
        </div>
        <ul className='sale-contact'>
          <li>{sale.phone}</li>
          <li>{sale.email}</li>
          <li>
            <a href={sale.insta_link} target='_blank'>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sale;
