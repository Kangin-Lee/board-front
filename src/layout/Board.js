import React from "react";
import Navbar from "../component/Navbar";
import { Container, Row } from "react-bootstrap";
import BoardItem from "../component/BoardItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Board = () => {
  const boardContents = ["번호", "제목", "작성자", "작성일", "조회 수"];
  return (
    <div className="board-area">
      <Container>
        <Navbar />
        <div className="board-contents">
          <ul>
          
            {/* <li>번호</li>
            <li>제목</li>
            <li>작성자</li>
            <li>작성일</li>
            <li>조회 수</li> */}
            {boardContents.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
          <BoardItem />
        </div>
        <div className="board-write-btn-area">
          <button className="board-write-btn">
            <FontAwesomeIcon icon={faPencil} /> 글쓰기
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Board;
