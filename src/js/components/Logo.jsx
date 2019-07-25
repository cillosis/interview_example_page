import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "../components/Nav.jsx";

class Logo extends React.Component {

    /**
     * Initialize Logo Component State
     */
    constructor() {
        super();
    }

    /**
     * Render Logo Component
     */
    render() {
        return (
            <div className="logo">
                <a href="/">
                    {this.props.src ? (
                        <img src={this.props.src} alt={this.props.text} />
                    ) : (
                        <p>{this.props.text}</p>
                    )}
                </a>
            </div>
        );
    }

}

export default Logo;