import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl } from "leaflet-geosearch";
import "react-leaflet-geosearch/lib/react-leaflet-geosearch.css";
import L from "leaflet";
const SearchControl = (props) => {
  const map = useMap();

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: props.provider,
      marker: {
        icon: new L.Icon.Default(),
        draggable: true,
      },
      keepResult: true,

      resultFormat: ({ result }) => result.label,
      ...props,
    });
<<<<<<< HEAD
    map.on("geosearch/showlocation", function (e) {
=======
    map.on("geosearch/showlocation/loadmap", function (e) {
>>>>>>> 586fa5afab5cf7dec87222121d59ccc50d506561
      // console.log(e.location);
    });
    map.on("geosearch/marker/dragend", function (e) {
      console.log(e.location);
    });
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map, props]);

  return null;
};
export default SearchControl;
