import React from "react";
import "../css/quiz.css";

const QuizAccess = (props) => {
  return (
    <div className="dateAdded">
      <h1>
        The Quiz access is <span>denied Now</span>!
      </h1>
      {/* <h1>
        This Quiz will open on {props.date} {props.EnglishMonth} 2023 at{" "}
        {props.from}AM to {props.to}PM Pakistan Time
      </h1>
      <p className="text">
        انتظار فرمائیں۔ یہ سوالنامہ {props.date} {props.UrduMonth} پاکستان ٹائم
        کے مطابق صبح {props.from} بجے سے لے کر رات {props.to} بجے تک اوپن رہے گا
      </p> */}
    </div>
  );
};

export default QuizAccess;
