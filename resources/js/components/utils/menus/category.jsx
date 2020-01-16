import React, { Component } from "react";

class CategoryMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="sidebarIcon fas fa-list-alt"></i>
                        Category
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default CategoryMenu;
