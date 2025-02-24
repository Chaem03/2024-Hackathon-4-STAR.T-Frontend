import { styled } from "styled-components";

export const RoutineBoxContainer = styled.div`
  display: flex;
  min-width: 133px;

  flex-direction: column;
  scroll-snap-align: start;
  align-items: flex-start;
  align-self: flex-start;

  margin-top: 1rem;
  gap: 5px;
`;

export const RoutineBoxImg = styled.div`
  height: 100px;
  align-self: stretch;
  border-radius: 10px;

  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  background-color: darkgray;
`;

export const RoutineBoxTitle = styled.div`
  color: var(--Font-Color, #2a2a2a);
  font-family: "AppleSDGothicNeoL";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RoutineBoxStar = styled.div`
  color: rgba(42, 42, 42, 0.7);

  /* Korean Minimal */
  font-family: "AppleSDGothicNeoM";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const RoutineBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;
