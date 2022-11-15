import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_LOCATION } from "../../store/constants/map.const";
import "./SearchBox.css";
const OSM_API_URL = "https://nominatim.openstreetmap.org/search";
const SearchBox = ({ onChangeStreet, onChangeLongitude, onChangeLatitude }) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [listAddress, setListAddress] = useState([]);
  const handleSearch = async (keyword) => {
    const params = {
      q: keyword,
      format: "json",
      addressdetails: 1,
    };

    const paramsString = new URLSearchParams(params).toString();
    console.log(paramsString);
    const options = {
      method: "GET",
      redirect: "follow",
    };

    const url = `${OSM_API_URL}?${paramsString}`;
    fetch(url, options)
      .then((res) => res.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setListAddress(JSON.parse(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSelectAddress = (obj) => {
    const address = {
      address: obj.display_name,
      longitude: obj.lon,
      latitude: obj.lat,
    };
    onChangeStreet(obj.display_name);
    onChangeLongitude(parseInt(obj.lon));
    onChangeLatitude(parseInt(obj.lat));
    dispatch({
      type: SET_LOCATION,
      payload: address,
    });
    // setSearchText("");
    setListAddress([]);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchText);
    }, 600);

    return () => clearTimeout(timer);
  }, [searchText]);
  return (
    <div className="here-autocomplete">
      <input
        placeholder="Nhập tên đường / tòa nhà"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="Autocomplete" isActive={true}>
        {listAddress.map((item) => (
          <div
            className="LocationItem"
            key={item?.osm_id}
            onClick={() => onSelectAddress(item)}
          >
            <div className="LocationIcon">
              <ion-icon name="location"></ion-icon>
            </div>
            <div className="LocationAddress">{item?.display_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
