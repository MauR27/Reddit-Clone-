import "./App.css";
import Header from "./components/header/Header";
import Comment from "./components/comments/Comment";
import { Route, Routes } from "react-router-dom";
import Home from "./components/posts/home/Home";
import SubReddits from "./components/posts/subReddit/SubReddits";

function App() {
  const activeSubreddit = "pics";
  const trueS = true;
  return (
    <div className="App">
      <Header />
      <div className="grid-box">
        {trueS ? <SubReddits activeSubreddit={activeSubreddit} /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comments/:linkToComments" element={<Comment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
