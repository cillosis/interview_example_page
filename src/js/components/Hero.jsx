import React, { Component } from "react";
import ReactDOM from "react-dom";

class Hero extends React.Component {

    /**
     * Initialize Hero Component State
     */
    constructor() {
        super();
    }

    /**
     * Render Hero Component
     */
    render() {
        return (
            <div className="hero row-fluid">
                <div className="col-2">&nbsp;</div>
                <div className="col-8">
                    <div className="hero-container">
                        <div className="hero-image">
                            <img src={this.props.image} />
                        </div>
                        <div className="hero-title">{this.props.title}</div>
                        <div className="hero-subtitle">{this.props.subtitle}</div>
                    </div>
                </div>
                <div className="col-2">&nbsp;</div>
            </div>
        );
    }

}

export default Hero;