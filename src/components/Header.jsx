import { useHistory } from "react-router-dom";
import React from "react";
import "./Header.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import faviconImage from "../img/rcc-favicon.png";
import userIcon from "../img/user.jpg";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    // ログイン状態をリセット
    history.push("/"); // ログアウト後にログイン画面にリダイレクトする
  };

  return (
    <div className="header">
      <div className="rcc">
        <div className="favicon">
          <img src={faviconImage} alt="テーマ画像" />
        </div>
        <div className="title">
          <p>RCC会計</p>
        </div>
      </div>
      <div className="headerSearch">
        <input type="text" placeholder="検索" />
        <SearchIcon />
      </div>
      <div className="spacer" /> {/* 無意味な要素を追加 */}
      <div className="headerRight">
        <NotificationsNoneIcon />
        <MailOutlineIcon />
        <img src={userIcon} alt="ユーザ" />
        <div className="headerUser">
          <p>立命太郎</p>
        </div>
      </div>
      <button className="logoutButton" onClick={handleLogout}>
        ログアウト
      </button>
    </div>
  );
};

export default Header;
