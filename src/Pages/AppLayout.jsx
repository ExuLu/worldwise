import Sidebar from '../components/Sidebar';
import Map from '../components/Map';

import styles from './AppLayout.module.css';
import User from '../components/User';

const AppLayout = () => (
  <div className={styles.app}>
    <Sidebar />
    <User />
    <Map />
  </div>
);

export default AppLayout;
