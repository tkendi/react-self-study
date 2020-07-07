import React from 'react';
import Header from '../public_comp/Header'

const sections = [
  { title: 'Streaming', url: '/Streaming' },
  { title: 'Board', url: '/NoticeBoard' },
  { title: 'My Page', url: '/myPage' }
];

class NoticeBoard extends React.Component {
  render() {
    return (
      <div>
        <Header title = "SoonDoll" sections = {sections} site_pos="streaming"/>
        NoticeBoard
      </div>
    );
  }
}

export default NoticeBoard;
