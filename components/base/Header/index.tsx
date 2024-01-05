"use client";

import React from "react";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import { Icons } from "@/public/icon";
import { HEADER_CONFIG } from "@/config";
import { GBText } from "@/components/base";

export interface IProps {
  logo?: boolean;
  headerLeftIcon?: boolean;
  headerRightIcon?: boolean;
  headerMyPageIcon?: boolean;
}

function Header({
  logo = false,
  headerLeftIcon,
  headerRightIcon,
  headerMyPageIcon,
}: IProps) {
  const pathname = usePathname();
  const router = useRouter();

  const basicPath = "/" + pathname.split("/")[1];
  const title = HEADER_CONFIG[basicPath]?.name ?? "";

  return (
    <Container>
      {logo ? (
        <LogoImage />
      ) : (
        <ContentContainer>
          <IconContainer onClick={() => router.back()}>
            {headerLeftIcon && <Icons.SvgElement.leftArrowIcon />}
          </IconContainer>
          <TitleContainer>
            <GBText body01>{title}</GBText>
          </TitleContainer>
          <IconContainer>
            {headerRightIcon && <Icons.SvgElement.uploadIcon />}
          </IconContainer>
        </ContentContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: none;
  max-width: 768px;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 768px;
  width: 100%;
  height: 44px;
  padding: 0px 24px;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  padding-top: 2px;
`;

const LogoImage = styled(Icons.SvgElement.horizontalLogo)`
  height: 34px;
  margin: 20px 20px 20px;
`;

export default React.memo(Header);
