import "./Loading.css";
import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";

export default function Loading() {
  return (
    <div className="load-box">
      <div className="load-box-container">
        <div className="load-flex-box">
          <div className="load-likes">
            <TbArrowBigUp className="loadUp" />
            <p className="load-votes"></p>
            <TbArrowBigDown className="loadDown" />
          </div>
          <h1 className="load-title"></h1>
        </div>
        <div className="load-img"></div>
        <div className="load-author">
          <h1 className="load-time"></h1>
          <h1 className="load-time"></h1>
          <h1 className="load-time"></h1>
        </div>
      </div>
      <div className="load-box-container">
        <div className="load-flex-box">
          <div className="load-likes">
            <TbArrowBigUp className="loadUp" />
            <p className="load-votes"></p>
            <TbArrowBigDown className="loadDown" />
          </div>
          <h1 className="load-title"></h1>
        </div>
        <div className="load-img"></div>
        <div className="load-author">
          <h1 className="load-time"></h1>
          <h1 className="load-time"></h1>
          <h1 className="load-time"></h1>
        </div>
      </div>
      <div className="load-box-container">
        <div className="load-flex-box">
          <div className="load-likes">
            <TbArrowBigUp className="loadUp" />
            <p className="load-votes"></p>
            <TbArrowBigDown className="loadDown" />
          </div>
          <h1 className="load-title"></h1>
        </div>
        <div className="load-img"></div>
        <div className="load-author">
          <h1 className="load-time"></h1>
          <h1 className="load-time"></h1>
          <h1 className="load-time"></h1>
        </div>
      </div>
    </div>
  );
}
