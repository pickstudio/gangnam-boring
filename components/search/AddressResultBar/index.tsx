import React from "react";
import styled from "styled-components";

function AddressResultBar() {
  return <Container></Container>;
}

export default React.memo(AddressResultBar);

const Container = styled.button`
  cursor: pointer;
  width: 100%;
  height: 30px;
  padding: 0px;
  background: none;
  border: none;
  color: #616161;
`;
