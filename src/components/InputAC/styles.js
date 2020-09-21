import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px;

  input {
    padding: 20px;
    height: 42px;
    border: 2px solid #c3c3c3;
    border-radius: 5px;
    color: #c3c3c3;

    &::placeholder {
      color: #c3c3c3;
    }
  }
  ul {
    list-style: none;
    li {
      margin: 2px 0px;
      background: #06ebc4;
      color: #ffffff;
      font-size: 16px;
      width: 330px;
      border-radius: 5px;
      height: 42px;
      display: flex;
      align-items: center;
      padding: 20px;
      cursor: pointer;

      &:active,
      &:hover,
      &:focus {
        background: #ffffff;
        color: #06ebc4;
        transition: 0.2s linear;
      }

      &.active {
        background: #ffffff;
        color: #06ebc4;
      }
    }
  }
`;

export const Mensagem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 5px;
  height: 100px;
  width: 330px;
  background: #06ebc4;
  color: #ffffff;
  margin: 50px;
  font-weight: bold;
`;
