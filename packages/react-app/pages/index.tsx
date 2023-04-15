//import dynamic from "next/dynamic";
import {useState, useMemo} from 'react';
import React from "react";
import Map, {Marker, Popup} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

//import ControlPanel from '../components/Map/control-panel';
//import Pin from '../components/Map/pin';

export default function Home() {
    const [popupInfo, setPopupInfo] = useState(null);

    const longitude:number = 138.90678;
    const latitude:number = 35.17394;
    const zoom:number = 16;
    const miso_img:string = '/images/images.jpg';

    // @ts-ignore
    // @ts-ignore
    return (
    <div>
        <Map
            initialViewState={{
                longitude: longitude,
                latitude: latitude,
                zoom: zoom,
            }}
            mapLib={maplibregl}
            style={{ width: '100vw', height: '100vh' }}
            mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
        >
            <Marker
                longitude={longitude}
                latitude={latitude}
                anchor="bottom"
                onClick={e => {
                    // If we let the click event propagates to the map, it will immediately close the popup
                    // with `closeOnClick: true`
                    e.originalEvent.stopPropagation();
                    // @ts-ignore
                    setPopupInfo("susono");
                }}
            >
            </Marker>
            {popupInfo && (
                <Popup
                    anchor="top"
                    longitude={Number(longitude)}
                    latitude={Number(latitude)}
                    closeButton={false}
                    offset={[0, -10]}
                    onClose={() => setPopupInfo(null)}
                >
                    <div>
                        <table border="1">
                            <tr>
                                <td colspan="2"><img width="80px" src={miso_img} /></td>
                            </tr>
                            <tr>
                                <th>type</th>
                                <td>Shiro MISO</td>
                            </tr>
                            <tr>
                                <th>place</th>
                                <td>Susono City</td>
                            </tr>
                        </table>
                    </div>

                </Popup>
            )}
        </Map>
    </div>
  )
}
