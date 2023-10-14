import { GBLayout, GBText } from "@/components/base";
import { Icons } from "@/public/icon";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Custom404() {
  const [hasBefore, setHasBefore] = useState<boolean>(false);

  const storage = globalThis?.sessionStorage;
  const router = useRouter();

  useEffect(() => {
    if (storage.getItem("prevPath")) {
      setHasBefore(true);
    } else {
      setHasBefore(false);
    }
  }, [storage]);

  useEffect(() => {
    console.log(history);
  }, []);
  return (
    <GBLayout>
      <Container>
        <Icons.SvgElement.kukudasIcon />
        <RefreshButton onClick={() => location.reload()}>
          <GBText fontFamily="GmarketSansMedium" body03 color="white">
            {"새로고침"}
          </GBText>
        </RefreshButton>
        {hasBefore && (
          <BeforePageButton
            onClick={() => router.push(storage.getItem("prevPath") || "/")}
          >
            <GBText fontFamily="GmarketSansMedium" body03 color="black">
              {"이전페이지로"}
            </GBText>
          </BeforePageButton>
        )}
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

const RefreshButton = styled.div`
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

const BeforePageButton = styled.div`
width: 220px;
height: 52px;
margin-top 8px;
display:flex;
align-items: center;
justify-content : center;
cursor : pointer;
`;

export default Custom404;
