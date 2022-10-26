import React, {createContext, useState} from 'react';

export const MapContext = createContext();

export const MapProvider = (props) => {
    const [ipData, setIpData] = useState()
  return (
    <MapContext.Provider value={[ipData, setIpData]}>
        {props.children}
    </MapContext.Provider>
  )
};