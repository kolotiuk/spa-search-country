import { useParams, useLocation, Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

export const Details = () => {
  const { name } = useParams();
  const location = useLocation();

  return (
    <div>
      <Link to={location.state?.from}>
        <IoArrowBack />
      </Link>
      Details {name}
    </div>
  );
};
