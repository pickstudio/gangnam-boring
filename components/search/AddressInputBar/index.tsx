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
  background: none;
  box-sizing: border-box;
  color: #616161;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  padding: 0 20px;
  border: 1px solid #dbdbdb;
  caret-color: #ffe977;
  color: #616161;
  &::placeholder {
    color: "#9E9E9E";
  }
  &:focus {
    outline: 1px solid #3e3e3e;
  }
`;
