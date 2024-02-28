"use client";

import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { Icons } from "@/public/icon";

import { DepartureListState } from "@/store/atoms";
import { AddressType } from "@/interface/api/address";
import DepartureBar from "@/components/bar/DepartureBar";
import { usePopUpProvider } from "@/lib/context/PopupContext";

import { PopUpConfig } from "@/config";

type PropsType = {
  handlePageData: () => void;
};

function RecommendTabContainer({
  handlePageData,
}: PropsType): React.ReactElement {
  const router = useRouter();
  const { showPopUp } = usePopUpProvider();

  const [url, setUrl] = useState<string>("");

  const [departureList, setDepartureList] = useRecoilState(DepartureListState);

  const addDeparture = () => {
    if (departureList.length >= 15) showPopUp(PopUpConfig.limitAddressList);

    setDepartureList((prev) => [
      ...prev,
      { id: departureList.length, address: {} as AddressType },
    ]);
  };

  const deleteDeparture = (index: number) => {
    setDepartureList((prev) => prev.filter((_, i) => i !== index));
  };

  const disableRecommend = useMemo(
    () =>
      departureList.length < 2 ||
      departureList.some(
        (item) =>
          item.address.roadAddr === "" || item.address.roadAddr === undefined
      ),
    [departureList]
  );

  const navigateToSearchAddress = (index: number) => {
    router.push(`/searchAddress/${index}`);
  };

  const onClickDepartureBar = (index: number) => {
    handlePageData();
    navigateToSearchAddress(index);
  };

  useEffect(() => {
    setUrl(location.href);
  }, []);

  return (
    <Container>
      <ImageContainer>
        <Icons.SvgElement.startImage />
        <Icons.SvgElement.togetherAddImage />
      </ImageContainer>
      <DepartureContainer>
        {departureList.map((item, index) => {
          const canDelete = index > 2;

          return (
            <DepartureBar
              key={`${item.address.roadAddr}-${index}`}
              departure={item.address.roadAddr}
              canDelete={canDelete}
              onClickBar={() => {
                onClickDepartureBar(index);
              }}
              onClickDelete={() => {
                deleteDeparture(index);
              }}
            />
          );
        })}
      </DepartureContainer>
      <BoxContainer>
        <ButtonContainer>
          <Icons.SvgElement.departureAddIcon onClick={addDeparture} />
        </ButtonContainer>
        <ButtonContainer>
          {disableRecommend ? (
            <Icons.SvgElement.disabledRecommendBtnImage />
          ) : (
            <Icons.SvgElement.recommendBtnImage />
          )}
        </ButtonContainer>
      </BoxContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;

  flex-direction: column;
  align-items: center;
  background-color: white;

  padding: 0 18px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 24px;
`;

const DepartureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  min-height: 185px;
  max-height: 296px;
  box-sizing: border-box;
  overflow: auto;
  margin-bottom: 12px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width
  margin-top: auto;

  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  box-sizing: border-box;
`;

export default React.memo(RecommendTabContainer);
