import { Metadata } from 'next';

export async function generateMetadata({ params, searchParams }: any): Promise<Metadata> {
  return {
    title: `이번엔 {${searchParams['place'] ?? ''}} ㅇㄸ?`,
    description: '장소가 마음에 들지 않는다면 클릭해서 다시 찾기',
    openGraph: {
      title: `이번엔 {${searchParams['place'] ?? ''}} ㅇㄸ?`,
      description: '장소가 마음에 들지 않는다면 클릭해서 다시 찾기',
      url: `https://boring.dododot.net/suggest?place=${searchParams['place'] ?? ''}&enPlace=${
        searchParams['enPlace'] ?? ''
      }`,
      images: [
        {
          url: `/suggest/og?place=${searchParams['place'] ?? ''}&enPlace=${
            searchParams['enPlace'] ?? ''
          }`
        }
      ]
    }
  };
}

function SuggestPage({ params }: any) {
  return <div />;
}

export default SuggestPage;
