import { useState } from "react";

const CardLearn = ({cardData, onExit}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [show, setShow] = useState(false);
  const handleNext = () => {
    if( currentIdx+1 < cardData.length ){
      setCurrentIdx(currentIdx+1)
    } else {
      onExit(true);
    }
  }
  return (
    <div className="learn-mode">
      <h2>플래시카드 학습</h2>
      <p>질문 : {cardData[currentIdx].question}</p>
      {
        show && <p>답변 : {cardData[currentIdx].answer}</p>
      }
      <button onClick={()=>{setShow(!show)}}>
        {show ? "답변 닫기" : "답변 보기"}</button>
      <button onClick={()=>{setCurrentIdx(currentIdx-1)}}>이전 카드</button>
      <button onClick={handleNext}>다음 카드</button>
      <button onClick={()=>{onExit(true)}}>학습 종료</button>
    </div>
  );
};

export default CardLearn;