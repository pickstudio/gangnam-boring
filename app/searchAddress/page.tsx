"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import Head from "next/head";

import styled from "styled-components";
import { Icons } from "@/public/icon";

import AddressResultContainer from "@/container/AddressResultContainer";

import AddressInputBar from "@/components/search/AddressInputBar";
import GBLayout from "@/components/base/GBLayout";

import { getAddr } from "@/lib/utils/searchAdress";
import { AddressType } from "@/interface/api/address";

export default function SearchAddress() {
  const [addressList, setAddressList] = useState<AddressType[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const [hasBottomBorder, setHasBottomBorder] = useState<boolean>(false);

  const resultContainerRef = useRef<HTMLDivElement>(null);

  const handleAddressList = async (keyword: string) => {
    const response = await getAddr(keyword);

    setAddressList(response);
  };

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    handleAddressList(e.target.value);
  };

  const clearSearchKeyword = () => {
    setSearchKeyword("");
    setAddressList([]);
  };

  const handleScrollView = () => {
    if (Number(resultContainerRef.current?.scrollTop) > 0)
      setHasBottomBorder(true);
    else setHasBottomBorder(false);
  };

  useEffect(() => {
    resultContainerRef.current?.addEventListener("scroll", handleScrollView);
    return () =>
      resultContainerRef.current?.removeEventListener(
        "scroll",
        handleScrollView
      );
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{"강남은 지루해"}</title>
      </Head>
      <GBLayout header headerLeftIcon={Icons.SvgElement.leftArrowIcon}>
        <ContentContainer>
          <InputBarContainer hasBottomBorder={hasBottomBorder}>
            <AddressInputBar
              placeHolder="지번, 도로명, 건물명으로 검색"
              value={searchKeyword}
              setValue={onChangeKeyword}
              clearSearchKeyword={clearSearchKeyword}
            />
          </InputBarContainer>
          <ResultContainer ref={resultContainerRef}>
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

const InputBarContainer = styled.div<{ hasBottomBorder: boolean }>`
  width: 100%;
  padding: 32px 20px 16px;
  box-sizing: border-box;
  ${(props) => props.hasBottomBorder && "border-bottom: 1px solid #dbdbdb"};
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 20px 100px;
  overflow: scroll;
`;
