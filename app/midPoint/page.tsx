"use client";

import * as React from "react";
import Head from "next/head";

import styled from "styled-components";
import { Icons } from "@/public/icon";
import share from "@/lib/utils/client/share";

import GBLayout from "@/components/base/GBLayout";
import { MidPointDummyResponse } from "@/api/dummy/response";
import MidPointListContainer from "@/container/MidPointListContainer";

const latitude = 33.45079660685329;
const longitude = 126.57230632373583;

const transportInfoArray = MidPointDummyResponse;

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
            <MidPointListContainer transportInfoArray={transportInfoArray} />
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
  position: relative;
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
  width: 100%;
  display: flex;
  position: absolute;
  z-index: 100;
  bottom: 20px;
  overflow: scroll;
`;
