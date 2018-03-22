import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  CardBody,
  Card
} from "reactstrap";

import { CollapseMenu } from '~/components/atoms';

class CatalogueModal extends Component {
  render() {
    const { title, cars, display, close } = this.props;
    return (
      <Fragment>
        <div>
          <Modal isOpen={display} toggle={close}>
            <ModalHeader toggle={close}>{title}</ModalHeader>
            <ModalBody>
              {(!cars || cars.length < 1) && <div>No cars!</div>}
              {cars &&
                cars.length > 0 &&
                cars.map(car => (
                <CollapseMenu
                  subheader={car.name}
                >
                    {car.categories.map(category => (
                      <Fragment>
                        <a target="blank" href={category.link}>
                          {category.text}
                        </a>
                        <br />
                      </Fragment>
                    ))}
                  </CollapseMenu>
                ))}
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={close}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        <div
          className="modal fade"
          id="MGClassicModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="MGClassicModal"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div id="mg-classic-accordion">
                  {cars &&
                    cars.length > 0 &&
                    cars.map(car => (
                      <div className="card">
                        <button
                          className="btn accordion-header-btn"
                          id="MGMGBHeading"
                          data-toggle="collapse"
                          data-target="#MGMGBcollapse"
                          aria-expanded="true"
                          aria-controls="MGMGBcollapse"
                        >
                          <h5 className="mb-0">{car.name}</h5>
                        </button>
                        <div
                          id="MGMGBcollapse"
                          aria-labelledby="MGMGBHeading"
                          data-parent="#mg-classic-accordion"
                        >
                          <div className="card-body">
                            {car.categories.map(category => (
                              <Fragment>
                                <a target="blank" href={category.link}>
                                  {category.text}
                                </a>
                                <br />
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

CatalogueModal.propTypes = {};

export default CatalogueModal;
