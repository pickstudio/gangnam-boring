import { GBButton, GBText } from "@/components/base";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Icons } from "@/public/icon";

interface DepartureIProps {
  id: number;
  departure: string;
}

function RecommendTabContainer(): React.ReactElement {
  const defaultArray = [
    {
      id: 0,
      departure: "",
    },
  ];
  const [departureList, setDepartureList] =
    useState<DepartureIProps[]>(defaultArray);

  return (
    <Container>
      <ImageContainer>
        <Icons.SvgElement.departureImage />
        <Icons.SvgElement.togetherAddImage />
      </ImageContainer>
      <BodyContainer>
        {departureList.map((item, index) => (
          <TextBox key={index}>
            {item.departure !== "" ? (
              <GBText fontFamily="GmarketSansMedium" body03 color="#000000">
                {item.departure}
              </GBText>
            ) : (
              <GBText fontFamily="GmarketSansMedium" body03 color="#9E9E9E">
                {"어디서 출발함?"}
              </GBText>
            )}
          </TextBox>
        ))}
      </BodyContainer>

      <BoxContainer>
        <GBButton>
          <Icons.SvgElement.departureAddIcon />
        </GBButton>
        <GBButton>
          <Icons.SvgElement.recommendBtnImage />
        </GBButton>
      </BoxContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
const ImageContainer = styled.div`
  display: flex;
  width: 338px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0 24px 0;
`;
const BodyContainer = styled.div`
  height: 296px;
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 338px;
  height: 48px;
  border: 1.5px solid #dbdbdb;
  padding: 0 20px;
  border-radius: 32px;
  box-sizing: border-box;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export default React.memo(RecommendTabContainer);
