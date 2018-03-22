import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Button,
  Collapse,
  CardBody,
  Card
} from "reactstrap";

const FullRedButton = styled(Button)`
  width: 100%;
  background-color: #C8102E;
  color: white;
  margin: 0;
  border: none;
  border-radius: 0;
  margin-bottom: 3px;
  height: 64;
  padding: 20px 15px 20px 15px;
  font-size: 1.2rem;
  font-family: "PT Serif", serif !important;
  font-weight: 400;
  text-align: left;
`;

const CustomCardBody = styled(CardBody) `
  margin: 0;
  padding: 0;
`;

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
          <Card>
            <CustomCardBody>{children}</CustomCardBody>
          </Card>
        </Collapse>
      </div>;
  }
}

export default CollapseMenu;