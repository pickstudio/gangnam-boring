import React, { useCallback, useState } from "react";
import styled from "styled-components";

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

const Tab = styled.div<{ isCurrent?: boolean }>`
  display: flex;
  flex: 1;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border-top-right-radius: ${(props) => props.id === "0" && "12px"};
  border-top-left-radius: ${(props) => props.id !== "0" && "12px"};
  border-top-left-radius: 12px;
  background-color: ${(props) => (props.isCurrent ? "#e9e9e9" : "white")};
  color: ${(props) => (props.isCurrent ? "#424242" : "#BDBDBD")};
`;

export default React.memo(MenuTab);
