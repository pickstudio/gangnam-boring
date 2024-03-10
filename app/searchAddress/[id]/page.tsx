"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

import Head from "next/head";

import styled from "styled-components";
import { Icons } from "@/public/icon";

import AddressResultContainer from "@/container/AddressResultContainer";

import AddressInputBar from "@/components/search/AddressInputBar";
import GBLayout from "@/components/base/GBLayout";

import { getAddr } from "@/lib/utils/searchAdress";
import { AddressType } from "@/interface/api/address";
import { GBText } from "@/components/base";
import { Images } from "@/public/images";
import { DepartureListState } from "@/store/atoms";

interface IProps {
  params: {
    id: string;
  };
}

export default function SearchAddress({ params }: IProps) {
  const router = useRouter();

  const [searchAddressList, setSearchAddressList] = useState<AddressType[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const [hasBottomBorder, setHasBottomBorder] = useState<boolean>(false);

  const [departureList, setDepartureList] = useRecoilState(DepartureListState);

  const resultContainerRef = useRef<HTMLDivElement>(null);

  const handleAddressList = async (keyword: string) => {
    const response = await getAddr(keyword);

    setSearchAddressList(response);
  };

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    handleAddressList(e.target.value);
  };

  const clearSearchKeyword = () => {
    setSearchKeyword("");
    setSearchAddressList([]);
  };

  const handlePosition = () => {};

  const handleScrollView = () => {
    if (Number(resultContainerRef.current?.scrollTop) > 0)
      setHasBottomBorder(true);
    else setHasBottomBorder(false);
  };

  const submitAddress = (currentAddress: AddressType) => {
    const currentId = Number(params.id);

    setDepartureList((prev) => [
      ...prev.slice(0, currentId),
      { id: currentId, address: currentAddress },
      ...prev.slice(currentId + 1),
    ]);
  };

  const goBack = () => router.back();

  const onClickSubmit = (currentAddress: AddressType) => {
    submitAddress(currentAddress);
    goBack();
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
      <GBLayout header headerLeftIcon>
        <ContentContainer>
          <InputBarContainer $hasBottomBorder={hasBottomBorder}>
            <AddressInputBar
              placeHolder="지번, 도로명, 건물명으로 검색"
              value={searchKeyword}
              setValue={onChangeKeyword}
              clearSearchKeyword={clearSearchKeyword}
            />
          </InputBarContainer>
          {searchAddressList && Number(searchAddressList.length) !== 0 ? (
            <ResultContainer ref={resultContainerRef}>
              <AddressResultContainer
                addressList={searchAddressList}
                onClickSubmit={onClickSubmit}
              />
            </ResultContainer>
          ) : searchKeyword === "" ? (
            <ButtonContainer>
              <CurrentPositionButton onClick={handlePosition}>
                <LocationIcon />
                <TextContainer>
                  <GBText caption01>{"현재위치로 설정"}</GBText>
                </TextContainer>
              </CurrentPositionButton>
            </ButtonContainer>
          ) : (
            <ImageContainer>
              <Image
                src={Images.emptyResult}
                alt={"검색 결과 없음"}
                width={132}
                height={132}
              />
            </ImageContainer>
          )}
        </ContentContainer>
      </GBLayout>
    </React.Fragment>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: content-box;
  overflow: hidden;
`;

const InputBarContainer = styled.div<{ $hasBottomBorder: boolean }>`
  width: 100%;
  padding: 16px 20px 16px;
  box-sizing: border-box;
  ${(props) => props.$hasBottomBorder && "border-bottom: 1px solid #dbdbdb"};
`;

const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 20px 100px;
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const CurrentPositionButton = styled.button`
  display: flex;
  height: 36px;
  background-color: #ffe977;
  border-radius: 20px;
  padding: 0 20px;
  border: none;
  align-items: center;
  justify-content: center;
`;

const LocationIcon = styled(Icons.SvgElement.currentLocationIcon)`
  width: 16px;
  height: 16px;
  margin-right: 2px;
`;

const TextContainer = styled.div`
  padding-top: 1px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 80px;
`;
