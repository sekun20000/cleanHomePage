import { useState } from "react";
import "../../src/App.css";

export default function CleaningCompanyHome() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("문의가 접수되었습니다. 감사합니다!");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-inner">
          <h1 className="logo">청소의 달인</h1>
          <nav className="nav">
            <a href="#services">서비스</a>
            <a href="#about">회사소개</a>
            <a href="#contact">문의하기</a>
          </nav>
        </div>
      </header>
s
        </p>
      </section>

      <section id="contact" className="contact">
        <h3>문의하기</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="문의 내용을 작성하세요"
            required
          />
          <button type="submit" className="btn-primary">보내기</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2025 청소의 달인. All rights reserved.</p>
      </footer>
      {showDrawer && (
          <div className="drawer-overlay" onClick={() => setShowDrawer(false)}>
          <div className="drawer" onClick={(e) => e.stopPropagation()}>
          <h3>예약 방법</h3>
          <ul>
          <li>1. 원하는 날짜와 시간을 정하세요.</li>
          <li>2. 고객센터(010-1234-5678)로 전화 주세요.</li>
          <li>3. 예약 확정 후 문자로 안내드립니다.</li>
          </ul>
          <button className="btn-primary" onClick={() => setShowDrawer(false)}>닫기</button>
          </div>
          </div>
          )}
    </div>



  );
}

