import { Link } from 'react-router-dom';
import {
  CardBody,
  CardList,
  CardImage,
  CardListItem,
  CardTitle,
  Wrapper,
} from './Card.styled';

export const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Link to={`/country/${name}`}>
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
