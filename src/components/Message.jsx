import PropTypes from 'prop-types';

import styles from './Message.module.css';

const Message = ({ message }) => (
  <p className={styles.message}>
    <span role='img'>👋</span> {message}
  </p>
);

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
