import styled from 'styled-components';

export const Wrapper = styled.div`
  @font-face {
    font-family: Open Sans;
    src: local(Open Sans), url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap') format('woff');
  }
  width: 80%;
  background: url("/images/background2.jpg");
  margin: auto;
  font-family: Open Sans,serif ;
  padding-bottom: 20px;
  
  .title {
    width: fit-content;
    margin-left: 15%;
    font-size: 30px;
    font-weight: 800;
    color: white;
    padding: 30px 0 30px 0;
  }
  //whole box without title
  .form-box {
    display: flex;
    width: 70%;
    margin: auto;
    padding-bottom: 20px;
  }
  //divs with labels
  .label {
    padding: 6px 6px 6px 19px;
    font-size: 14px;
    font-weight: 600;
    color: black;
    background: white;
    display: flex;
    border-radius: 20px;
    margin: 20px 20px 0 0;
  }
  //black vertical line in first input
  .vl {
    border-left: 1px solid gray;
    height: 15px;
    margin: auto;
  }
 
  //all iputs
  .input {
    padding: 3px 0 0 10px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    color: gray;
  }
  .input:hover, .submit-btn:hover {
    cursor: pointer;
  }
  .submit-btn:focus, .input:focus{
    outline: 0;
  }
  //message box
  .msg {
    flex-direction: column;
    width: 100%;
    margin-right: 0;
  }
  .msg > input {
    width: content-box;
    height: 100%;
    word-break: break-word;
  }
  //submit button
  .submit-btn {
    float: right;
    width: fit-content;
    background: gray;
    font-size: 18px;
    font-weight: 200;
    color: white;
    padding: 6px 55px 6px 55px;
    margin-right: 15%;
    border-radius: 30px;
    border: none;
  }
  .left-part {
    width: 50%;
  }
  
`;