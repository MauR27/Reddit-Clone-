import React, { useState } from "react";
import { SiReddit } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { getTermSearch } from "../../app/redditSlice";
import { useDispatch } from "react-redux";
import "./Header.css";

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
    <>
      <div>
        <form className="header" onSubmit={handleSubmit}>
          <SiReddit className="reddit-icon" />
          <h2 className="reddit-title">
            Reddit<span className="color-title">Minimal</span>
          </h2>
          <div className="inputs">
            <input
              type="text"
              name="searchBar"
              placeholder="Search"
              className="search-input"
              onChange={onChangeTerm}
              value={searchTermLocal}
            />
          </div>
          <CiSearch className="btn-search" onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
}
