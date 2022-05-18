import styled from 'styled-components';

export const Wrapper = styled.div`
  @font-face {
    font-family: Open Sans;
    src: local(Open Sans), url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap') format('woff');
  }
  display: flex;
  flex-direction: column;
  margin: auto;
  font-family: Open Sans,serif ;
  
  .background-cover {
    background: url("/images/background2.png");
    background-size: cover;
    padding: 250px 0 200px 0;
    margin: 0;
    color: white;
  }
  h1 {
    font-size: 50px;
  }
  .title {
    width: fit-content;
    margin-left: 15%;
  }
  .lowerSection {
    margin: 40px;
    justify-content: center;
  }
`;
