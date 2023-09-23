import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Icons } from "@/public/icon";
import { HEADER_CONFIG } from "@/config";
import { GBText } from "@/components/base";

export interface IProps {
  headerLeftIcon?: boolean;
  headerRightIcon?: boolean;
  headerMyPageIcon?: boolean;
}

function Header({ headerLeftIcon, headerRightIcon, headerMyPageIcon }: IProps) {
  const router = useRouter();

  const basicPath = "/" + router.pathname.split("/")[1];
  const title = HEADER_CONFIG[basicPath]?.name ?? "";

  return (
    <Container>
      <ContentContainer>
        <IconContainer onClick={() => router.back()}>
          {/* {headerLeftIcon && <Icons.SvgElement.closeIcon />} */}
        </IconContainer>
        {/* <GBText body01>{title}</GBText> */}
        <IconContainer>
          {headerRightIcon && <Icons.SvgElement.uploadIcon />}
        </IconContainer>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #fff0da;
  max-width: 768px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray10};
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
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default React.memo(Header);
