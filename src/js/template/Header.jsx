import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../components/Nav.jsx";
import Logo from "../components/Logo.jsx";

class Header extends React.Component {

    /**
     * Initialize Header Component State
     */
    constructor() {
        super();
    }

    /**
     * Render Header Component
     */
    render() {
        return (
            <div className="header row-fluid">
                <div className="col-2">&nbsp;</div>
                <div className="col-8">
                    <Logo src={this.props.logoImg} text={this.props.logoText} />
                    <Nav />
                </div>
                <div className="col-2">&nbsp;</div>
            </div>
        );
    }

}

export default Header;