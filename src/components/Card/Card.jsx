import { Link, useLocation } from 'react-router-dom';
import {
  CardBody,
  CardList,
  CardImage,
  CardListItem,
  CardTitle,
  Wrapper,
} from './Card.styled';

export const Card = ({ img, name, info = [], onClick }) => {
  const location = useLocation();

  return (
    <Wrapper onClick={onClick}>
      <Link to={`/country/${name}`} state={{ from: location.pathname }}>
        <CardImage src={img} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardList>
            {info.map(el => (
              <CardListItem key={el.title}>
                <b>{el.title}:</b> {el.description}
              </CardListItem>
            ))}
          </CardList>
        </CardBody>
      </Link>
    </Wrapper>
  );
};
