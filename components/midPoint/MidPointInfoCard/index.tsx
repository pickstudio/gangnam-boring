import React from "react";
import styled from "styled-components";

import { Icons } from "@/public/icon";
import TransportInfoBar from "../TransportInfoBar";
import { GBButton } from "@/components/base";

interface IProps {
  title: string;
  timeCost: number;
  transportInfoArray: ITransportInfo[];
  onClickShare: () => void;
}

interface ITransportInfo {
  totalTimeCost: number;
  numberOfTransfer?: number;
  timeCostOfPublicTransfer?: number;
  timeCostOfCar?: number;
}

function MidPointInfoCard({
  title,
  timeCost,
  transportInfoArray,
  onClickShare,
}: IProps) {
  return (
    <Container>
      <TitleContainer>
        <TitleText>{title}</TitleText>
        <ShareButtonContainer>
          <GBButton onClick={onClickShare}>
            <Icons.SvgElement.uploadIcon />
          </GBButton>
        </ShareButtonContainer>
      </TitleContainer>
      <SubTitleText>{`평균 이동 시간 ${timeCost}분`}</SubTitleText>
      {transportInfoArray.map((item, index) => {
        return (
          <>
            <TransportInfoBar
              key={`${item.totalTimeCost} + ${index}`}
              orderOfRoute={index + 1}
              totalTimeCost={item.totalTimeCost}
              numberOfTransfer={item.numberOfTransfer}
              timeCostOfPublicTransfer={item.timeCostOfPublicTransfer}
              timeCostOfCar={item.timeCostOfCar}
            />
            {index !== transportInfoArray.length ? <Divider /> : null}
          </>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 280px;
  height: 154px;
  padding: 20px;
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
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
