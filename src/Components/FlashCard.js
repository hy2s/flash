
const FlashCard = ({cardData, onSelected, onLearn}) => {
  return (
    <div className="flash-card">
      <h1>{cardData.name} 플래시 카드</h1>
      <ul>
        {
          cardData.flashcards.map((obj)=>{
            return <li key={obj.id}>{obj.question}</li>
          })
        }
      </ul>
      <button onClick={()=>{onLearn(true)}}>학습시작</button>
      <button onClick={()=>{onSelected(null)}}>뒤로가기</button>
    </div>
  );
};

export default FlashCard;