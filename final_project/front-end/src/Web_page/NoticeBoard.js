import React from 'react';
import Header from '../public_comp/Header'

const sections = [
  { title: 'Streaming', url: '#' },
  { title: 'Board', url: '#' },
  { title: 'My Page', url: '#' },
];

class NoticeBoard extends React.Component {
  render() {
    return (
      <div>
        <Header title = "SoonDoll" sections = {sections} />
        NoticeBoard
      </div>
    );
  }
}

export default NoticeBoard;
