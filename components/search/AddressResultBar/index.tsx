import React from "react";
import styled from "styled-components";

import { GBText } from "@/components/base";
import { Icons } from "@/public/icon";

interface IProps {
  mainAddress: string;
  detailAddress: string;
  onClickSubmit: () => void;
}

function AddressResultBar({
  mainAddress,
  detailAddress,
  onClickSubmit,
}: IProps) {
  return (
    <Container onClick={onClickSubmit}>
      <Icons.SvgElement.locationIcon />
      <TextContainer>
        <GBText body01>{mainAddress}</GBText>
        <GBText caption04>{detailAddress}</GBText>
      </TextContainer>
    </Container>
  );
}

export default React.memo(AddressResultBar);

const Container = styled.button`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 100%;
  height: 30px;
  padding: 0px;
  margin-bottom: 30px;
  border: none;
  color: #616161;
  align-items: center;
  background-color: #fff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 8px;
`;
