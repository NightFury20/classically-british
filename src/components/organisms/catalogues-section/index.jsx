import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { CatalogueCard } from "~/components/molecules";

const data = [
  {
    title: "Classic MG",
    imageUrl: "./assets/mg-logo.jpg",
    cars: [
      {
        name: "MGB",
        categories: [
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=54",
            text: "Apparel & Gifts"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=2",
            text: "Body"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=4",
            text: "Brakes"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=58",
            text: "Car Care, Books, Tools "
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=6",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=59",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=9",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=8",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=10",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=11",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=57",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=56",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=14",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=55",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=53",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=52",
            text: "REPLACE_ME"
          },
          {
            link:
              "http://www.moss-europe.co.uk/Browse/SubcomponentMenuProducts.aspx?WebCatalogID=37&PlateTypeID=1&ComponentID=51",
            text: "REPLACE_ME"
          }
        ]
      },
      {
        name: "MGA",
        categories: []
      },
      {
        name: "MG T",
        categories: []
      },
      {
        name: "Sprite / Midget (early)",
        categories: []
      },
      {
        name: "Sprite / Midget (late)",
        categories: []
      }
    ]
  },
  {
    title: "Modern MG",
    imageUrl: "./assets/classic-mg-logo.jpg",
    cars: [
      {
        name: "",
        categories: []
      }
    ]
  },
  {
    title: "Triumph",
    imageUrl: "./assets/triumph-logo.jpg",
    cars: [
      {
        name: "",
        categories: []
      }
    ]
  },
  {
    title: "Rover",
    imageUrl: "./assets/rover-logo.jpg",
    cars: [
      {
        name: "",
        categories: []
      }
    ]
  },
  {
    title: "Morris Minor",
    imageUrl: "./assets/morris-logo.jpg",
    cars: [
      {
        name: "",
        categories: []
      }
    ]
  },
  {
    title: "Mini",
    imageUrl: "./assets/mini-logo.jpg",
    cars: [
      {
        name: "",
        categories: []
      }
    ]
  }
];

const CataloguesSection = props => {
  return (
    <div className="container">
      <div id="catalogues" className="main__brands justify-content-center mt-2">
        <div className="mt-5 mb-4">
          <h3 className="text-center">
            <strong>Catalogues</strong>
          </h3>
        </div>
        <div className="row justify-content-center">
          {data.map(item => (
            <CatalogueCard title={item.title} imageUrl={item.imageUrl} cars={item.cars} />
          ))}
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

CataloguesSection.propTypes = {};

export default CataloguesSection;
