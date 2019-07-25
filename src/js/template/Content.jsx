import React, { Component } from "react";
import ReactDOM from "react-dom";


class Content extends React.Component {

    /**
     * Initialize Content Component State
     */
    constructor() {
        super();
    }

    /**
     * Render Content Component
     */
    render() {
        var classes = "content row";
        if (this.props.className) {
            classes = classes.concat(" ", this.props.className);
        };
        return (
            <div className={classes}>
                <div className="col-2">&nbsp;</div>
                <div className="col-8">
                    {this.props.children}
                </div>
                <div className="col-2">&nbsp;</div>
            </div>
        );
    }

}

export default Content;