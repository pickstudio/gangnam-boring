"use client";

import styled from "styled-components";

import MidPointInfoCard from "@/components/midPoint/MidPointInfoCard";
import { MidPointAPIResponseType } from "@/interface/api/midPoint";
import React from "react";

interface MidPointListProps {
  transportInfoArray: MidPointAPIResponseType[];
}

export default function MidPointListContainer({
  transportInfoArray,
}: MidPointListProps) {
  return (
    <InfoCardContainer>
      {transportInfoArray.map((item: MidPointAPIResponseType, idx) => (
        <CardContainer key={`${item.midPointStation}-${idx}`}>
          <MidPointInfoCard
            title={item.midPointStation}
            timeCost={item.averageTimeCost}
            onClickShare={() => {}}
            transportInfoArray={item.waysToStation}
          />
        </CardContainer>
      ))}
    </InfoCardContainer>
  );
}

const CardContainer = styled.div`
  padding-left: 20px;

  &:last-child {
    padding-right: 20px;
  }
`;

const InfoCardContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  z-index: 2;
  bottom: 20px;
  overflow: scroll;
`;
