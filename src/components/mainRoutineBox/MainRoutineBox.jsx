import React from "react";
import * as S from "./styled";
import plusButton from "../../assets/plusButton.svg";

function MainRoutineBox({
  src,
  title,
  subtitle,
  content,
  term,
  onPlusButtonClick,
}) {
  return (
    <S.BoxContainer>
      <S.RoutineBoxImg src={src} alt={title} />

      <S.TitleContainer>
        <S.MainTitleContainer>
          <S.MainTitle>{title}</S.MainTitle>
          <img
            src={plusButton}
            alt="Plus Button"
            style={{ width: "24px", height: "24px" }}
            onClick={onPlusButtonClick}
          />
        </S.MainTitleContainer>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.TitleContainer>
      <S.BoxContent>
        <div>{content}</div>
        <div>{term}일</div>
      </S.BoxContent>
    </S.BoxContainer>
  );
}
export default MainRoutineBox;
