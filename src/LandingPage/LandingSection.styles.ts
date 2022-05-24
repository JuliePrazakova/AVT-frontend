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
    background: url("/images/background2.jpg");
    background-size: cover;
    padding: 350px 0 15% 0;
    margin: 0;
    color: white;
  }
  .title > p {
    font-size: 63px;
    font-weight: 800;
  }
  .title {
    width: fit-content;
    margin-left: 15%;
  }
  .lower-section {
    margin: 40px;
    justify-content: center;
  }
`;
export const Grid = styled.div`
    .container{
      margin: auto;
      width: 300px;
      height: 600px;
      border: 1px solid gray;
      border-radius: 20px;
  }
`;