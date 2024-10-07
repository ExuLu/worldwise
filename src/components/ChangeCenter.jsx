import { useMap } from 'react-leaflet';
import PropTypes from 'prop-types';

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position, 6);
  return null;
};

ChangeCenter.propTypes = {
  position: PropTypes.array,
};

export default ChangeCenter;
