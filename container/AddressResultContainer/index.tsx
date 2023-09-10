import AddressResultBar from "@/components/search/AddressResultBar";
import { AddressType } from "@/interface/api/address";
import React from "react";
import styled from "styled-components";

interface PropsType {
  addressList: AddressType[];
}

function AddressResultContainer({ addressList }: PropsType) {
  if (!addressList) return <></>;

  return (
    <Container>
      {addressList.map((item, idx) => {
        return (
          <AddressResultBar
            key={`${item.bdNm}-${idx}`}
            mainAddress={item.bdNm}
            detailAddress={item.roadAddr}
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
  height: 30px;
  padding: 0px;
  background: none;
  border: none;
  color: #616161;
  align-items: center;
`;
