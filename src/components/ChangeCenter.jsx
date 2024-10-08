import PropTypes from 'prop-types';

import { useMap } from 'react-leaflet';
const ChangeCenter = ({ position }) => {
  const map = useMap();

  map.setView(position, 6);
  
  return null;
};

ChangeCenter.propTypes = {
  position: PropTypes.array,
};

export default ChangeCenter;
