import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  .footer {
    font-family: "Open Sans", serif;
    position: relative;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    margin: 0;
    background-color: black;
    color: white;
    text-align: center;
  }
`;
