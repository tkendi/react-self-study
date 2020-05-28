import React from 'react'
import {NavLink, BrowserRouter as Router} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';
import './SideBar.scss'

class SideBar extends React.Component {
    render() {
        return(
            <Menu>
                <NavLink to = "/">
                    게시판
                </NavLink>
                <NavLink to = "/">
                    Streaming
                </NavLink>
                <NavLink to = "/">
                    Chatting
                </NavLink>
            </Menu>
        )
    }
}

export default SideBar
