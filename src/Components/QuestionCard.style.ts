import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50vw;
  background: #22357B;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #fff;
  p {
    font-size: 1.5rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 50%;
    height: 40px;
    margin: 5px 0;
    background-color: ${({ correct, userClicked }) =>
      correct
        ? '#59BC86'
        : !correct && userClicked
        ? '#C53232'
        : '#974A6D'};
    border-radius: 10px;
    color: #fff;
    border: none;
  }
`;