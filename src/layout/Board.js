import Navbar from "../component/Navbar";
import { Container } from "react-bootstrap";
import BoardItem from "../component/BoardItem";

import WriteModal from "../component/WriteModal";
import PageNation from "../component/PageNation";
import { Link } from "react-router-dom";

const Board = ({authenticate}) => {
  const boardContents = ["번호", "제목", "작성자", "작성일", "조회 수"];

  const goToWriteModal = () =>{
    console.log("aasaaa");
  }
  return (
    <div className="board-area">
      <Container>
        <Navbar />
        <div className="board-contents">
          <div className="board-write-welcome">
            {/* <button className="board-write-btn">
              <FontAwesomeIcon icon={faPencil} /> 글쓰기
            </button> */}

            {/* 글 작성 버튼 */}
            <WriteModal className="board-write-btn" authenticate={authenticate}/>
            <div className="board-welcome-contents">
              <span>관리자</span>님 환영합니다.
            </div>
          </div>
          <ul className="board-navbar">
            <li className="board-num" style={{ width: "10%" }}>
              번호
            </li>
            <li className="board-title" style={{ width: "40%" }}>
              제목
            </li>
            <li className="board-writer" style={{ width: "10%" }}>
              작성자
            </li>
            <li className="board-create-date" style={{ width: "30%" }}>
              작성일
            </li>
            <li className="board-hits" style={{ width: "10%" }}>
              조회 수
            </li>
          </ul>

          <Link
            to="/board/1"
            style={{ textDecoration: "none", color: "black" }}
          >
            <BoardItem />
          </Link>

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
          <PageNation />
        </div>
        <div className="board-write-btn-area"></div>
      </Container>
    </div>
  );
};

export default Board;
