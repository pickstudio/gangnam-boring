import React, { useRef } from "react";
import styled from "styled-components";

import MidPointInfoCard from "@/components/midPoint/MidPointInfoCard";
import { MidPointAPIResponseType } from "@/interface/api/midPoint";
import { debounce } from "@/lib/hook";

interface MidPointListProps {
  transportInfoArray: MidPointAPIResponseType[];
  handleMidPointIndex: (index: number) => void;
}

export default function MidPointListContainer({
  transportInfoArray,
  handleMidPointIndex,
}: MidPointListProps) {
  const HorizontalScrollDivRef = useRef<HTMLDivElement>(null);

  if (typeof window === "undefined") return;

  const innerWidth = window.innerWidth - 40;
  const trackScrollPosition = () => {
    const currentScrollPosition = Number(
      HorizontalScrollDivRef.current?.scrollLeft
    );

    const currentQuotient = Math.floor(currentScrollPosition / innerWidth);
    const currentRemainder = currentScrollPosition % innerWidth;

    handleDivScrollPosition(currentRemainder, currentQuotient);
  };

  const handleDivScrollPosition = (remainder: number, quotient: number) => {
    const currentQuotient =
      remainder > innerWidth / 2 ? quotient + 1 : quotient;

    handleMidPointIndex(currentQuotient);

    HorizontalScrollDivRef.current?.scrollTo({
      left: innerWidth * currentQuotient,
      behavior: "smooth",
    });
  };

  return (
    <InfoCardContainer
      ref={HorizontalScrollDivRef}
      onScrollCapture={debounce(trackScrollPosition)}
    >
      {transportInfoArray.map((item: MidPointAPIResponseType, idx) => (
        <CardContainer key={`${item.midPointStation}-${idx}`}>
          <MidPointInfoCard
            title={`${item.midPointStation}-${idx}`}
            timeCost={item.averageTimeCost}
            onClickShare={() => { }}
            transportInfoArray={item.waysToStation}
          />
        </CardContainer>
      ))}
    </InfoCardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-flow: column-reverse;
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
  overflow-y: clip;
`;
