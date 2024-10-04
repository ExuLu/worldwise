import { Link } from 'react-router-dom';
import formatDate from '../utils/dateFormatting';
import styles from './CityItem.module.css';
import PropTypes from 'prop-types';
import { useCities } from '../contexts/CitiesContext';

const CityItem = ({ city }) => {
  const { currentCity } = useCities();

  const isCurrentCity = currentCity.id === city.id;

  const {
    cityName,
    emoji,
    date,
    id,
    position: { lat, lng },
  } = city;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          isCurrentCity && styles['cityItem--active']
        }`}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.object,
};

export default CityItem;
