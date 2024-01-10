"use client";

import styled from "styled-components";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import "react-horizontal-scrolling-menu/dist/styles.css";

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
    <ScrollMenu onScroll={(api, e) => console.log(e)}>
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
    </ScrollMenu>
  );
}

const CardContainer = styled.div`
  padding-left: 20px;
`;
