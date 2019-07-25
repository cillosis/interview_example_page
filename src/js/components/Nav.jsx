import React, { Component } from "react";
import ReactDOM from "react-dom";

class Nav extends React.Component {

    /**
     * Initialize Nav Component State
     */
    constructor() {
        super();
    }

    /**
     * Render Nav Component
     */
    render() {
        return (
            <nav className="nav">
                <div className="dropdown">
                    <button className="dropbtn">Item 1 <i className="fa fa-chevron-down" aria-hidden="true"></i></button>
                    <div className="dropdown-content">
                        <a href="#">Item title 2a</a>
                        <a href="#">Item 2b</a>
                    </div>
                </div>
                <a className="navbtn" href="#">Item 2</a>
                <a className="navbtn" href="#">Item 3</a>
            </nav>
        );
    }

}

export default Nav;