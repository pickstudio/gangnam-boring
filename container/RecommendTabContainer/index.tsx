import { GBButton, GBText } from "@/components/base";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Icons } from "@/public/icon";

function RandomTabContainer(): React.ReactElement {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setUrl(location.href);
  }, []);

  return (
    <Container>
      <ImageContainer>
        <Icons.SvgElement.startImage />
        <Icons.SvgElement.togetherAddImage />
      </ImageContainer>
      <DepartureBox>{<GBText body03>{"일이삼사"}</GBText>}</DepartureBox>
      <DepartureBox>{<GBText body03>{"일이삼사"}</GBText>}</DepartureBox>
      <BoxContainer>
        <ButtonContainer>
          {/* <CopyToClipboard text={url}></CopyToClipboard> */}
        </ButtonContainer>
        <ButtonContainer>
          <Icons.SvgElement.recommendBtnImage />
        </ButtonContainer>
      </BoxContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;

  min-height: 502px;
  flex-direction: column;
  align-items: center;
  background-color: white;

  padding: 0 18px;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 24px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const DepartureBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1.5px solid black;
  border-radius: 32px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 48px;
`;

export default React.memo(RandomTabContainer);
