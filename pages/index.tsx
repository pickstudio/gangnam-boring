import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <Container></Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  border: 1px solid black;
  width: 20px;
  height: 20px;
`;
