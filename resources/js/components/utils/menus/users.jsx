import React, { Component } from "react";

class UserMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="sidebarIcon fas fa-users"></i>
                        Users
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default UserMenu;
