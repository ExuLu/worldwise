import { useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

const DetectClick = () => {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate('form');
    },
  });

  return <div></div>;
};

export default DetectClick;
