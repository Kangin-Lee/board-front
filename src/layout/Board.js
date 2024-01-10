import React from "react";
import Navbar from "../component/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import BoardItem from "../component/BoardItem";

import WriteModal from "../component/WriteModal";
import PageNation from "../component/PageNation";

const Board = () => {
  const boardContents = ["번호", "제목", "작성자", "작성일", "조회 수"];
  return (
    <div className="board-area">
      <Container>
        <Navbar />
        <div className="board-contents">
          <div>
            {/* <button className="board-write-btn">
              <FontAwesomeIcon icon={faPencil} /> 글쓰기
            </button> */}
            {/* 글 작성 버튼 */}
            <WriteModal className="board-write-btn"/>
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
              <li lg={3}>{menu}</li>
            ))}
            {/* <Col lg={2}>번호</Col>
            <Col lg={3}>제목</Col>
            <Col lg={2}>작성자</Col>
            <Col lg={3}>작성일</Col>
            <Col lg={2}>조회수</Col> */}
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
          <PageNation/>
        </div>
        <div className="board-write-btn-area"></div>
      </Container>
    </div>
  );
};

export default Board;
