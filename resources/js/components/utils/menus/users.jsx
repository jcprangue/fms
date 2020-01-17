import React, { Component } from "react";

class UserMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a
                        href="#"
                        className={
                            this.props.activeValue === "Users"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={() => {
                            this.props.setActive("Users");
                        }}
                    >
                        <i className="sidebarIcon fas fa-users"></i>
                        Users
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default UserMenu;
