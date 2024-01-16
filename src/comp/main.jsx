// App.js

import { css } from '@emotion/css';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Form } from './form';

const headerStyle = css`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
`;

const heroStyle = css`
  background-color: #f4f4f4;
  padding: 40px;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    padding: 40px 4.7%;
  }
`;

const aboutStyle = css`
  padding: 40px;
  text-align: center;
`;

export const Main = () => {
  return (
    <div>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
      <header className={headerStyle}>
        <h1>We Buy Homes for Cash</h1>
        {/* Add navigation links if needed */}
      </header>

      <section className={heroStyle}>
        <div>
          <h2>Sell Your Home Quickly for Cash</h2>
          <p>We make the process easy and hassle-free. Get a fair offer <i>today!</i></p>
          <Form />
          {/* Add a call-to-action button */}
        </div>
      </section>

      <section className={aboutStyle}>
        <div>
          <h2>About Us</h2>
          <p>
            We specialize in buying and selling homes <i>fast</i> through our network of investors. 
            Shoot us a message and we can have that property off your hands within 30 days!
          </p>
          <p>We do not sell your information. All inquiries are hand-reviewed by a real human.</p>
          <p>Based in the USA.</p>
        </div>
      </section>
    </div>
  );
};
