import React from "react";
import "./App.css";
import TopBar from "./components/topbar";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <div className="App">
      <TopBar />

      <div className="blog-posts">
        <BlogPost title="SHASHANK" date="May 31, 2024" author="KJ">
          <p>Loyalist college</p>
        </BlogPost>
        <BlogPost title="Sunny" date="June 1, 2024" author="Raze">
          <p>Srinidhi college</p>
        </BlogPost>
        <BlogPost title="Sage" date="June 2, 2024" author="jjk">
          <p> Lorem ipsum</p>
        </BlogPost>
        <BlogPost title="Roni" date="June 3, 2024" author="luffy">
          <p>Dunks</p>
        </BlogPost>
      </div>
    </div>
  );
}

export default App;
