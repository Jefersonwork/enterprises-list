import styled from 'styled-components';

export const Icon = styled.i`
  position: ${props => props.ps || 'absolute'};
  display: inline-block;
  width: 30px;
  height: 30px;
  left: ${props => props.left || 0};
  right: ${props => props.right || 0};
  background-image: url(${props => props.icon});
  background-size: 30px 30px;
  cursor: pointer;
`;
