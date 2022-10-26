import React, { useContext } from 'react';
import "../App.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapContext} from "../MapContext";


const StreetMap = () => {
  const position = [37.38605, -122.08385]

  return (
    <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> 
        </MapContainer>
    </div>
  )
}

export default StreetMap