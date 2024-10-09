"use client";

import { Map } from "@/components/map-gl/map";
import { Panel } from "@/components/map-gl/panel";
import {
  CenterOfMap,
  DefaultZoomControls,
} from "@/components/map-gl/zoom-control";
import SideBar from "./_components/side-bar";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="w-full h-screen fixed">
      {/* <div className="w-full h-10 border-b-[1px]">
        <div className="max-w-7xl mx-auto h-full w-full flex justify-between items-center">
          <p className="font-bold">eTraffic</p>
          <ModeToggle />
        </div>
      </div> */}
      <div className="w-full flex">
        <SideBar />
        <Map
          initialViewState={{
            longitude: 80.2,
            latitude: 12.9,
            zoom: 8,
          }}
        >
          {/* <MapMarker /> */}

          <Panel position="right-bottom">
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
      </div>
    </div>
  );
}
