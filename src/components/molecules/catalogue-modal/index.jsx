import React, { Fragment, Component } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { List, ListItem } from "material-ui/List";

import { CollapseMenu } from "~/components/atoms";

class CatalogueModal extends Component {
  render() {
    const { title, cars, display, close } = this.props;
    return (
      <Fragment>
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Modal isOpen={display} toggle={close}>
              <ModalHeader toggle={close}>{title}</ModalHeader>
              <ModalBody>
                {(!cars || cars.length < 1) && <div>No cars!</div>}
                {cars &&
                  cars.length > 0 &&
                  cars.map(car => (
                    <CollapseMenu subheader={car.name}>
                      <List>
                        {car.categories.map(category => (
                          <a target="blank" href={category.link}>
                            <ListItem primaryText={category.text} />
                          </a>
                        ))}
                      </List>
                    </CollapseMenu>
                  ))}
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={close}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </MuiThemeProvider>
        </div>
      </Fragment>
    );
  }
}

CatalogueModal.propTypes = {};

export default CatalogueModal;
