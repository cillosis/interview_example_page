import React, { Component } from "react";
import ReactDOM from "react-dom";

class Card extends React.Component {

    /**
     * Initialize Card Component State
     */
    constructor() {
        super();
    }

    /**
     * Render Card Component
     */
    render() {
        return (
            <div className="card" tag={this.props.tag}>
                <div className="card-image-container">
                    <img className="card-image" src={this.props.image} />
                </div>
                <div className="card-title">{this.props.title}</div>
                <div className="card-content">{this.props.content}</div>
                <div className="card-button">{this.props.buttonText}</div>
            </div>
        );
    }

}

export default Card;