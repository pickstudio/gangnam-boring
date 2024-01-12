import React, { useRef } from "react";
import styled from "styled-components";

import TransportInfoBar from "../TransportInfoBar";

import { Icons } from "@/public/icon";
import { GBButton } from "@/components/base";
import { TransportationType } from "@/interface/view/map";
import { WayToStationType } from "@/interface/api/midPoint";

interface IProps {
  title: string;
  timeCost: number;
  transportInfoArray: WayToStationType[];
  onClickShare: () => void;
}

function MidPointInfoCard({
  title,
  timeCost,
  transportInfoArray,
  onClickShare,
}: IProps) {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const canHandleContainer = transportInfoArray.length > 5;

  const handleContainerHeight = () => {};

  return (
    <Container ref={ContainerRef}>
      {canHandleContainer && <SwipeUpBar />}
      <TitleContainer>
        <TitleText>{title}</TitleText>
        <ShareButtonContainer>
          <GBButton onClick={onClickShare}>
            <Icons.SvgElement.uploadIcon />
          </GBButton>
        </ShareButtonContainer>
      </TitleContainer>
      <SubTitleText>{`평균 ${timeCost}분`}</SubTitleText>

      {transportInfoArray.map((item, index) => {
        return (
          <React.Fragment key={`${item.timeCost} + ${index}`}>
            <TransportInfoBar
              index={index}
              orderOfRoute={index + 1}
              totalTimeCost={item.timeCost}
              numberOfTransfer={item.numberOfTransfer}
              transportation={item.transportation}
            />
            {index !== transportInfoArray.length ? <Divider /> : null}
          </React.Fragment>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 320px;
  height: 254px;
  padding: 20px;
  background: #fff;
  border-radius: 18px;
  box-sizing: border-box;
  position: relative;
`;

const SwipeUpBar = styled.div`
  position: absolute;
  top: 10px;
  left: 45%;
  width: 32px;
  height: 6px;
  border-radius: 3px;
  background-color: #dbdbdb;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 20px;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const ShareButtonContainer = styled.div``;

const TitleText = styled.p`
  font-size: 14px;
  font-weight: 800;
`;

const SubTitleText = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #9e9e9e;
  padding-bottom: 14px;
`;

const Divider = styled.div`
  border: 0.5px solid #f5f5f5;
  height: 0px;
`;

export default React.memo(MidPointInfoCard);
