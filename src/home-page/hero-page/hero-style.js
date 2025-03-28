import styled from "styled-components";
export const HeroStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  // height: 100vh;
  margin-top: 60px;
  // background-color: green;
  @media (max-width: 920px) {
    margin-top: 0px;
  }
  h1 {
    color: rgb(252, 41, 71);
    font-size: 64px;
    font-weight: 700;
    @media (max-width: 920px) {
      font-size: 40px;
    }
  }
  h2 {
    font-weight: 700;
    @media (max-width: 920px) {
    }
  }
  .main__class {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  p {
    font-size: 20px;
    color: rgb(86, 102, 131);
    text-align: center;
    line-height: 1.6;
    max-width: 1000px;
    @media (max-width: 920px) {
      max-width: 600px;
    }
  }
  .parent {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 20px;
    @media (max-width: 920px) {
      flex-direction: column;
      gap: 10px;
    }
  }
  .button1 {
    color: red;
    color: rgb(9, 9, 9);
    background: white;
    border: 1px solid rgb(232, 232, 232);
    cursor: pointer;
    font-size: 18px;
    padding: 12px 16px;
    width: 200px;
    @media (max-width: 920px) {
    }
  }
  .button2 {
    color: white;
    background: red;
    border: 1px solid rgb(232, 232, 232);
    cursor: pointer;
    font-size: 18px;
    padding: 12px 16px;
    width: 200px;
  }
  .span__one {
    border-bottom: 1px solid green;
    margin-bottom: 2px;
  }
  .span__two {
    border-bottom: 1px solid orange;
    margin-bottom: 2px;
  }
  .span__three {
    border-bottom: 1px solid green;
    margin-bottom: 2px;
  }
`;
