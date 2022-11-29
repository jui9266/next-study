import { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const [feedbackData, setFeedbackData] = useState([]);
  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const emailVal = emailRef.current.value;
    const feedbackVal = feedbackRef.current.value;

    const body = {
      email: emailVal,
      feedback: feedbackVal,
    };
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const getFeedback = () => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbackData(data.feedback));
  };
  return (
    <div>
      <h1>홈페이지</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">이메일주소</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">하고싶은말</label>
          <textarea type="feedback" id="feedback" rows={5} ref={feedbackRef} />
        </div>
        <button>제출하기</button>
      </form>
      <br />
      <button onClick={getFeedback}>작성된 피드백 보기</button>
      {feedbackData.map((item) => (
        <p key={item.id}>{item.feedback}</p>
      ))}
    </div>
  );
}
