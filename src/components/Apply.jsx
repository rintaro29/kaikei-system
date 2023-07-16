import React from "react";
import "./Apply.css";
import { useHistory } from "react-router-dom";

const Apply = () => {
  const history = useHistory();
  const goToApplyForm = () => {
    history.push("/apply-form"); // Navigate to ApplyForm when the button is clicked
  };

  return (
    <div className="applyContainer">
      <button className="applyButton" onClick={goToApplyForm}>
        購入申請へ
      </button>
      <div className="pastHistory">
        <p>過去の購入履歴</p>
      </div>
    </div>
  );
};

export default Apply;
