import styled from 'styled-components';

export const Loading = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(0.5px);
  backdrop-filter: blur(0.5px);
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 10;

  div {
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #57bbbc;
    border-right: 10px solid #57bbbc;
    border-bottom: 10px solid #57bbbc;
    width: 100px;
    height: 100px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
