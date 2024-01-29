import { WayToStationType } from "@/interface/api/midPoint";

import "./index.css";

interface IProps {
  centerLatLng: ILatLng;
  waysToStation: WayToStationType[];
}

interface ILatLng {
  latitude: number;
  longitude: number;
}
import MapMarker from "../../../public/icon/ic_upload.svg";
import { MAP_COLOR_CONFIG } from "@/config";

const handleMapOption = (centerLatLng: ILatLng) => {
  if (typeof window === "undefined") return;
  const container = document.getElementById("map");
  const options = {
    center: new window.kakao.maps.LatLng(
      centerLatLng.latitude,
      centerLatLng.longitude
    ),
  };

  return new window.kakao.maps.Map(container, options);
};

const handleStartPoint = (LatLng: ILatLng, index: number) => {
  var content = `<div class="overlay class${index}">
  <span>${index + 1}</span></div>`;

  var position = new window.kakao.maps.LatLng(
    LatLng.latitude,
    LatLng.longitude
  );

  return new window.kakao.maps.CustomOverlay({
    position: position,
    content: content,
  });
};

const handleCenterMarker = (centerLatLng: ILatLng) => {
  var imageSrc = "./images/img_map_marker.png";
  var imageSize = new window.kakao.maps.Size(22, 32);
  var imageOption = { offset: new window.kakao.maps.Point(10, 35) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  const markerImage = new window.kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  const markerPosition = new window.kakao.maps.LatLng(
    centerLatLng.latitude,
    centerLatLng.longitude
  );

  return new window.kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });
};

interface IWayLineProps {
  startPoint: ILatLng;
  endPoint: ILatLng;
  index: number;
}

const handleWayLine = ({ startPoint, endPoint, index }: IWayLineProps) => {
  var linePath = [
    new window.kakao.maps.LatLng(startPoint.latitude, startPoint.longitude),
    new window.kakao.maps.LatLng(endPoint.latitude, endPoint.longitude),
  ];

  // 지도에 표시할 선을 생성합니다
  return new window.kakao.maps.Polyline({
    path: linePath, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 7, // 선의 두께 입니다
    strokeColor: MAP_COLOR_CONFIG[index], // 선의 색깔입니다
    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: "solid", // 선의 스타일입니다
  });
};

export const onLoadKakaoMap = ({ centerLatLng, waysToStation }: IProps) => {
  window.kakao.maps.load(() => {
    const map = handleMapOption(centerLatLng);

    const marker = handleCenterMarker(centerLatLng);
    // var customOverlay = handleCenterOverlay(centerLatLng);

    marker.setMap(map);

    waysToStation.map((item, idx) => {
      var customOverlay = handleStartPoint(item.startPointLatLng, idx);
      var polyline = handleWayLine({
        startPoint: item.startPointLatLng,
        endPoint: centerLatLng,
        index: idx,
      });

      customOverlay.setMap(map);
      polyline.setMap(map);
    });
  });
};
