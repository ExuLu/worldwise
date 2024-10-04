import styles from './City.module.css';
import formatDate from '../utils/dateFormatting';
import { useParams } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';
import Spinner from './Spinner';

function City() {
  const { id } = useParams();

  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  const currentCity = cities.find((city) => city.id === id);

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target='_blank'
          rel='noreferrer'
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div></div>
    </div>
  );
}

export default City;
