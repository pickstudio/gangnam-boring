import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

interface IProps {
  list: { label: string; id: string }[];
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
}

function MenuTab({ list, onClick }: IProps) {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const onClickHandler = useCallback(
    (e: any, i: number) => {
      setCurrentTab(i);
      onClick(e);
    },
    [onClick]
  );
  return (
    <Container>
      {list.map((item, i) => (
        <Tab
          id={item.id}
          key={item.id}
          onClick={(e) => onClickHandler(e, i)}
          isCurrent={i === currentTab && true}
        >
          {item.label}
        </Tab>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 56px;
  background-color: #fff0da;

  justify-content: center;
`;

const commonTabStyle = css`
  width: 170px;
  display: flex;
  font-size: 18px;
  font-family: "GmarketSansMedium";
  align-items: center;
  justify-content: center;
`;

const currentTabStyle = css`
  font-weight: bold;
  background-color: #ffe977;
  border: 2px solid black;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const defaultTabStyle = css`
  background-color: #fff0da;
`;

const Tab = styled.div<{ isCurrent?: boolean }>`
  ${commonTabStyle}
  ${(props) => (props.isCurrent ? currentTabStyle : defaultTabStyle)}
  cursor :pointer;
`;

export default React.memo(MenuTab);
