"use client";

import * as React from "react";
import styled from "styled-components";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  value: string;
  placeHolder?: string;
  setValue: React.ChangeEventHandler<HTMLInputElement>;
}

function AddressInputBar({ onClick, placeHolder, value, setValue }: IProps) {
  return (
    <Container onClick={onClick}>
      <Input placeholder={placeHolder} value={value} onChange={setValue} />
    </Container>
  );
}

export default React.memo(AddressInputBar);

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  border: 1px solid #616161;
  background: none;
  border-radius: 32px;
  box-sizing: border-box;
  color: #616161;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  caret-color: #ffe977;
  color: #616161;
  &::placeholder {
    color: "#BDBDBD";
  }
  &:focus {
    outline: none;
  }
`;
