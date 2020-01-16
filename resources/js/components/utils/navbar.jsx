import React, { Component } from "react";
class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        };
    }
    render() {
        return (
            <React.Fragment>
                <nav
                    id="navcode"
                    className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"
                >
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                        FMS
                    </a>
                    <input
                        className="form-control form-control-dark w-100"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">
                                Sign out
                            </a>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
