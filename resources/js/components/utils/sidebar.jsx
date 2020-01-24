import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabClassName: "111"
        };
    }


    render() {
        return (
            <React.Fragment>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar border-right">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link"><i className="sidebarIcon fas fa-tachometer-alt"></i>Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/records" className="nav-link">
                                    <i className="sidebarIcon fas fa-file"></i>
                                    &nbsp;Records
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/reports" className="nav-link">
                                    <i className="sidebarIcon fas fa-print"></i>
                                    Reports
                                </NavLink>
                            </li>
                        </ul>

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center mt-4 mb-1 text-muted">
                            <span>System Settings</span>
                            <a className="d-flex align-items-center text-muted"></a>
                        </h6>

                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <NavLink to="/users" className="nav-link">
                                    <i className="sidebarIcon fas fa-users"></i>
                                    Users
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category" className="nav-link">
                                    <i className="sidebarIcon fas fa-list-alt"></i>
                                    Category
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/settings" className="nav-link ">
                                    <i className="sidebarIcon fas fa-cogs"></i>
                                    Program Settings
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
    clickActive = props => {
        this.setState({ activeTabClassName: props });
    };
}

export default sidebar;
