import * as React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  color?: string;
}

function GBButton({ children, onClick, color = "#FFF" }: IProps) {
  return (
    <Container onClick={onClick} color={color}>
      {children}
    </Container>
  );
}

export default React.memo(GBButton);

const Container = styled.button<{ color: string }>`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  box-sizing: border-box;
  background: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.gray100};
`;
