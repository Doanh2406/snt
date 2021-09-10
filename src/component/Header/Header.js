import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfor } = userLogin;
  const hanldeLogout = () => {
    localStorage.removeItem("userInfor");
    history.push("/");
  };
  return (
    <div className="header-container">
      <div className="header-left">
        <a href="#" className="header-left__brand header-text ">
          Animal Store
        </a>
      </div>
      <div className="header__search">
        <AiOutlineSearch className="header__search-icon" />
        <input
          type="text"
          placeholder="Search ..."
          className="header__search-box"
        />
      </div>
      <div className="header-right" onClick={hanldeLogout}>
        <a href="#" className="header-left__logout header-text ">
          Log Out
        </a>
        <div className="header-right__down-arrow"></div>
      </div>
    </div>
  );
}

export default Header;
