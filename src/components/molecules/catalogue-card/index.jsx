import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { CatalogueModal } from "~/components/molecules";

class CatalogueCard extends Component {
  state = {
    showModal: false
  };

  displayModal(e) {
    console.log("modal is now: ", !this.state.showModal);
    this.setState({
      showModal: !this.state.showModal
    });
  }

  closeModal(e) {
    this.setState({
      showModal: false,
    })
  }

  render() {
    const { title, cars, imageUrl, ...rest } = this.props;
    return <Fragment>
        <div className="card col-lg-4 col-sm-6 text-center" onClick={() => this.displayModal()}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>
              <img src={imageUrl} alt={title} className="img-link" />
            </p>
            <button className="btn btn-outline-primary" data-toggle="modal" data-target="#MGClassicModal">
              Open <i className="fa fa-lg fa-angle-right" />
            </button>
          </div>
        </div>
      <CatalogueModal
        title={title} cars={cars}
        display={this.state.showModal}
        close={() => this.closeModal()} />
      </Fragment>;
  }
}

CatalogueCard.propTypes = {};

export default CatalogueCard;
