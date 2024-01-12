import * as React from "react";

import styled from "styled-components";
import { Icons } from "@/public/icon";
import { Images } from "@/public/images";
import share from "@/lib/utils/client/share";

import GBLayout from "@/components/base/GBLayout";
import { MidPointDummyResponse } from "@/api/dummy/response";
import MidPointListContainer from "@/container/MidPointListContainer";

interface IKakaoMapContainerProps {
  centerLatLng: ILatLng;
}

interface ILatLng {
  latitude: number;
  longitude: number;
}

function KakaoMapContainer({ centerLatLng }: IKakaoMapContainerProps) {
  React.useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            centerLatLng.latitude,
            centerLatLng.longitude
          ),
        };
        const map = new window.kakao.maps.Map(container, options);

        var imageSrc = Images.mapMarker;
        var imageSize = new window.kakao.maps.Size(22, 32);

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize
        );
        const markerPosition = new window.kakao.maps.LatLng(
          centerLatLng.latitude,
          centerLatLng.longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return <MapContainer id="map" />;
}

export default KakaoMapContainer;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
