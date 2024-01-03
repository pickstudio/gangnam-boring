"use client";

import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

import Head from "next/head";

import styled from "styled-components";

import AddressInputBar from "@/components/search/AddressInputBar";
import GBLayout from "@/components/base/GBLayout";
import { Icons } from "@/public/icon";
import { getAddr } from "@/lib/utils/searchAdress";
import AddressResultContainer from "@/container/AddressResultContainer";
import { AddressType } from "@/interface/api/address";

export default function SearchAddress() {
  const [addressList, setAddressList] = useState<AddressType[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const handleAddressList = async (keyword: string) => {
    const response = await getAddr(keyword);

    setAddressList(response);
  };

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    handleAddressList(e.target.value);
  };

  return (
    <React.Fragment>
      <Head>
        <title>{"강남은 지루해"}</title>
      </Head>
      <GBLayout header headerLeftIcon={Icons.SvgElement.leftArrowIcon}>
        <ContentContainer>
          <InputBarContainer>
            <AddressInputBar
              placeHolder="지번, 도로명, 건물명으로 검색"
              value={searchKeyword}
              setValue={onChangeKeyword}
            />
          </InputBarContainer>
          <ResultContainer>
            <AddressResultContainer addressList={addressList} />
          </ResultContainer>
        </ContentContainer>
      </GBLayout>
    </React.Fragment>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const InputBarContainer = styled.div`
  width: 100%;
  padding: 32px 20px 16px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 20px 100px;
  overflow: scroll;
`;
