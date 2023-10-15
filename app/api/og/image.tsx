import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge'
};

export default async function handler(req: NextRequest) {
  try {
    const font = await fetch(
      new URL(
        '../../../assets/fonts/GmarketSansTTFMedium.ttf',
        //@ts-ignore
        import.meta.url
      )
    ).then((res) => res.arrayBuffer());
    const background = (await fetch(
      new URL(
        '../../../assets/og_background.png',
        //@ts-ignore
        import.meta.url
      )
    ).then((res) => res.arrayBuffer())) as string;
    const deco = (await fetch(
      new URL(
        '../../../assets/og_deco.png',
        //@ts-ignore
        import.meta.url
      )
    ).then((res) => res.arrayBuffer())) as string;
    const { searchParams } = new URL(req.url);
    const fontData = await font;

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            textAlign: 'center',
            alignItems: 'center'
          }}>
          <img width="100%" src={background} style={{ position: 'absolute', zIndex: -10, top: 20 }} />
          <div
            style={{
              fontSize: 64,
              fontFamily: '"GmarketSansMedium"',
              letterSpacing: '-0.025em',
              fontWeight: 700,
              color: 'black',
              marginTop: 180,
              whiteSpace: 'pre-wrap'
            }}>{`${searchParams.get('place') ?? ''}\n`}</div>
          <div
            style={{
              fontSize: 32,
              fontFamily: '"GmarketSansMedium"',
              letterSpacing: '-0.025em',
              color: '#9E9E9E',
              marginTop: 10,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap'
            }}>{`${searchParams.get('enPlace') ?? ''}`}</div>
          <img width="200" src={deco} style={{ position: 'absolute', bottom: 100 }} />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'GmarketSansMedium',
            data: fontData,
            style: 'normal'
          }
        ]
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}
