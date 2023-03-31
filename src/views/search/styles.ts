import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  margin: 0.5rem;
  justify-content: center;
  font-size: 2rem;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoadingBackground = styled.div`
  display: flex;
  border-radius: 50%;
  padding: 10%;
  background-color: rgb(42, 37, 57);
`;

export const LoadingImg = styled.img`
  width: 100%;
  height: 100%;
  animation: spin 5s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
