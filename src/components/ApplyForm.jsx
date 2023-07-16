import React from "react";
import "./ApplyForm.css";
import { useHistory } from "react-router-dom";

const ApplyForm = () => {
  const history = useHistory();
  const goToApply = () => {
    history.push("/home"); // Navigate back to Apply when the button is clicked
  };

  return (
    <div>
      <div className="applyForm">
        <div className="applyFormContainer">
          <h1>購入申請</h1>
          <form>
            <label htmlFor="name">購入品名</label>
            <div className="goodsName"></div>
            <input id="goodsName" type="goodsName" placeholder="" />

            <label htmlFor="money">金額</label>

            <input id="money" type="money" placeholder="" />

            <label htmlFor="applicant">申請者</label>

            <input id="applicant" placeholder="" />

            <div className="applyPurchase">
              <label htmlFor="applyPurchase">申請理由</label>
              <input id="applyPurchase" placeholder="" />
            </div>

            <button className="loginButton" type="">
              購入する
            </button>
            <div className="backButton">
              <button onClick={goToApply}>戻る</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
