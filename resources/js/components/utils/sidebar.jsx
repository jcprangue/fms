import React, { Component } from "react";
import DashBoard from "./menus/dashboard";
import File from "./menus/file";
import Reports from "./menus/reports";
import Users from "./menus/users";
import Category from "./menus/category";
import ProgramSettings from "./menus/program-settings";

class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="sidebar row mt-5">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar border-right px-0">
                        <div className="sidebar-sticky"></div>
                        <ul className="nav flex-column mt-2">
                            <DashBoard />
                            <File />
                            <Reports />
                        </ul>

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>System Settings</span>
                            <a
                                className="d-flex align-items-center text-muted"
                                href="#"
                            ></a>
                        </h6>
                        <ul className="nav flex-column mt-2">
                            <Users />
                            <Category />
                            <ProgramSettings />
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default sidebar;
