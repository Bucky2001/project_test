import React from 'react';

const Footer = ({ logo }) => {
  const [FaFacebook, BsGlobe2, IoMdCall] = logo;
  return (
    <footer>
      <i>
        <IoMdCall
          style={{
            color: '#F52D2D',
            borderRadius: '50%',
            backgroundColor: 'white',
          }}
        />
        <a href="tel:1800 200 1234"> Tool-free 1800 200 1234</a>
      </i>
      <i>
        <FaFacebook />
        <a href="https://www.facebook.com/cripumps">
          www.facebook.com/cripumps
        </a>
      </i>
      <i>
        <BsGlobe2
          style={{
            color: '#F52D2D',
            borderRadius: '50%',
            backgroundColor: 'white',
          }}
        />
        <a href="https://www.crigroups.com"> www.crigroups.com</a>
      </i>
    </footer>
  );
};

export default Footer;
