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
        <Icons.SvgElement.randomTitleImage />
        <Icons.SvgElement.randomSubTitleImage />
      </ImageContainer>

      <BoxContainer>
        <ButtonContainer>
          <CopyToClipboard text={url}>
            <Icons.SvgElement.shareBtnImage />
          </CopyToClipboard>
        </ButtonContainer>
        <ButtonContainer>
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

const BoxContainer = styled.div`
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

export default React.memo(RandomTabContainer);
