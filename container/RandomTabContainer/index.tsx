import { GBButton, GBText } from "@/components/base";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CopyToClipboard } from "react-copy-to-clipboard";

function RandomTabContainer(): React.ReactElement {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setUrl(location.href);
  }, []);

  return (
    <Container>
      <TextContainer>
        <GBText fontFamily="UhBeeSe_hyun" title01 color="white">
          {"두근두근!"}
        </GBText>
        <GBText fontFamily="EF_jejudoldam" headline01>
          {"약속장소 랜덤뽑기"}
        </GBText>
      </TextContainer>
      <StationBox color="white">
        <GBText color="white" body01 fontFamily="GmarketSansMedium">
          {"홍대입구역"}
        </GBText>
      </StationBox>
      <BoxContainer>
        <CopyToClipboard text={url}>
          <GBButton color="white">{"친구에게 공유하기"}</GBButton>
        </CopyToClipboard>
        <GBButton color="white">{"다시뽑기"}</GBButton>
      </BoxContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: #e9e9e9;
  height: 90%;
  padding: 32px 60px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StationBox = styled.div`
  width: 86px;
  text-align: center;
  border-radius: 20px;
  background-color: #757575;
  padding: 7px 16px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
`;

export default React.memo(RandomTabContainer);
