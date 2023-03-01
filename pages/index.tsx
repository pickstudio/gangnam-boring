import GBLayout from "@/components/base/GBLayout";
import Head from "next/head";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>{"강남은 지루해"}</title>
      </Head>
      <GBLayout header headerRightIcon>
        <Container></Container>
      </GBLayout>
    </React.Fragment>
  );
}

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
