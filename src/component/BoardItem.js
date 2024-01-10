import React from "react";
import { Col, Row } from "react-bootstrap";

const BoardItem = () => {
  return (
    <Row className="board-item-area">
      <Col lg={2} className="board-item-num board-items">1</Col>
      <Col lg={3} className="board-item-title board-items">asdas</Col>
      <Col lg={2} className="board-item-writer board-items">관리자</Col>
      <Col lg={3} className="board-item-date board-items">2024-01-08</Col>
      <Col lg={2} className="board-item-hits board-items">3</Col>
    </Row>
  );
};

export default BoardItem;
