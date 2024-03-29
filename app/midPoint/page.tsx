"use client";

import * as React from "react";

import styled from "styled-components";
import { Icons } from "@/public/icon";

import GBLayout from "@/components/base/GBLayout";
import { MidPointDummyResponse } from "@/api/dummy/response";
import MidPointListContainer from "@/container/MidPointListContainer";
import KakaoMapContainer from "@/container/KakaoMapContainer";

const transportInfoArray = MidPointDummyResponse;

export default function MidPoint() {
  const [midPointIndex, setMidPointIndex] = React.useState(0);

  const handleMidPointIndex = (index: number) => {
    setMidPointIndex(index);
  }

  return (
    <React.Fragment>
      <GBLayout header headerLeftIcon={Icons.SvgElement.leftArrowIcon}>
        <ContentContainer>
          {/* @ts-expect-error Server Component */}
          <MidPointListContainer transportInfoArray={transportInfoArray} handleMidPointIndex={handleMidPointIndex} />
          {/* @ts-expect-error Server Component */}
          <KakaoMapContainer wayInfo={transportInfoArray[midPointIndex]} />
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
