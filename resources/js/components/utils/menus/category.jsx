import React, { Component } from "react";

class CategoryMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a
                        href="#"
                        className={
                            this.props.activeValue === "Category"
                                ? "nav-link active"
                                : "nav-link"
                        }
                        onClick={() => {
                            this.props.setActive("Category");
                        }}
                    >
                        <i className="sidebarIcon fas fa-list-alt"></i>
                        Category
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default CategoryMenu;
