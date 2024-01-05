"use client";

import * as React from "react";
import styled from "styled-components";

import { Icons } from "@/public/icon";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  value: string;
  placeHolder?: string;
  setValue: React.ChangeEventHandler<HTMLInputElement>;
  clearSearchKeyword: () => void;
}

function AddressInputBar({
  onClick,
  placeHolder,
  value,
  setValue,
  clearSearchKeyword,
}: IProps) {
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClockClearButton = () => {
    clearSearchKeyword();
    inputRef.current && inputRef.current.focus();
  };

  const handleInputFocus = (currentFocused: boolean) => () => {
    setTimeout(() => {
      setFocused(currentFocused);
    }, 0);
  };

  return (
    <Container onClick={onClick}>
      <Input
        placeholder={placeHolder}
        ref={inputRef}
        onFocus={handleInputFocus(true)}
        onBlur={handleInputFocus(false)}
        value={value}
        onChange={setValue}
      />
      {focused && value && <IconImage onClick={onClockClearButton} />}
    </Container>
  );
}

export default React.memo(AddressInputBar);

const Container = styled.div`
  display: flex;
  box-sizing: border-box;

  width: 100%;
  height: 48px;
  padding: 0 20px;

  align-items: center;
  background: none;
  color: #616161;

  border-radius: 32px;
  border: 1px solid #dbdbdb;

  &:focus-within {
    outline: 1px solid #3e3e3e;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  caret-color: #ffe977;
  color: #616161;
  &::placeholder {
    color: #9e9e9e;
  }
  &:focus {
    outline: none;
  }
`;

const IconImage = styled(Icons.SvgElement.closeIcon)`
  width: 20px;
  height: 20px;
  margin-left: 12px;
  & rect {
    fill: #455b92;
  }
  & path {
    fill: #fff;
  }
`;
