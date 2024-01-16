import Link from "next/link";
import styled from "styled-components";
import GBButton from "../GBButton";
import GBText from "../GBText";

export default function Footer() {
  return (
    <Container>
      <TextContainer>
        <TextButton href={"/midPoint"}>
          <GBText caption02 color="#9E9E9E">
            {"이용약관"}
          </GBText>
        </TextButton>
        <GBText caption01 color="#9E9E9E">
          {"|"}
        </GBText>
        <TextButton href={"/midPoint"}>
          <GBText caption01 color="#9E9E9E">
            {"개인정보처리방침"}
          </GBText>
        </TextButton>
        <GBText caption01 color="#9E9E9E">
          {"|"}
        </GBText>
        <TextButton href={"/midPoint"}>
          <GBText caption02 color="#9E9E9E">
            {"공지사항"}
          </GBText>
        </TextButton>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 96px;
  align-items: center;
  justify-content: center;
`;

const TextButton = styled(Link)`
  padding: 8px 0;
  border: none;
  padding: 8px;
  text-decoration: none;
`;
