import { useState, useEffect } from 'react';
import { filterByCode } from './../../services/countriesAPI';
import { Link, useLocation } from 'react-router-dom';

export const NextCountry = ({ borders }) => {
  const [neighbors, setNeighbors] = useState([]);
  const location = useLocation();

  useEffect(() => {
    filterByCode(borders).then(data => setNeighbors(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {neighbors.map(b => (
        <Link
          key={b.name}
          to={`/country/${b.name}`}
          state={{ from: location.pathname }}
        >
          {b.name}
        </Link>
      ))}
    </div>
  );
};
