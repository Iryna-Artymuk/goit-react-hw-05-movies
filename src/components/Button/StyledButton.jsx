import styled from '@emotion/styled';

const Styledbutton = styled.button`
  background: ${props => {
    // console.log(props);
    if (props.ButtonType === 'SearchFormButton') {
      return ' #f88397';
    }
    if (props.ButtonType === 'Load More') {
      return ' #f50930;';
    }
  }};
  border-radius: 5px;
  color: white;
  width: 15%;
  padding: 1px;
  box-shadow: 0 0.75rem 0.5rem -0.5rem hsl(0 50% 80%);
`;

export { Styledbutton };
