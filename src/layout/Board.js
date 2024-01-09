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
          <div>
            <button className="board-write-btn">
              <FontAwesomeIcon icon={faPencil} /> 글쓰기
            </button>
            <div className="board-welcome-contents">
              <span>관리자</span>님 환영합니다.
            </div>
          </div>
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
          <BoardItem />
          <BoardItem />
          <BoardItem />
          <BoardItem />
          <BoardItem />
          <BoardItem />
          <BoardItem />
          <BoardItem />
          <BoardItem />
        </div>
        <div>
          ---------------------페이지 네이션 부분-------------------------
        </div>
        <div className="board-write-btn-area"></div>
      </Container>
    </div>
  );
};

export default Board;
