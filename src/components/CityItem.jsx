import { Link } from 'react-router-dom';
import formatDate from '../utils/dateFormatting';
import styles from './CityItem.module.css';
import PropTypes from 'prop-types';

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id } = city;

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}`}>
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
