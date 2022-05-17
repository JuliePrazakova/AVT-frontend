import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: black;
  font-family: Open Sans, sans-serif;

  .dropdown:hover, input:hover, .button:hover {
    cursor: pointer;
  }
  .dropdown:focus, input:focus{
  outline: 0;
  }
  .dropdown , input, .button {
    padding: 14px;
    font-size: 20px;
    border: 1px solid gray;
    color: gray;
  }
  input {
    border-radius: 10px 0 0 10px;
  }
  .button {
    background: gray;
    color: white;
    border-radius: 0 10px 10px 0;
  }
  
  /* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
  @media screen and (max-width: 600px) {
    .dropdown:hover, input:hover, .button:hover {
      cursor: pointer;
    }
    .dropdown , input, .button {
      padding: 8px;
      font-size: 16px;
    }
    
  }
  
`;
