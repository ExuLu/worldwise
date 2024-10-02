import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './Map.module.css';

const Map = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate('form');
      }}
    >
      <h1>Map</h1>

      {lat && lng && (
        <h2>
          Position: {lat}, {lng}
        </h2>
      )}
      <button onClick={() => setSearchParams({ lat: 23, lng: 51 })}>
        Change position
      </button>
    </div>
  );
};

export default Map;
