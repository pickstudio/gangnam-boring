"use client";

import { GBLayout, GBText } from "@/components/base";
import { TERM_POLICY } from "@/config";
import styled from "styled-components";

export default function Term() {
  return (
    <GBLayout header headerLeftIcon>
      <Container>
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
      </Container>
    </GBLayout>
  );
}

const Container = styled.div`
  padding: 32px 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
`;

const TitleContainer = styled.div`
  margin-bottom: 8px;
`;
