import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Details } from './../pages/Details/Details';
import { NotFound } from './../pages/NotFound/NotFound';
import Layout from './Layout/Layout';
import { useState, useEffect } from 'react';
import { fetchAllCountries } from './../services/countriesAPI';

export const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!countries.length) {
      fetchAllCountries().then(setCountries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main countries={countries} />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
