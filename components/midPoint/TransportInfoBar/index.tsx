import React from "react";
import styled, { useTheme } from "styled-components";

import { GBText } from "@/components/base";
import { Icons } from "@/public/icon";

interface IProps {
  orderOfRoute: number;
  totalTimeCost: number;
  numberOfTransfer?: number;
  timeCostOfPublicTransfer?: number;
  timeCostOfCar?: number;
}

function TransportInfoBar({
  orderOfRoute,
  totalTimeCost,
  numberOfTransfer,
  timeCostOfPublicTransfer,
  timeCostOfCar,
}: IProps) {
  const theme = useTheme();

  return (
    <Container>
      <OrderContainer>
        <GBText color={theme.colors.white}>{orderOfRoute}</GBText>
      </OrderContainer>
      <GBText>{`${totalTimeCost}분`}</GBText>
      <GBText>{`환승 ${numberOfTransfer}회`}</GBText>
      <Icons.SvgElement.subwayIcon width={20} height={20} />
      <GBText>{`${timeCostOfPublicTransfer}분`}</GBText>
      <Icons.SvgElement.busIcon width={20} height={20} />
    </Container>
  );
}

export default React.memo(TransportInfoBar);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  margin: 6px 0px;
`;

const OrderContainer = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #9e9e9e;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;
