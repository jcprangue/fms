import React, { Component } from "react";

class fileMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a
                        href="#"
                        className={
                            this.props.activeValue === "File"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={() => {
                            this.props.setActive("File");
                        }}
                    >
                        <i className="sidebarIcon fas fa-file"></i>
                        &nbsp;Records
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default fileMenu;
