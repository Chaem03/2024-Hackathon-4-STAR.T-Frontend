import * as S from "./styled";
import { Header } from "../../components/common/Header/Header";
import { CustomCalendar } from "../../components/CustomCalendar/CustomCalendar";
import { Todo } from "@/components/Todo/Todo";
import { useRecoilState } from "recoil";
import { todoStatus, modalStatus } from "@/stores/calendar";
import { useState, useEffect, useRef } from "react";
import { AlertModal } from "@/components/common/FinishAlert/FinishAlert";

export const Calendar = () => {
  const startRef = useRef(null);
  const [status, setStatus] = useRecoilState(todoStatus);
  const [weekPosition, setWeekPosition] = useState(0); // 주의 위치를 저장하는 상태
  const [boxHeigt, setBoxHeight] = useState(0);
  const [bottomMargin, setBottomMargin] = useState(0);
  const [showModal, setShowModal] = useRecoilState(modalStatus);

  useEffect(() => {
    if (weekPosition) {
      setBottomMargin(startRef.current?.getBoundingClientRect().bottom / 2);
      startRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setBoxHeight(startRef.current?.offsetHeight || 0);
    console.log(startRef.current?.offsetHeight);
  }, [top, weekPosition, boxHeigt]);

  const handleModalClose = (event) => {
    setStatus(false);
    event.stopPropagation(); // 여기서 이벤트 전파를 중지
  };

  return (
    <S.Layout
      $isModalOpen={status}
      style={{
        marginBottom: bottomMargin + boxHeigt,
      }}
    >
      <AlertModal show={showModal} onClose={() => setShowModal(false)} />
      <Header $margin={"1rem 0 0 0"} $padding={"1rem 1rem 0 1rem"}>
        캘린더
      </Header>
      <CustomCalendar setWeekPosition={setWeekPosition} />
      {status && (
        <S.TodoWrapper top={weekPosition} ref={startRef}>
          <S.TitleFrame>
            <S.ButtonView
              style={{
                cursor: "pointer",
                color: "#78A1B5",
              }}
              onClick={handleModalClose}
            >
              close
            </S.ButtonView>
          </S.TitleFrame>
          <Todo />
        </S.TodoWrapper>
      )}
    </S.Layout>
  );
};
