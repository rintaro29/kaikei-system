import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PaidIcon from "@mui/icons-material/Paid";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li className="home">
            <HomeIcon className="mui-icon" />
            <Link to="/home">ホーム</Link>
          </li>
          <li className="apply">
            <NoteAddIcon className="mui-icon" />
            <Link to="/home/apply">購入申請</Link>
          </li>
          <li className="money">
            <PaidIcon className="mui-icon" />
            <Link to="/home/money">収支</Link>
          </li>
        </ul>
        <ul className="settings-ul">
          <li className="setting">
            <SettingsIcon className="mui-icon" />
            <Link className="link-text" to="/home/setting">
              設定
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
