import React from 'react';
import Section1 from '../../Containers/Section1/Section1';
const Layout = () => {
  return (
    <>
      <section>
        <a href='http://instagram.com/hrithik.codes'>
          <div
            style={{
              position: 'fixed',
              right: '10px',
              top: '10px',
              color: '#f4f5f5',
              zIndex: '21',
              textDecoration: 'underline'
            }}
          >
            Ritik Chauhan
          </div>
        </a>
      </section>
      <Section1 />
    </>
  );
};

export default Layout;
