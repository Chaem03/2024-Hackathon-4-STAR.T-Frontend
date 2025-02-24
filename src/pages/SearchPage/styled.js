import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
  margin-bottom: 5rem;
  @media (min-height: 720px) {
    justify-content: flex-start;
    gap: 40px;
    margin-bottom: 5rem;
  }
`;

export const LayoutResult = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
  margin-bottom: 20rem;
  @media (min-height: 720px) {
    justify-content: flex-start;
    gap: 40px;
    margin-bottom: 5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 8rem;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;

  .Title {
    color: #000;
    font-family: "AppleSDGothicNeoM";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1rem;
  }
`;
