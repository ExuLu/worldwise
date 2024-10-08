import PropTypes from 'prop-types';

import styles from './CountryItem.module.css';

const CountryItem = ({ country }) => (
  <li className={styles.countryItem}>
    <span>{country.emoji}</span>
    <span>{country.country}</span>
  </li>
);

CountryItem.propTypes = {
  country: PropTypes.object,
};

export default CountryItem;
