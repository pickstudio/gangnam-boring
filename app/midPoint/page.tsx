"use client";

import * as React from "react";
import Head from "next/head";

import styled from "styled-components";
import { Icons } from "@/public/icon";
import share from "@/lib/utils/client/share";

import GBLayout from "@/components/base/GBLayout";
import MidPointInfoCard from "@/components/midPoint/MidPointInfoCard";

const latitude = 33.45079660685329;
const longitude = 126.57230632373583;

const transportInfoArray = [
  {
    totalTimeCost: 10,
    numberOfTransfer: 2,
    timeCostOfPublicTransfer: 3,
    timeCostOfCar: 3,
  },
  {
    totalTimeCost: 10,
    numberOfTransfer: 2,
    timeCostOfPublicTransfer: 3,
    timeCostOfCar: 3,
  },
  {
    totalTimeCost: 10,
    numberOfTransfer: 2,
    timeCostOfPublicTransfer: 3,
    timeCostOfCar: 3,
  },
  {
    totalTimeCost: 10,
    numberOfTransfer: 2,
    timeCostOfPublicTransfer: 3,
    timeCostOfCar: 3,
  },
  {
    totalTimeCost: 10,
    numberOfTransfer: 2,
    timeCostOfPublicTransfer: 3,
    timeCostOfCar: 3,
  },
  {
    totalTimeCost: 10,
    numberOfTransfer: 2,
    timeCostOfPublicTransfer: 3,
    timeCostOfCar: 3,
  },
];

export default function MidPoint() {
  React.useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  const onClickShare = () => share({ url: "", title: "", text: "" });

  return (
    <React.Fragment>
      <GBLayout header headerLeftIcon={Icons.SvgElement.leftArrowIcon}>
        <ContentContainer>
          <InfoCardContainer>
            <MidPointInfoCard
              title={"용답역"}
              timeCost={0}
              onClickShare={() => {}}
              transportInfoArray={transportInfoArray}
            />
          </InfoCardContainer>
          <MapContainer id="map" />
        </ContentContainer>
      </GBLayout>
    </React.Fragment>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const InfoCardContainer = styled.div`
  position: absolute;
  bottom: 20px;
  z-index: 10;
  padding-left: 20px;
`;
