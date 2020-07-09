import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88px;
  padding: 5px 20px;
  background: linear-gradient(180deg, #ee4c77 38%, #0d0430 147%);

  @media (max-width: 768px) {
    height: 50px;

    img {
      width: 120px;
    }
  }
`;

export const Logo = styled.h1`
  display: ${props => (props.active ? 'none' : 'block')};
  margin: 0 auto;
  transform: all 0.3s;
`;

export const SearchForm = styled.div`
  width: 95%;
  width: ${props => (props.active ? '95%' : '30px')};
  height: 30px;
  position: relative;
  border: none;
  border-bottom: ${props => (props.active ? '0.5px solid #fff' : 'none')};
  padding: ${props => (props.active ? '0 35px 10px' : '0')};

  input,
  button {
    background: none;
    border: none;
  }
`;

export const Input = styled.input`
  display: ${props => (props.active ? 'block' : 'none')};
  width: 100%;
  height: 30px;
  color: #fff;
  ::-webkit-input-placeholder {
    color: #991237;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  left: 0;
`;

export const CloseButton = styled.button`
  display: ${props => (props.active ? 'block' : 'none')};
  position: absolute;
  right: 0;
  top: 0;
`;

export const Text = styled.div`
  width: 100%;
  height: calc(100% - 88px);
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 16px;
    line-height: 1.22;
    letter-spacing: -0.23px;
    color: #383743;
  }
`;

export const Result = styled.div`
  width: 100%;
  margin-top: 22px;
`;

export const Card = styled.div`
  max-width: 460px;
  padding: 13px 15px;
  display: flex;
  align-items: center;
  margin: 0 auto 20px;
  border-radius: 2.4px;
  background-color: #fff;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  img {
    margin-right: 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #1a0e49;
  }

  h4 {
    font-size: 15px;
    color: #8d8c8c;
    margin-bottom: 2px;
  }

  span {
    font-size: 12px;
    color: #8d8c8c;
  }
`;

export const Message = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 150px;

  h2 {
    font-size: 17px;
    text-align: center;
    color: #b5b4b4;
  }
`;
