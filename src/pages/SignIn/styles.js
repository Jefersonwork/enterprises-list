import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    margin-bottom: 34px;

    @media (max-width: 768px) {
      width: 240px;
    }
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #383743;
    text-transform: uppercase;
    max-width: 230px;
    margin-bottom: 10px;
  }

  p {
    width: 300px;
    margin-bottom: 47px;
    font-size: 18px;
    line-height: 1.44;
    letter-spacing: -0.25px;
    color: #383743;
  }
`;

export const Form = styled.form`
  width: 300px;
`;

export const FormImput = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 18px;

  input {
    height: 30px;
    margin-bottom: 2px;
    margin-left: 40px;
    width: calc(100% - 40px);
    border: none;
    background: none;
    color: #383743;
  }

  button {
    position: absolute;
    top: 0;
    right: 27px;
  }

  hr {
    width: 100%;
    height: 1px;
    background: #383743;
    border: none;
    transition: all 0.3s;
  }

  input:focus ~ hr {
    background: #ee4c77;
  }
`;

export const Alert = styled.span`
  position: absolute;
  display: ${props => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  right: 0;
  top: 0;
  background: #ff0f44;
  border-radius: 50%;
  font-family: Poppins;
  font-size: 14px;
  color: #fff;
`;

export const ErrorMessagem = styled.span`
  display: ${props => (props.visible ? 'block' : 'none')};
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.95;
  letter-spacing: -0.09px;
  text-align: center;
  color: #ff0f44;
`;

export const SubmitButton = styled.button`
  margin-top: 23px;
  padding: 14px 127px;
  border-radius: 3.6px;
  border: none;
  background-color: ${props => (props.disabled ? '#748383' : '#57bbbc')};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  :hover {
    background-color: ${props => (props.disabled ? '#748383' : '#499da6')};
  }

  @media (max-width: 768px) {
    width: 100px;
    margin: 23px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
