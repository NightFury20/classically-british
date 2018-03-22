import { Button, CardBody, Card } from "reactstrap";
import styled from "styled-components";

export const FullRedButton = styled(Button)`
  width: 100%;
  background-color: #c8102e;
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

export const CustomCardBody = styled(CardBody)`
  margin: 0;
  padding: 0;
`;

export const CustomCard = styled(Card) `
  padding: 0;
  margin: 0;
`;
