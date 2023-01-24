import { IoSearch } from 'react-icons/io5';
import { Input, InputLabel } from './Search.styled';

export const Search = ({ search, setSearch, changeFilter }) => {
  return (
    <InputLabel>
      <IoSearch />
      <Input
        onChange={e => {
          setSearch(e.target.value);
        }}
        value={search}
      />
    </InputLabel>
  );
};
