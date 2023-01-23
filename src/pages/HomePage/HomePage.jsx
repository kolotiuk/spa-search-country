import { Controls } from './../../components/Controls/Controls';
import { List } from './../../components/List/List';
import { Card } from './../../components/Card/Card';

export const HomePage = ({ countries }) => {
  return (
    <div>
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
    </div>
  );
};
