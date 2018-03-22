import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const WriteupSection = props => {
  return (
    <Fragment>
      <div className="container">
        <div id="about" className="main__shipping justify-content-center">
          <div className="mt-5 justify-content-center text-center">
            <p>Classically British imports brand-new spare parts for the most popular British vintage cars in South Africa: <strong>Classic MG</strong>, <strong>Modern MG</strong>, <strong>Triumph</strong>, <strong>Rover</strong>, <strong>Morris Minor</strong> and <strong>Mini</strong>.</p>
            <p>We keep stocks of common service and repair items, and source other parts upon request. We typically deliver non-stock items within two weeks.</p>
            <p>
              Classically British sources parts only from authorised British Motor Heritage approved suppliers.<br />
              None of our parts are second-hand.
                </p>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="container">
        <div id="ordering" className="main__shipping justify-content-center">
          <div className="mt-5 mb-4">
            <h3 className="text-center"><strong>How do I order something?</strong></h3>
          </div>
          <div className="mt-2 justify-content-center text-center">
            <p>Please send us your request via WhatsApp, text or email, and we’ll get back to you with availability and price.</p>
            <p>If you need help with finding the right part, you can either search through the relevant catalogue below, or contact us directly and we will assist you.</p>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="container">
        <div id="other" className="main__shipping justify-content-center">
          <div className="mt-5 mb-4">
            <h3 className="text-center"><strong>Good to know</strong></h3>
          </div>
          <div className="mt-2 justify-content-center text-center">
            <p>Our prices include import duty, VAT and delivery.</p>
            <p>We are based in Cape Town, but ship parts nationwide by courier.</p>
            <p>All shipments are insured, and all parts are covered by our personal guarantee.</p>
            <p>Please note that we are not a retail shop – all our business is done by phone and email, with deliveries by courier.</p>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
    </Fragment>
  );
};

export default WriteupSection;