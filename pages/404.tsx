import { GBLayout, GBText } from "@/components/base";
import { Icons } from "@/public/icon";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

function Custom404() {
  const router = useRouter();
  return (
    <GBLayout>
      <Container>
        <Icons.SvgElement.errorIcon />
        <HomeButton onClick={() => router.push("/")}>
          <GBText fontFamily="GmarketSansMedium" body03 color="white">
            {"홈으로 이동"}
          </GBText>
        </HomeButton>
      </Container>
    </GBLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const HomeButton = styled.div`
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

export default Custom404;
