import React, { useEffect, useRef } from 'react';

const GoogleMaps = () => {
 const mapRef = useRef(null);

 useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "37.7749";
    let lng = "-122.4194";

    const center = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      center: center,
      disableDefaultUI: true,
    };

    map = new google.maps.Map(map, mapOptions);
 }, []);

 return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
};

export default GoogleMaps;