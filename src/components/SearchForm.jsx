import { useState } from 'react';

import { toast } from 'react-toastify';

import Button from '../components/Button/Button';
const SearchForm = ({ handelSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const updateinputValue = ({ target }) => {
    setInputValue(target.value);
  };
  // по сабміту форми відправляєм значеня в компонент App
  const handelFormSubmit = event => {
    event.preventDefault();

    if (inputValue === '') {
      return toast.error('empty value type something', {
        theme: 'dark',
      });
    }

    handelSubmit(inputValue);

    // console.log(inputValue);
    // setInputValue('');
  };

  return (
    <form onSubmit={handelFormSubmit}>
      <input
        value={inputValue}
        onChange={updateinputValue}
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
