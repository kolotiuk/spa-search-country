import { useParams, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { searchByCountry } from 'services/countriesAPI';
import { StyledLink } from './../../components/Button/Button.styled';
import { Info } from './../../components/Info/Info';

export const Details = () => {
  const { name } = useParams();
  const location = useLocation();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    searchByCountry(name).then(setCountry);
  }, [name]);

  return (
    <div>
      <StyledLink to={location.state?.from ?? '/'}>
        <IoArrowBack /> Back
      </StyledLink>
      {country && (
        <Info country={country} state={{ from: location.pathname }} />
      )}
    </div>
  );
};
