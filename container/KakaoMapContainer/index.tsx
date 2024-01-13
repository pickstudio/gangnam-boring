import { MidPointAPIResponseType } from "@/interface/api/midPoint";
import { onLoadKakaoMap } from "@/lib/utils/onLoadKakaoMap";
import * as React from "react";

import styled from "styled-components";

interface MidPointListProps {
  wayInfo: MidPointAPIResponseType;
}

const mapScript = document.createElement("script");

mapScript.async = true;
mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

function KakaoMapContainer({ wayInfo }: MidPointListProps) {
  const loadKakaoMap = () => {
    onLoadKakaoMap({ centerLatLng: wayInfo.midPointLatLng });
  };

  React.useEffect(() => {
    document.head.appendChild(mapScript);

    mapScript.addEventListener("load", loadKakaoMap);
    return () => mapScript.removeEventListener("load", loadKakaoMap);
  }, []);

  return <MapContainer id="map" />;
}

export default KakaoMapContainer;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
