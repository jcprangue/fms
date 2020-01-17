import React, { Component } from "react";

class ProgramMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a
                        href="#"
                        className={
                            this.props.activeValue === "Program"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={() => {
                            this.props.setActive("Program");
                        }}
                    >
                        <i className="sidebarIcon fas fa-cogs"></i>
                        Program Settings
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default ProgramMenu;
