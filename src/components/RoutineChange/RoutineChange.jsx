import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { ROUTINE_CATEGORY, TITLE } from "../../constants/Category/data";
import { Box } from "../common/Box/Box";
import { Button } from "../../components/common/Button/Button";

import { patchroutineCategory, getRoutineCategory } from "../../apis/mypage";
const ChangeRoutine = ({ onCategoriesUpdate }) => {
  const [isAnyCategorySelected, setIsAnyCategorySelected] = useState(false);
  const [categoryStatus, setCategoryStatus] = useState([]);

  const initialCategory = async () => {
    try {
      const getData = await getRoutineCategory();
      console.log("getData:", getData);
      const initialStatus = ROUTINE_CATEGORY.map((_, index) =>
        getData.data.preferred_routine_categories.some(
          (preferred) => preferred.id - 1 === index
        )
      );

      setCategoryStatus(initialStatus);
      console.log("initialStatus:", initialStatus);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initialCategory();
  }, []);
  //initialStatus는 true,false로 구성된 배열

  // [{id:1, name:name},{id, name}...]

  const handleClick = (index) => {
    setCategoryStatus((prevStatus) =>
      prevStatus.map((status, i) => (i === index ? !status : status))
    );
  };

  const handleSubmit = async () => {
    const selectedCategories = [];
    categoryStatus.forEach((status, i) => {
      if (status) {
        selectedCategories.push(i + 1);
      }
    });
    console.log("patch 값:", selectedCategories);

    try {
      const isSuccess = await patchroutineCategory(selectedCategories);
      console.log("isSuccess값:", isSuccess);
      if (isSuccess === true) {
        onCategoriesUpdate();
      }
    } catch (err) {
      console.error("Error updating categories:", err);
    }
  };

  useEffect(() => {
    setIsAnyCategorySelected(categoryStatus.some((status) => status));
  }, [categoryStatus]);

  return (
    <S.RoutineLayout>
      <S.CutomTitle>{TITLE[0]}</S.CutomTitle>
      <S.CategoryWrapper>
        <S.CategoryView>
          {ROUTINE_CATEGORY.map((category, index) => (
            <Box
              onClick={() => handleClick(index)}
              $select={categoryStatus[index]}
              key={index}
            >
              {category}
            </Box>
          ))}
        </S.CategoryView>
      </S.CategoryWrapper>
      <S.SelectView>
        <Button
          width="50%"
          height="40px"
          $radius="15px"
          $background="#78A1B5"
          onClick={handleSubmit}
          $isDisabled={!isAnyCategorySelected}
        >
          <S.CustomP color="white">확인</S.CustomP>
        </Button>
      </S.SelectView>
    </S.RoutineLayout>
  );
};
export default ChangeRoutine;
