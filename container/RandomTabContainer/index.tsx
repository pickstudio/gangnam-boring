import { GBButton, GBText } from "@/components/base";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SlotCounter, { SlotCounterRef } from "react-slot-counter";
import "./index.css";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Icons } from "@/public/icon";

import Api from "@/api/Api";

function RandomTabContainer(): React.ReactElement {
  const [url, setUrl] = useState<string>("");
  const counterRef = useRef<SlotCounterRef>(null);

  const dummyCharacters = [
    <SlotTextContainer key={0}>
      <GBText headline02>{"강남역"}</GBText>
      <GBText body02 color={"#9E9E9E"}>
        {"GangNam"}
      </GBText>
    </SlotTextContainer>,
    <SlotTextContainer key={1}>
      <GBText headline02>{"홍대입구역"}</GBText>
      <GBText body02 color={"#9E9E9E"}>
        {"Hongik Univ."}
      </GBText>
    </SlotTextContainer>,
    <SlotTextContainer key={2}>
      <GBText headline02>{"성수역"}</GBText>
      <GBText body02 color={"#9E9E9E"}>
        {"Seongsu"}
      </GBText>
    </SlotTextContainer>,
    <SlotTextContainer key={3}>
      <GBText headline02>{"압구정로데오역"}</GBText>
      <GBText body02 color={"#9E9E9E"}>
        {"Apgujeong Rodeo"}
      </GBText>
    </SlotTextContainer>,
  ];

  const getRandomStation = async () => {
    const data = await Api.shared.getRandomStation();
    console.log("1", data);
  };

  const onClick = () => {
    counterRef.current?.startAnimation();
  };

  useEffect(() => {
    setUrl(location.href);
    getRandomStation();
  }, []);

  return (
    <Container>
      <ImageContainer>
        <Icons.SvgElement.randomTitleImage />
        <Icons.SvgElement.randomSubTitleImage />
      </ImageContainer>
      <IconContainer>
        <Icons.SvgElement.okayImage />
      </IconContainer>
      <BodyContainer>
        <IconContainer>
          <Icons.SvgElement.stationImage />
        </IconContainer>
        <SlotContainer>
          <SlotCounter
            charClassName={"slot-char"}
            ref={counterRef}
            startValueOnce={true}
            autoAnimationStart={false}
            // startValue={[
            //   <SlotContainer key={"1"}>
            //     <GBText>강남역</GBText>
            //     {/* <GBText>GangNam Station</GBText> */}
            //   </SlotContainer>,
            // ]}
            value={[
              <SlotTextContainer key={1}>
                <GBText headline02>{"동대문역사문화공원역"}</GBText>
                <GBText body02 color={"#9E9E9E"}>
                  {"Dongdaemun Hisotry & Culture Park"}
                </GBText>
              </SlotTextContainer>,
            ]}
            dummyCharacters={dummyCharacters}
          ></SlotCounter>
        </SlotContainer>
      </BodyContainer>

      <BoxContainer>
        <ButtonContainer>
          {/* <CopyToClipboard text={url}></CopyToClipboard> */}
        </ButtonContainer>
        <ButtonContainer onClick={onClick}>
          <Icons.SvgElement.restartBtnImage />
        </ButtonContainer>
      </BoxContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 52px;
`;

const BodyContainer = styled.div`
  margin-top: 4px;
  display: flex;
  height: 134px;
  flex-direction: column;
`;

const BoxContainer = styled.div`
  margin-top: 92px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 140px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

const SlotContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 100px;
`;
const IconContainer = styled.div`
  display: flex;
`;

const SlotTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default React.memo(RandomTabContainer);
