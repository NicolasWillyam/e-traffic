import { Marker as MarkerGl, MarkerProps } from "react-map-gl";

export const Marker = (props: MarkerProps) => {
  return <MarkerGl {...props} />;
};

// const MapMarker = () => {
//   const { address } = useWatch<FormTypeCreateCinema>();
//   const { setValue } = useFormContext<FormTypeCreateCinema>();

//   return (
//     <Marker
//       pitchAlignment="auto"
//       longitude={address?.lng || 0}
//       latitude={address?.lat || 0}
//       draggable
//       onDragEnd={({ lngLat }) => {
//         const { lat, lng } = lngLat;
//         setValue("address.lat", lat || 0);
//         setValue("address.lng", lng || 0);
//       }}
//     >
//       {/* <BrandIcon /> */}
//     </Marker>
//   );
// };
