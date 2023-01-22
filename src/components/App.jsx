import { useState, useEffect } from 'react';
import { Controls } from './Controls/Controls';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { fetchAllCountries } from './../services/countriesAPI';
import { List } from './List/List';
import { Card } from './Card/Card';

export const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries().then(setCountries);
  }, []);

  return (
    <div>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.map(el => {
            const countryInfo = {
              img: el.flags.png,
              name: el.name,
              info: [
                {
                  title: 'Population',
                  description: el.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: el.region,
                },
                {
                  title: 'Capital',
                  description: el.capital,
                },
              ],
            };

            return <Card key={el.name} {...countryInfo} />;
          })}
        </List>
      </Main>
    </div>
  );
};
