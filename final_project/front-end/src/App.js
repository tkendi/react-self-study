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
import ImageUploader from "react-images-upload";

import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      pictures: [],
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(imageList, addUpdateIndex) {
    console.log(imageList);
    this.setState({
      pictures: imageList,
    });
  }

  render() {
    console.log(this.state.pictures);
    return (
      <React.Fragment>
        <div className="App">
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

          <ImageUploader
            multiple
            value={this.state.pictures}
            onChange={this.onDrop}
            maxNumber="64"
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove all images</button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image.data_url} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploader>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
