import React from 'react';
import styled from 'styled-components';

import { GBBText } from '../../base';

function DirectionButton() {
  return (
    <Container>
      <GBBText fontFamily="EF_jejudoldam">간장게장</GBBText>
      <Button></Button>
    </Container>
  );
}

export default React.memo(DirectionButton);

const Container = styled.div``;

const Button = styled.div``;
