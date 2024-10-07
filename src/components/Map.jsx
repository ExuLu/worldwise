import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useState } from 'react';
import { useCities } from '../contexts/CitiesContext';
import ChangeCenter from './ChangeCenter';

const Map = () => {
  const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get('lat');
  const mapLng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        // center={mapPosition}
        center={mapLat && mapLng ? [mapLat, mapLng] : mapPosition}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapLat && mapLng ? [mapLat, mapLng] : mapPosition}/>
      </MapContainer>
    </div>
  );
};

export default Map;
