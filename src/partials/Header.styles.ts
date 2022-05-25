import styled from 'styled-components';

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  
  padding-bottom: 8px;
  /* Add a black background color to the top navigation bar */
  .topNav {
    overflow: hidden;
    background-color: white;
    font-family: Open Sans, serif;
  }

  .img {
    height: 55px;
  }
  .active {
    margin-left: 5%;
    margin-top: 5px;
  }
  .active > img {
    width: 65px;
    height: auto;
  }
  /* spans */
  .small_text{
    color: silver;
    font-size: small;
  }

  /* Style the links inside the navigation bar */
  .topNav a {
    float: left;
    display: block;
    color: #545454;
    text-align: center;
    font-weight: 100;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  .header-right  a:hover {
    border-bottom: 2px solid #545454;
    color: black;
  }

  .header-right{
    float:right;
    margin: 15px 5% 0 0;
    display: flex;
  }
  
  .header-right > div {
    display: flex;
    margin: 0 10px 0 10px;
  }
  .header-right > div > div {
    padding: 2px 0;
    border-bottom: 1px solid gray;
    display: flex;
  }
  .header-right i {
    margin: 2px;
  }
  /* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
  @media screen and (max-width: 600px) {
    .header-right a {
      float: none;
      display: block;
      text-align: left;
      width: 100%;
      margin: 0;
      padding: 14px;
    }
  }
`;
