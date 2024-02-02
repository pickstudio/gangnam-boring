"use client";

import React from "react";
import styled from "styled-components";

import AddressResultBar from "@/components/search/AddressResultBar";
import { AddressType } from "@/interface/api/address";

interface PropsType {
  addressList: AddressType[];
  onClickSubmit: () => void;
}

function AddressResultContainer({ addressList, onClickSubmit }: PropsType) {
  if (!addressList) return <></>;

  return (
    <Container>
      {addressList.map((item, idx) => {
        return (
          <AddressResultBar
            key={`${item.bdNm}-${idx}`}
            mainAddress={item.bdNm}
            detailAddress={item.roadAddr}
            onClickSubmit={onClickSubmit}
          />
        );
      })}
    </Container>
  );
}

export default React.memo(AddressResultContainer);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  padding: 0px;
  background: none;
  border: none;
  color: #616161;
  align-items: center;
`;
