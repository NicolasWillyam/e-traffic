"use client";
import React from "react";
import MapGl, { Map as MapProps, useMap } from "react-map-gl";

export type ViewState = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

type MapProps = React.ComponentProps<typeof MapGl>;

type IMapProps = MapProps & { height?: string };

export const Map = ({ height = "calc(100vh)", ...props }: IMapProps) => {
  return (
    <MapGl
      {...props}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken="pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ"
      style={{ height, width: "calc(100vw - 360px)" }}
      pitch={22.5}
      scrollZoom={false}
      doubleClickZoom={false}
      initialViewState={{ latitude: 20, longitude: 78, zoom: 9 }}
    >
      <StyleMap />
      {props.children}
    </MapGl>
  );
};

export const StyleMap = () => {
  const { current } = useMap();

  current?.on("style.load", () => {
    current?.getMap().setFog({
      color: "rgb(250,250,250)", // Lower atmosphere
      range: [1, 10],
      "high-color": "rgb(200,200,200)", // Upper atmosphere
      "horizon-blend": 0.05, // Atmosphere thickness (default 0.2 at low zooms)
      "space-color": "rgb(150, 150, 150)", // Background color
      "star-intensity": 0.5, // Background star brightness (default 0.35 at low zoooms )
    });
  });
  return null;
};
