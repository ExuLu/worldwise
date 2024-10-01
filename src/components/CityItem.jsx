import formatDate from '../utils/dateFormatting';
import styles from './CityItem.module.css';
import PropTypes from 'prop-types';

const CityItem = ({ city }) => {
  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.object,
};

export default CityItem;
