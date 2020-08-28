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
      selectedFile: null
    }
  }

  handleFileInput(e) {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  handlePost() {
    const formData = new FormData()
    formData.append('file', this.state.selectedFile)

    return axios.post("../server/fileupload", formData).then(res => {
      alert('success')
    }) .catch(err => {
      alert('fail')
    })
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
