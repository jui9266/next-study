import React from "react";
import { buildFeedbackPath, extractFeedback } from "./api/feedback";

function Feedback({feedbacks}) {
  return <div>{feedbacks.map(feedback => <p key={feedback.id}>{feedback.feedback}</p>)}</div>;
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath)

  return {
    props : {
        feedbacks : data
    }
  }
}
export default Feedback;
