import { Controls } from './../../components/Controls/Controls';
import { List } from './../../components/List/List';
import { Card } from './../../components/Card/Card';
import { useState, useEffect } from 'react';

export const HomePage = ({ countries }) => {
  const [filtered, setFiltered] = useState(countries);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter(el => el.region.includes(region));
    }

    if (search) {
      data = data.filter(el =>
        el.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
  };

  return (
    <div>
      <Controls onSearch={handleSearch} />
      <List>
        {filtered.map(el => {
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
    </div>
  );
};
