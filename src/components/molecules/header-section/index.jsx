import React from 'react';
import PropTypes from 'prop-types';

const HeaderSection = props => {
  return (
    <div className="header">
      <div className="header__title justify-content-center">
        <h1 className="text-center pt-3 pb-3">Classically British</h1>
      </div>
      <div className="container pb-5">
        <div className="header__hero row justify-content-center">
          <h2 className="text-center"><strong>Spare parts for classic British cars in South Africa</strong></h2>
        </div>
        <div className="header__hero-footer text-center mt-3">
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

HeaderSection.propTypes = {

};

export default HeaderSection;