"use client";

import { Map } from "../components/map-gl/map";
import { Panel } from "../components/map-gl/panel";
import {
  CenterOfMap,
  DefaultZoomControls,
} from "../components/map-gl/zoom-control";

export default function Home() {
  return (
    <Map
      initialViewState={{
        longitude: 80.2,
        latitude: 12.9,
        zoom: 8,
      }}
    >
      {/* <MapMarker /> */}

      <Panel position="left-top">
        {/* <SearchBox
          onChange={({ lat, lng }) => {
            setValue("address.lat", lat, { shouldValidate: true });
            setValue("address.lng", lng, { shouldValidate: true });
          }}
        /> */}
        <DefaultZoomControls>
          <CenterOfMap
            onClick={(latLng) => {
              const lat = parseFloat(latLng.lat.toFixed(6));
              const lng = parseFloat(latLng.lng.toFixed(6));

              // setValue("address.lat", lat, { shouldValidate: true });
              // setValue("address.lng", lng, { shouldValidate: true });
            }}
          />
        </DefaultZoomControls>
      </Panel>
    </Map>
  );
}
