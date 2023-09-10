import { GBText } from "@/components/base";
import { Icons } from "@/public/icon";
import React from "react";
import styled from "styled-components";

interface IProps {
  mainAddress: string;
  detailAddress: string;
}

function AddressResultBar({ mainAddress, detailAddress }: IProps) {
  return (
    <Container>
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
  cursor: pointer;
  width: 100%;
  height: 30px;
  padding: 0px;
  background: none;
  border: none;
  color: #616161;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 8px;
`;
