import React, { useState } from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import WritePage from "./components/pages/WritePage";
import PostPage from "./components/pages/PostPage";
import PostListPage from "./components/pages/PostListPage";
import MainPage from "./components/pages/MainPage";
import MyPage from "./components/pages/MyPage";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: null
    }
  }

  onChange = (e) => {
    this.setState({
      img: (e.target.files[0])
    })
  }

  onClick = async () => {
    const formData = FormData()
    formData.append('file', img);
    const res = await axios.post("/api/upload", formData)
    console.log(Res)
  }

  render() {
    return (
      <React.Fragment>
        {/* <Route component={MainPage} path="/" exact={true} />
          <Route
            component={PostListPage}
            path={["/@:username", "/postList"]}
            exact={true}
          />
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={WritePage} path="/write" />
          <Route component={PostPage} path="/@:username/:postId" />
          <Route component={MyPage} path="/mypage" /> */}

        <input type="file" onChange={e => this.handleFileInput(e)} name="file" />
        <button type='button' onClick={this.handlePost()}>
          Submit
        </button>
      </React.Fragment>
    );
  }
}

export default App;
