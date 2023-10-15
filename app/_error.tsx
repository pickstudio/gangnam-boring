import { GBLayout, GBText } from "@/components/base";
import { Icons } from "@/public/icon";
import { NextPage } from "next";
import { useRouter } from "next/router";

import styled from "styled-components";

const ReUsingError: NextPage = () => {
  const router = useRouter();
  return (
    <GBLayout>
      <Container>
        <Icons.SvgElement.bombIcon />
        <CreateLinkButton>
          <GBText fontFamily="GmarketSansMedium" body03 color="white">
            {"새로운 링크 만들기"}
          </GBText>
        </CreateLinkButton>
        <HomeButton onClick={() => router.push("/")}>
          <GBText fontFamily="GmarketSansMedium" body03 color="black">
            {"홈으로 가기"}
          </GBText>
        </HomeButton>
      </Container>
    </GBLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const CreateLinkButton = styled.div`
  width: 220px;
  height: 52px;
  border-radius: 36px;
  background-color: black;
  margin-top 20px;
  display:flex;
  align-items: center;
  justify-content : center;
  cursor : pointer;
`;

const HomeButton = styled.div`
width: 220px;
height: 52px;
margin-top 8px;
display:flex;
align-items: center;
justify-content : center;
cursor : pointer;
`;
export default ReUsingError;
