import { GBText } from "@/components/base";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

interface IProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
  buttonText?: string;
  onClick: () => void;
}

function PopUpCard({ icon, title, description, buttonText, onClick }: IProps) {
  return (
    <Container>
      <IconImage src={icon} alt={"팝업"} />
      <TitleText body01>{title}</TitleText>
      <DescriptionText body04 color="#9E9E9E">
        {description}
      </DescriptionText>
      {buttonText && (
        <ButtonContainer color="#fff" onClick={onClick}>
          <ButtonText color="white" body03>
            {buttonText}
          </ButtonText>
        </ButtonContainer>
      )}
    </Container>
  );
}

export default PopUpCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 312px;
  border-radius: 20px;
  padding: 16px;
  align-items: center;
  background-color: #fff;
`;

const IconImage = styled(Image)`
  width: 126px;
  height: 126px;
`;

const TitleText = styled(GBText)`
  padding: 10px 0;
`;

const DescriptionText = styled(GBText)`
  text-align: center;
  text-vertical-align: center;
`;

const ButtonContainer = styled.button`
  cursor: pointer;
  width: 100%;
  margin: 20px 0 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 36px;
  height: 52px;
  border: none;
`;

const ButtonText = styled(GBText)``;

// CIC, 독립분사, LG 아이들나라 조직 개편
// PO는 맥락이 많으면 안된다.
// 아무것도 안바뀔 수 있는지 장담할 수 있는가
// 개발자는 자유를 꿈꾼다.
