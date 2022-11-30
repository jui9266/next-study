import React, { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "./api/feedback";

function Feedback({ feedbacks }) {
  const [detailData, setDetailData] = useState();
  const handleFeedbackDetail = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailData(data.feedback));
  };

  return (
    <div>
      {detailData && (
        <div style={{'marginBottom' : "25px", 'fontWeight' : 'bold'}}>
          <p>
            {detailData.email} {detailData.feedback}
          </p>
        </div>
      )}
      {feedbacks.map((feedback) => (
        <div key={feedback.id}>
          <p>{feedback.feedback}</p>
          <button onClick={() => handleFeedbackDetail(feedback.id)}>
            디테일 확인
          </button>
        </div>
      ))}

    </div>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbacks: data,
    },
  };
}
export default Feedback;
