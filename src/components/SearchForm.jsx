import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../components/Button/Button';
const SearchForm = ({ handelSubmit }) => {
  //   const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = ({ target }) => {
    const nextParams = { query: target.value };
    console.log(query);
    // console.log(currentTarget.value);
    console.log(nextParams);
    setSearchParams(nextParams);
  };
  // по сабміту форми відправляєм значеня в компонент App
  const handelFormSubmit = event => {
    event.preventDefault();
    // setSearchParams({ query: event.currentTarget.value });
    if (query === '') {
      return toast.error('empty value type something', {
        theme: 'dark',
      });
    }

    handelSubmit(query);

    // setInputValue('');
  };

  return (
    <form onSubmit={handelFormSubmit}>
      <input
        value={query}
        onChange={updateQueryString}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <Button type="submit" SearchFormButton>
        <span>Search</span>
      </Button>
    </form>
  );
};

export default SearchForm;
