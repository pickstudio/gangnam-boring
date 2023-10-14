import React from "react";
import styled from "styled-components";

import { Icons } from "@/public/icon";

interface IProps {
  type: string;
}

function DirectionButton({ type }: IProps) {
  return (
    <Direction>
      {type === "left" ? (
        <Icons.SvgElement.yellowArrowIcon />
      ) : (
        <Icons.SvgElement.pinkArrowIcon />
      )}
    </Direction>
  );
}

export default React.memo(DirectionButton);

const Direction = styled.div`
  display: flex;
  justify-content: center;

  width: 112px;
  height: 117px;
  margin: 0 26px 0 26px;
`;
