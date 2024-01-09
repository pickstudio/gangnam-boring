import React from "react";
import styled, { useTheme } from "styled-components";

import { GBText } from "@/components/base";
import { Icons } from "@/public/icon";

interface IProps {
  index: number;
  orderOfRoute: number;
  totalTimeCost: number;
  numberOfTransfer?: number;
  transportation: "BUS" | "SUBWAY";
}

function TransportInfoBar({
  index,
  orderOfRoute,
  totalTimeCost,
  numberOfTransfer,
  transportation,
}: IProps) {
  const theme = useTheme();
  const color = [
    // index별 주요 색상 (0~9)
    "#FFD600",
    "#FF9100",
    "#FF3D00",
    "#F50057",
    "#D500F9",
    "#651FFF",
    "#2979FF",
    "#00B0FF",
    "#00E5FF",
    "#00E676",
  ];

  const currentColor = color[index % 10]; // 10개 아이템씩 색상 반복됨.
  const subwayIconColor =
    transportation === "SUBWAY" ? currentColor : "#DBDBDB";
  const busIconColor = transportation === "BUS" ? currentColor : "#DBDBDB";

  return (
    <Container>
      <RowWrapper>
        <IndexContainer backgroundColor={currentColor}>
          <GBText color={theme.colors.white} caption01>
            {orderOfRoute}
          </GBText>
        </IndexContainer>
        <TextWrapper>
          <GBText body03 color={theme.colors.gray60}>
            {`${totalTimeCost}분`}
          </GBText>
        </TextWrapper>
      </RowWrapper>
      <RowWrapper>
        <TextWrapper>
          <GBText caption03 color={theme.colors.gray20}>
            {`환승 ${numberOfTransfer}회`}
          </GBText>
        </TextWrapper>
        <SubwayIcon width={20} height={20} color={subwayIconColor} />
        <BusIcon width={20} height={20} color={busIconColor} />
      </RowWrapper>
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

const IndexContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  width: 20px;
  max-height: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  padding-top: 2px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TextWrapper = styled.div`
  padding-top: 1px;
`;

const SubwayIcon = styled(Icons.SvgElement.subwayIcon)<{ color: string }>`
  margin-left: 8px;
  & path {
    fill: ${(props) => props.color};
  }
`;
const BusIcon = styled(Icons.SvgElement.busIcon)<{ color: string }>`
  margin-left: 8px;
  & path {
    fill: ${(props) => props.color};
  }
`;
