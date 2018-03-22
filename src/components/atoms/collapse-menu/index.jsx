import React, { Component } from 'react';

import {
  Collapse
} from "reactstrap";

import {
  CustomCard,
  CustomCardBody,
  FullRedButton,
} from './styles';

class CollapseMenu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { subheader, children } = this.props;
    return <div>
        <FullRedButton color="primary" onClick={this.toggle}>
          {subheader}
        </FullRedButton>
        <Collapse isOpen={this.state.collapse}>
          <CustomCard>
            <CustomCardBody>{children}</CustomCardBody>
          </CustomCard>
        </Collapse>
      </div>;
  }
}

export default CollapseMenu;