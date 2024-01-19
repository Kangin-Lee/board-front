import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom'; // 설치한 패키지
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faCheck,
  faArrowLeft,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import PrivateWriteRoute from "../route/PrivateWriteRoute";
import Login from "../layout/Login";


const WriteModal = ({authenticate}) => {
  
  const navigate = useNavigate();

// --------------모달창 관련------------------------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const handleShow = () => {
    if(authenticate){
      setShow(true)
    }else{
      alert("로그인 이후 사용이 가능합니다.")
      navigate("/login");
    } 
  }
// ------------------------------------------------------

  const writeSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <>
      <button onClick={handleShow} className="write-modal-btn">
        <FontAwesomeIcon icon={faPencil} /> 글 작성
      </button>

      <Modal show={show} onHide={handleClose} className="write-modal-area">
        <Form onSubmit={writeSubmit}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-font">글 작성</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-font">제목</Form.Label>
              <Form.Control
              className="modal-font"
                type="text"
                placeholder="제목을 입력해주세요"
                autoFocus
                name="writeTitle"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="modal-font">내용</Form.Label>
              <Form.Control
              className="modal-font"
                as="textarea"
                rows={3}
                placeholder="내용을 입력해주세요"
                style={{ resize: "none", height: "500px" }}
                name="writeContent"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
            <Button variant="success" onClick={handleClose} type="submit">
              <FontAwesomeIcon icon={faCheck} />
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default WriteModal;
