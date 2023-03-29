import "./App.css";
import Header from "./components/header/Header";
import Reddit from "./components/posts/reddit/Reddit";
import SubReddits from "./components/posts/subReddit/SubReddits";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid-box">
        <Reddit />
        <SubReddits />
      </div>
    </div>
  );
}

export default App;
