import styled from '@emotion/styled';
const Form = styled.form`
  display: flex;
  /* justify-content: center; */
  gap: 1%;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background: #f8f3e8;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  margin-top: 10px;
`;

const Input = styled.input`
  border: none;
  background: hsl(0 0% 93%);
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  width: 80%;
  border-radius: 5px;
`;

export { Form, Input };
