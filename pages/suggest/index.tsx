import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import styled, { keyframes } from 'styled-components';

interface IProps {
  previous: string;
  current: string;
}

function SuggestPage() {
  const searchParams = useSearchParams();

  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`이번엔 {${searchParams.get('place') ?? ''}} ㅇㄸ?`} />
      <meta property="og:description" content={'장소가 마음에 들지 않는다면 클릭해서 다시 찾기'} />
      <meta
        property="og:url"
        content={`https://boring.dododot.net/badge?place=${searchParams.get('place')}&enPlace=${searchParams.get(
          'enPlace'
        )}`}
      />
      <meta
        property="og:image"
        content={`https://boring.dododot.net/api/og/image?place=${searchParams.get(
          'place'
        )}&enPlace=${searchParams.get('enPlace')}`}
      />
    </Head>
  );
}

export default SuggestPage;
