import React from "react";
import Head from "next/head";

import styled from "styled-components";

import AddressInputBar from "@/components/search/AddressInputBar";
import GBLayout from "@/components/base/GBLayout";
import { Icons } from "@/public/icon";

export default function searchAddress() {
  return (
    <React.Fragment>
      <Head>
        <title>{"강남은 지루해"}</title>
      </Head>
      <GBLayout header headerLeftIcon={Icons.SvgElement.leftArrowIcon}>
        <ContentContainer>
          <AddressInputBar />
        </ContentContainer>
      </GBLayout>
    </React.Fragment>
  );
}

const ContentContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
