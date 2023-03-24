import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  align-content: center;
  margin: 1rem;
  width: 100%;
  max-width: 50rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  & > section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-column: span 1;
  }
  & > section:nth-child(5n + 1) {
    grid-column: span 2;
  }
  & > section > input,
  select {
    height: 1.5rem;
    font-size: 15px;
    &:focus {
      outline: transparent;
      border: 2px solid #000;
    }
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NewImageButton = styled.button`
  align-self: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  border: none;
  &:focus {
    outline: transparent;
  }
`;

const Button = styled.button`
  margin-top: 5rem;
  width: 6rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  &:focus {
    outline: transparent;
  }
`;

export const Reset = styled(Button)`
  background-color: rgb(255, 255, 255);
  color: rgb(42, 37, 57);
`;

export const Submit = styled(Button)`
  align-self: flex-end;
  background-color: rgb(42, 37, 57);
  color: rgb(255, 255, 255);
`;
