import * as React from "react";
import styled from "styled-components";

interface IProps {
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  color?: string;
  placeHolder?: string;
}

function AddressInputBar({ onClick, placeHolder }: IProps) {
  return (
    <Container onClick={onClick}>
      <Input placeholder={placeHolder}></Input>
    </Container>
  );
}

export default React.memo(AddressInputBar);

const Container = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  padding: 0px 14px;
  background: none;
  border-width: 1px;
  border-color: #616161;
  border-radius: 8px;
  color: #616161;
`;

const Input = styled.input.attrs({
  placeholderTextColor: "#BDBDBD",
})`
  width: 100%;
  height: 30px;
  border-width: 0px;
  caret-color: #616161;
  color: #616161;
  &:focus {
    outline: none;
  }
`;
