import React from "react";

const BoardItem = () => {
  return ( 
    <div className="board-item-area">
      <div className="board-item-num board-items" style={{width:"10%"}}>1</div>
      <div className="board-item-title board-items" style={{width:"40%"}}>asfagadfasgrhafdsadgasdas</div>
      <div className="board-item-writer board-items" style={{width:"10%"}}>관리자</div>
      <div className="board-item-date board-items" style={{width:"30%"}}>2024-01-08</div>
      <div className="board-item-hits board-items" style={{width:"10%"}}>3</div>
    </div>
  );
};

export default BoardItem;
