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
  height: 52px;
`;

const commonTabStyle = css`
  display: flex;
  flex: 1;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 12px;
`;

const currentTabStyle = css`
  background-color: #e9e9e9;
  color: #424242;
  border-top-right-radius: 12px;
`;

const defaultTabStyle = css`
  background-color: white;
  color: #bdbdbd;
`;

const Tab = styled.div<{ isCurrent?: boolean }>`
  ${commonTabStyle}
  ${(props) => (props.isCurrent ? currentTabStyle : defaultTabStyle)}
  cursor :pointer;
`;

export default React.memo(MenuTab);
