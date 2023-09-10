"use client";

import React, { useCallback, useEffect } from "react";

import Head from "next/head";

import styled from "styled-components";

import AddressInputBar from "@/components/search/AddressInputBar";
import GBLayout from "@/components/base/GBLayout";
import { Icons } from "@/public/icon";
import { getAddr } from "@/lib/utils/searchAdress";
import AddressResultBar from "@/components/search/AddressResultBar";

export default function SearchAddress() {
  return (
    <React.Fragment>
      <Head>
        <title>{"강남은 지루해"}</title>
      </Head>
      <GBLayout header headerLeftIcon={Icons.SvgElement.leftArrowIcon}>
        <ContentContainer>
          <AddressInputBar />
          <AddressResultBar />
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
