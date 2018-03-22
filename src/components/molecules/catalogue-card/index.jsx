import React from 'react';
import PropTypes from 'prop-types';

const CatalogueCard = ({ title, link, imageUrl, ...rest }) => {
  return (
    <div className="card col-lg-4 col-sm-6 text-center">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>
            <img src={imageUrl} alt={title} className="img-link" />
        </p>
        <button
          className="btn btn-outline-primary"
          data-toggle="modal"
          data-target="#MGClassicModal">
          Open <i className="fa fa-lg fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

CatalogueCard.propTypes = {

};

export default CatalogueCard;