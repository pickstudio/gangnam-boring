import { GBButton, GBText } from "@/components/base";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Icons } from "@/public/icon";

function RandomTabContainer(): React.ReactElement {
  const [url, setUrl] = useState<string>("");
  const [departureBoxes, setDepartureBoxes] = useState<string[]>([""]);

  useEffect(() => {
    setUrl(location.href);
  }, []);

  const handleAddDepartureBox = () => {
    setDepartureBoxes((prevDepartureBoxes) => [...prevDepartureBoxes, ""]);
  };

  const handleDeleteDepartureBox = (index: number) => {
    console.log(index);
    setDepartureBoxes((prevDepartureBoxes) =>
      prevDepartureBoxes.filter((_, i) => i !== index)
    );
  };

  return (
    <Container>
      <ImageContainer>
        <Icons.SvgElement.startImage />
        <Icons.SvgElement.togetherAddImage onClick={handleAddDepartureBox} />
      </ImageContainer>
      <DepartureContainer>
        {departureBoxes.map((departureBox, index) =>
          index < 2 ? (
            <DepartureBox key={index}>
              <GBText body03>{departureBox}</GBText>
            </DepartureBox>
          ) : (
            <DeleteDepartureContainer key={index}>
              <NewDepartureBox>
                <GBText body03>{departureBox}</GBText>
              </NewDepartureBox>
              <Icons.SvgElement.deleteIcon
                onClick={() => handleDeleteDepartureBox(index)}
              />
            </DeleteDepartureContainer>
          )
        )}
      </DepartureContainer>
      <BoxContainer>
        <ButtonContainer>
          <Icons.SvgElement.departureAddIcon />
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

const DepartureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  min-height: 185px;
  max-height: 296px;
  box-sizing: border-box;
  overflow: auto;
  margin-bottom: 12px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width
  margin-top: auto;

  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  box-sizing: border-box;
`;

const DepartureCommon = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1.5px solid #3e3e3e;
  border-radius: 32px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  min-height: 48px;
  height: 48px;
  overflow: scroll;
`;

const DepartureBox = styled(DepartureCommon)`
  margin-bottom: 20px;
`;

const NewDepartureBox = styled(DepartureCommon)`
  width: calc(100% - 40px);
  margin-right: 8px;
`;

const DeleteDepartureContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export default React.memo(RandomTabContainer);
