import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  width: 100%;
  height: 88px;
  background: linear-gradient(180deg, #ee4c77 38%, #0d0430 147%);

  @media (max-width: 768px) {
    height: 50px;
  }

  button {
    background: none;
    border: none;
    margin-right: 35px;
  }

  h1 {
    margin-left: 15px;
    font-size: 20px;
    text-transform: uppercase;
    color: #fff;
  }
`;

export const Article = styled.article`
  max-width: 462px;
  margin: 22px auto 10px;
  padding: 37px 24px;
  border-radius: 2.4px;
  background-color: #fff;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  img {
    margin-bottom: 25px;
  }

  p {
    font-size: 17px;
    color: #8d8c8c;
  }
`;
