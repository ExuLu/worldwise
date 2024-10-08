import { NavLink } from 'react-router-dom';
import Logo from './Logo';

import styles from './PageNav.module.css';

const PageNav = () => (
  <nav className={styles.nav}>
    <Logo />
    <ul>
      <li>
        <NavLink to='/product'>Product</NavLink>
      </li>
      <li>
        <NavLink to='/pricing'>Pricing</NavLink>
      </li>
      <li>
        <NavLink to='/login' className={styles.ctaLink}>
          Log In
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default PageNav;
