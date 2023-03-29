import { useState } from 'react';
import { toast } from 'react-toastify';

import Button from '../components/Button/Button';
const SearchForm = ({ handelSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  // оновлюєм стейт коли вводимо значення в інпут
  const handelInputChange = ({ currentTarget }) => {
    setInputValue(currentTarget.value);
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

    setInputValue('');
  };

  return (
    <form onSubmit={handelFormSubmit}>
      <input
        value={inputValue}
        onChange={handelInputChange}
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
