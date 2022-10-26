import React, { useContext } from 'react';
import "../App.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';


const StreetMap = () => {
  const { data } = useSelector((state) => state.ipReducer);

  const lat = Math.round(data?.location?.lat * 100) / 100 || 51.505
  const lng = Math.round(data?.location?.lng * 100) / 100 || -0.09

  const position = [lat, lng]


  return (
    <div>
        <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    {`${data?.location?.city || "Metaverse"}`}
                </Popup>
            </Marker> 
        </MapContainer>
    </div>
  )
}

export default StreetMap