import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../styles/css/SideBar.scss';

function SideBar() {
  return (
    <Menu>
      <Link to="/NoticeBoard">Notice Board</Link>
      <Link to="/Streaming">Streaming</Link>
      <Link to="/" exact={true}>Chatting</Link>
    </Menu>
  );
}

export default SideBar;
