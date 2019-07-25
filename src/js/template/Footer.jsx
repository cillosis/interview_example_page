import React, { Component } from "react";
import ReactDOM from "react-dom";


class Footer extends React.Component {

    /**
     * Initialize Footer Component State
     */
    constructor() {
        super();
    }

    /**
     * Render Footer Component
     */
    render() {
        return (
            <footer>
                {this.props.children}
            </footer>
        );
    }

}

export default Footer;