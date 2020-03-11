import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import './css/Index_SideBar.css';

class Index_AppBar extends Component {
    render() {
        return (
            <Menu>
                <a className = "menu-item" href = "/">
                    Home
                </a>

                <a className = "menu-item" href = "/">
                    Laravel
                </a>

                <a className = "menu-item" href = "/">
                    Angular
                </a>

                <a className = "menu-item" href = "/">
                    Vue
                </a>

                <a className = "menu-item" href = "/">
                    React
                </a>

                <a className = "menu-item" href = "/">
                    Node
                </a>
            </Menu>
        )
    }
}

export default Index_AppBar;
