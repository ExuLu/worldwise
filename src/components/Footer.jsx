import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.copyright}>
      &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
    </p>
  </footer>
);

export default Footer;
