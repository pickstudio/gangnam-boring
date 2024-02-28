"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import { GBLayout, GBText } from "@/components/base";
import { TERM_POLICY } from "@/config";

import { Icons } from "@/public/icon";

export default function Term() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasBorder, setHasBorder] = useState<boolean>(false);

  const handleScrollView = () => {
    if (Number(containerRef.current?.scrollTop) > 0) setHasBorder(true);
    else setHasBorder(false);
  };

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    containerRef.current?.addEventListener("scroll", handleScrollView);
    return () =>
      containerRef.current?.removeEventListener("scroll", handleScrollView);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{"강남은 지루해 | 이용 약관"}</title>
      </Head>
      <GBLayout header headerLeftIcon>
        {hasBorder && <Divider />}
        <Container ref={containerRef}>
          {TERM_POLICY.map((item, idx) => {
            return (
              <TextContainer key={`${item.title}-${idx}`}>
                <TitleContainer>
                  <GBText body03>{item.title}</GBText>
                </TitleContainer>
                <GBText body07 color="#aaaaaa">
                  {item.content}
                </GBText>
              </TextContainer>
            );
          })}
          {hasBorder && (
            <GoToTopButton onClick={scrollToTop}>
              <Icons.SvgElement.topArrow />
            </GoToTopButton>
          )}
        </Container>
      </GBLayout>
    </React.Fragment>
  );
}

const Divider = styled.hr`
  height: 1px;
  width: 100%;
  background: #dbdbdb;
  border: 0;
  margin: 0;
`;

const Container = styled.div`
  padding: 32px 20px;
  overflow: scroll;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
`;

const TitleContainer = styled.div`
  margin-bottom: 8px;
`;

const GoToTopButton = styled.button`
  position: absolute;
  right: 16px;
  bottom: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  align-items: center;
  justify-content: center;
`;
