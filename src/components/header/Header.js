import React, { useState } from "react";
import { SiReddit } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { getTermSearch } from "../../app/redditSlice";
import { useDispatch } from "react-redux";
import "./Header.css";
import SubReddits from "../posts/subReddit/SubReddits";

export default function Header() {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const dispatch = useDispatch();
  function onChangeTerm(e) {
    setSearchTermLocal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getTermSearch(searchTermLocal));
    setSearchTermLocal("");
  }

  return (
    <form className="header" onSubmit={handleSubmit}>
      <div className="logo">
        <SiReddit className="reddit-icon" />
        <h2 className="reddit-title">
          Reddit<span className="color-title">Minimal</span>
        </h2>
      </div>
      <div className="input">
        <input
          type="text"
          name="searchBar"
          placeholder="Search"
          className="search-input"
          onChange={onChangeTerm}
          value={searchTermLocal}
        />
        <CiSearch className="btn-search" onClick={handleSubmit} />
      </div>
    </form>
  );
}
