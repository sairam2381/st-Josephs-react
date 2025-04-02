import styled from "styled-components";
export const OurpromiseStyle = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  .title {
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    @media (max-width: 920px) {
      font-size: 32px;
    }
  }
  .sub__title {
    font-size: 18px;
    text-align: center;
    color: #566683;
    margin-top: 15px;
  }
  .element {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .element__item {
    display: flex;
    gap: 20px;
    flex-direction: column;
    background-color: #fff;
    padding: 1.5rem;
    max-width: 380px;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .item__title {
    font-weight: 600;
    font-size: 24px;
    color: #777;
  }
  .element__content {
    font-weight: 400;
    font-size: 18px;
    color: #566683;
  }
  .child1 {
    border-top: 4px solid #44b2b3;
  }
  .child2 {
    border-top: 4px solid #efaf4b;
  }
  .child3 {
    border-top: 4px solid #00bdeb;
  }
  .child4 {
    border-top: 4px solid #864af9;
  }
  .child5 {
    border-top: 4px solid #fc2947;
  }
  .child6 {
    border-top: 4px solid #32c766;
  }
`;
