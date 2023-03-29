import React, { useState, useEffect } from "react";
import { SiReddit } from "react-icons/si";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div>
      <form className="header">
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
          />
        </div>
        <CiSearch className="btn-search" />
      </form>
    </div>
  );
}
