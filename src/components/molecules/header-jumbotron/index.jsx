import React from 'react';

import { Navbar } from '../../organisms';

const HeaderJumbotron = () => {
  return (
    <div className="header">
      <div className="header__title justify-content-center">
        <h1 className="text-center">Classically British</h1>
      </div>
      <Navbar />
      <div className="container">
        <div className="header__hero row justify-content-center">
          <h2 className="text-center"><strong>Spare parts for classic British cars in South Africa</strong></h2>
        </div>
        <div className="header__hero-footer text-center">
          <h5>
            <a href="tel:+27786390151">078 639 0151</a> (office hours only)<br />
            <a href="mailto:info@cbparts.co.za">info@cbparts.co.za</a>
          </h5>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HeaderJumbotron;