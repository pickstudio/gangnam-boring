import { GBText } from "@/components/base";
import { Icons } from "@/public/icon";
import Link from "next/link";

import React from "react";
import styled from "styled-components";

interface IProps {
  departure: string;
  canDelete: boolean;
  href: string;
  onClickDelete: () => void;
}

function DepartureBar({ departure, canDelete, href, onClickDelete }: IProps) {
  const isEmpty = !departure;

  return (
    <BarContainer>
      <Container $isEmpty={isEmpty} href={href}>
        <GBText body04 color={isEmpty ? "#9E9E9E" : "#000000"}>
          {isEmpty ? "어디서 출발함?" : departure}
        </GBText>
      </Container>
      {canDelete && <DeleteButton onClick={onClickDelete} />}
    </BarContainer>
  );
}

export default React.memo(DepartureBar);

const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  box-sizing: border-box;
  overflow: visible;
`;

const Container = styled(Link)<{ $isEmpty: boolean }>`
  display: flex;
  flex: 1;
  min-height: 48px;
  height: 48px;

  align-items: center;
  box-sizing: border-box;
  border: 1.5px solid ${(props) => (props.$isEmpty ? "#dbdbdb" : "#3e3e3e")};
  border-radius: 32px;
  text-decoration: none;

  padding-left: 20px;
  padding-right: 20px;
`;

const DeleteButton = styled(Icons.SvgElement.deleteIcon)`
  margin-left: 8px;
  width: 32px;
  height: 32px;
`;
