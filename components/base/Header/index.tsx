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
  showTitle?: boolean;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
}

function Header({
  logo = false,
  showTitle = true,
  headerLeftIcon,
  headerRightIcon,
  headerMyPageIcon,
  onClickLeftIcon,
  onClickRightIcon,
}: IProps) {
  const pathname = usePathname();
  const router = useRouter();

  const basicPath = "/" + pathname.split("/")[1];
  const title = HEADER_CONFIG[basicPath]?.name ?? "";

  const goBack = () => router.back();

  return (
    <Container>
      {logo ? (
        <LogoImage />
      ) : (
        <ContentContainer>
          <IconContainer onClick={onClickLeftIcon ?? goBack}>
            {headerLeftIcon && <Icons.SvgElement.leftArrowIcon />}
          </IconContainer>
          <TitleContainer>
            {showTitle && <GBText body01>{title}</GBText>}
          </TitleContainer>
          <IconContainer onClick={onClickRightIcon}>
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
  max-width: 768px;
  background-color: rgba(255, 255, 255, 0);
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
