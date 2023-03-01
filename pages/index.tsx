import React from 'react';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';

import { GBText } from '@/components/base';
import GBLayout from '@/components/base/GBLayout';
import { Icons } from '@/public/icon';
import DirectionButton from '../components/home/DirectionButton';

export default function Home() {
  const iconList = [
    {
      style: { right: 0, top: 70 },
      icon: <Icons.SvgElement.verticalRainbowIcon />
    },
    {
      style: { left: 14, top: 200 },
      icon: <Icons.SvgElement.flowerIcon />
    },
    {
      style: { right: 8, top: 520 },
      icon: <Icons.SvgElement.cylinderIcon />
    },
    {
      style: { right: 32, top: 320 },
      icon: <Icons.SvgElement.blingIcon />
    },
    {
      style: { top: 400 },
      icon: <Icons.SvgElement.rainbowIcon />
    },

  ];
  return (
    <React.Fragment>
      <Head>
        <title>{'강남은 지루해'}</title>
      </Head>
      <GBLayout header headerRightIcon>
        <Container>
          <IconContainer style={{ left: 30 }}>
            <Icons.SvgElement.twistIcon />
          </IconContainer>
          <TextContainer>
            <GBText fontFamily="UhBeeSe_hyun" body01>
              {'우리 또 강남에서 만나?'}
            </GBText>
            <GBText fontFamily="EF_jejudoldam" display01>
              {'강남은지루해'}
            </GBText>
          </TextContainer>
          {iconList.map((item, i) => (
            <IconContainer direction={i % 2} key={i} style={item.style}>
              {item.icon}
            </IconContainer>
          ))}
          <ButtonContainer>
            <ButtonItemContainer>
              <DirectionButton label="정하기가 어려울 땐" />
            </ButtonItemContainer>
            <ButtonItemContainer>
              <DirectionButton label="중간장소가 궁금할 땐" />
            </ButtonItemContainer>
          </ButtonContainer>
        </Container>
      </GBLayout>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(360px);
  }
`;

const moveLeft = keyframes`
   0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-360px);
  }
`;

const IconContainer = styled.div<{ direction?: number }>`
  position: absolute;
  animation: ${({ direction }) => (direction === 1 ? moveLeft : moveRight)} 10s 1s infinite linear alternate;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  text-align: center;
  vertical-align: middle;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonItemContainer = styled.div`
  flex: 1;
`;
