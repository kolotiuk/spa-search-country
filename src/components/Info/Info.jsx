import { NextCountry } from './../../pages/NextCountry/NextCountry';
import { Wrapper } from './../Info/Info.styled';
import {
  InfoImage,
  List,
  ListGroup,
  ListItem,
  Meta,
  TagGroup,
} from './Info.styled';

export const Info = ({ country }) => {
  return (
    <div>
      {country.map(
        ({
          name,
          nativeName,
          flag,
          capital,
          population,
          region,
          subregion,
          topLevelDomain,
          currencies = [],
          languages = [],
          borders = [],
        }) => {
          return (
            <Wrapper key={name}>
              <InfoImage src={flag} alt="" />
              <ListGroup>
                <List>
                  <ListItem>
                    <b>Native Name:</b> {nativeName}
                  </ListItem>
                  <ListItem>
                    <b>Population</b> {population}
                  </ListItem>
                  <ListItem>
                    <b>Region:</b> {region}
                  </ListItem>
                  <ListItem>
                    <b>Sub Region:</b> {subregion}
                  </ListItem>
                  <ListItem>
                    <b>Capital:</b> {capital}
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <b>Top Level Domain</b>{' '}
                    {topLevelDomain.map(d => (
                      <span key={d}>{d}</span>
                    ))}
                  </ListItem>
                  <ListItem>
                    <b>Currency</b>{' '}
                    {currencies.map(c => (
                      <span key={c.code}>{c.name} </span>
                    ))}
                  </ListItem>
                  <ListItem>
                    <b>Top Level Domain</b>{' '}
                    {languages.map(l => (
                      <span key={l.name}>{l.name}</span>
                    ))}
                  </ListItem>
                </List>
              </ListGroup>
              <Meta>
                <b>Border Countries</b>
                {!borders.length ? (
                  <span>There is no border countries</span>
                ) : (
                  <TagGroup>
                    <NextCountry borders={borders} />
                  </TagGroup>
                )}
              </Meta>
            </Wrapper>
          );
        }
      )}
    </div>
  );
};
