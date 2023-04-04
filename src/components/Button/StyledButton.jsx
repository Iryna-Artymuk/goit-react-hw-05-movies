import styled from '@emotion/styled';

const Styledbutton = styled.button`
  background: ${props => {
    console.log(props);
    if (props.SearchFormButton) {
      return ' #f88397';
    }
  }};
  border-radius: 5px;
  color: white;
  width: 15%;
  box-shadow: 0 0.75rem 0.5rem -0.5rem hsl(0 50% 80%);
`;

export { Styledbutton };
