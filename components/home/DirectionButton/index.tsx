import React from 'react';
import styled from 'styled-components';

import { GBText } from '@/components/base';
import { Icons } from '@/public/icon';

interface IProps {
  label?: string;
}

function DirectionButton({ label = '정하기 어려울 때' }: IProps) {
  return (
    <Container>
      <GBText fontFamily="EF_jejudoldam">{label}</GBText>
      <Direction>
        <Icons.SvgElement.arrowDownIcon  />
      </Direction>
    </Container>
  );
}

export default React.memo(DirectionButton);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Direction = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;
