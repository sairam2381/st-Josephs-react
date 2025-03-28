import styled from "styled-components";
export const LearnersStyle = styled.div`
  margin-top: 50px;

  .element {
    margin: auto;
    display: flex;
    border-radius: 50px;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1400px;
    background-color: rgb(252, 41, 71);
    @media (max-width: 920px) {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
    .title {
      font-weight: 600;
      font-size: 32px;
      text-align: left;
      color: white;
    }
    .subtitle {
      color: white;
      font-size: 20px;
      font-weight: 500;
      color: white;
      margin-top: 10px;
    }
  }
  .button__style {
    background-color: rgb(234, 246, 246);
    border-radius: 50px;
    padding: 1rem;
    font-size: 20px;
    @media (max-width: 920px) {
      padding: 0.5rem;
      font-size: 15px;
      width: 120px;
    }
  }
`;
