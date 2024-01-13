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

const handleMapOption = (centerLatLng: ILatLng) => {
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
  var imageOption = { offset: new window.kakao.maps.Point(10, 25) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

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

interface IMarkerProps {
  position: ILatLng;
  markerImage: string;
}

const handleMarker = (position: ILatLng) => {};

export const onLoadKakaoMap = ({ centerLatLng, waysToStation }: IProps) => {
  window.kakao.maps.load(() => {
    const map = handleMapOption(centerLatLng);

    const marker = handleCenterMarker(centerLatLng);
    // var customOverlay = handleCenterOverlay(centerLatLng);

    marker.setMap(map);

    waysToStation.map((item, idx) => {
      var customOverlay = handleStartPoint(item.startPointLatLng, idx);
      customOverlay.setMap(map);
    });
  });
};
