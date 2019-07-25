import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "../components/Card.jsx";
import CheckboxContainer from "../template/CheckboxContainer.jsx";

class CardSet extends React.Component {

    /**
     * Initialize CardSet Component State
     */
    constructor() {
        super();
    }

    /**
     * Render CardSet Component
     */
    render() {
        return (
            <div className="cardset">
                <div className="row-fluid">
                    <h2>These are cards</h2>
                    <p>These cards are cool & tell you things about animals! Did you know a bird can run up to 65mph? And a cat can jump 26 feet in the air to catch prey? Animals are so cool.</p>
                    <p>
                        <a href="#">Check out more animal facts!</a> There are so many facts to learn.
                    </p>
                    <div className="pull-right">
                        I want to see:&nbsp;&nbsp;
                        <CheckboxContainer />
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="col-3">
                        <Card
                            image="./assets/img/cat.png"
                            title="This is Card 1"
                            content="Cats use their whiskers to determine space between objects in the dark."
                            buttonText="Click & go!"
                            tag="cat"
                        />
                    </div>
                    <div className="col-3">
                        <Card
                            image="./assets/img/birds.png"
                            title="This is Card 2"
                            content="Some birds have membranes that cover their eyes like goggles, enabling them to see while traveling at high speeds."
                            buttonText="Click & go!"
                            tag="bird"
                        />
                    </div>
                    <div className="col-3">
                        <Card
                            image="./assets/img/cat.png"
                            title="This is Card 3"
                            content="The cheetah is the only cat that can't retract its claws."
                            buttonText="Click & go!"
                            tag="cat"
                        />
                    </div>
                    <div className="col-3">
                        <Card
                            image="./assets/img/birds.png"
                            title="This is Card 4"
                            content="Perigrine falcons can fly up to and sometimes surpassing 200mph as they hunt prey."
                            buttonText="Click & go!"
                            tag="bird"
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export default CardSet;