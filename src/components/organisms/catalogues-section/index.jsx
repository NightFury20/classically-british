import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { CatalogueCard } from '~/components/molecules';

const data = [
  {
    title: "Classic MG",
    imageUrl: "./assets/mg-logo.jpg",
    cars: [
      {
        name: "",
        categories: [],
      }
    ]
  },
  {
    title: "Modern MG",
    imageUrl: "./assets/classic-mg-logo.jpg",
    cars: [
      {
        name: "",
        categories: [],
      }
    ]
  },
  {
    title: "Triumph",
    imageUrl: "./assets/triumph-logo.jpg",
    cars: [
      {
        name: "",
        categories: [],
      }
    ]
  },
  {
    title: "Rover",
    imageUrl: "./assets/rover-logo.jpg",
    cars: [
      {
        name: "",
        categories: [],
      }
    ]
  },
  {
    title: "Morris Minor",
    imageUrl: "./assets/morris-logo.jpg",
    cars: [
      {
        name: "",
        categories: [],
      }
    ]
  },
  {
    title: "Mini",
    imageUrl: "./assets/mini-logo.jpg",
    cars: [
      {
        name: "",
        categories: [],
      }
    ]
  }
]

const CataloguesSection = props => {
  return (
    <div className="container">
      <div id="catalogues" className="main__brands justify-content-center mt-2">
        <div className="mt-5 mb-4">
          <h3 className="text-center"><strong>Catalogues</strong></h3>
        </div>
        <div className="row justify-content-center">
          {data.map(item => (
            <CatalogueCard
              title={item.title}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

CataloguesSection.propTypes = {

};

export default CataloguesSection;