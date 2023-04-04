import { useState } from 'react';

import { toast } from 'react-toastify';
import { Form, Input } from '../SearchForm/StyledSearchForm';
import Button from '../Button/Button';
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
    <Form onSubmit={handelFormSubmit}>
      <Input
        type="text"
        placeholder="Search..."
        required
        value={inputValue}
        onChange={updateinputValue}
        autoComplete="off"
        autoFocus
      />
      <Button type="submit" buttonType="SearchFormButton">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
