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

const Container = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  padding: 0px 14px;
  margin-bottom: 24px;
  background: none;
  border-width: 1px;
  border-color: #616161;
  border-radius: 32px;
  color: #616161;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-width: 0px;
  caret-color: #616161;
  color: #616161;
  &::placeholder {
    color: "#BDBDBD";
  }
  &:focus {
    outline: none;
  }
`;
