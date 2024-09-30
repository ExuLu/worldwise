import { NavLink } from 'react-router-dom';
import PageNav from '../components/PageNav';
import AppNav from '../components/AppNav';

const Homepage = () => {
  return (
    <>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>
      <NavLink to='app'>Go to the app</NavLink>
    </>
  );
};

export default Homepage;
