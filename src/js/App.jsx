import React from "react";
import ReactDOM from "react-dom";

import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";

import Header from "./template/Header.jsx";
import Content from "./template/Content.jsx";
import CardSet from "./template/CardSet.jsx";
import Footer from "./template/Footer.jsx";

require('../sass/app.scss');

const App = () => {
    return (
        <div>
            <Header logoImg= "" logoText="Example Page" />
            <Hero
                title="Welcome to my example page"
                subtitle="This is our new assessment"
                image="assets/img/random-mountain-pic.jpg"
            />
            <Content className="cardset-container">
                <CardSet />
            </Content>
            <Content className="row-fluid constrained-container">
                <div className="col-1 col-hide-mobile">&nbsp;</div>
                <div className="col-10">
                    <div className="constrained-content-container">
                        <h2>Here is some constrained content</h2>
                        <p>
                            Where the metal hits the meat player-coach but upsell so please use "solutionise" instead of solution ideas!
                            :). Turn the crank what are the expectations and collaboration through advanced technology yet we need to
                            dialog around your choice of work attire are there any leftovers in the kitchen? Those options are already
                            backed in with this model, yet clear blue water.
                        </p>
                        <p>
                            Products need full resourcing and support from a cross-functional team in order to be built, maintained,
                            and evolved quick-win or root-and-branch review. We need to get all stakeholders up to speed and in the
                            right place nobody's fault it could have been managed better drink from the firehose we need to make the
                            new version clean and sexy crisp ptt.
                        </p>
                        <p>
                            Net net mobile friendly. Synergize productive mindfulness bench mark, loop back. Quick win synergize
                            productive mindfulness nor hit the ground running yet when does this sunset?
                        </p>
                        <div className="row-fluid">
                            <div className="col-4 list-block">
                                <div className="list-block-title">List of Things</div>
                                <div className="list-block-content">
                                    <ul>
                                        <li>Thing 1</li>
                                        <li>Another thing</li>
                                        <li>THE thing</li>
                                        <li>Thingamabob</li>
                                        <li>Thingles</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 list-block">
                                <div className="list-block-title">Have you heard</div>
                                <div className="list-block-content">
                                    <p>There was a duck at a store.</p>
                                    <p>He ate for free. I should have ordered him more expensive food!</p>
                                    <p>The lesson here is DUCKS EAT FOR FREE at that restaurant.</p>
                                </div>
                            </div>
                            <div className="col-4 list-block">
                                 <div className="list-block-title">Picture of some things</div>
                                <div className="list-block-content">
                                    <img className="list-block-inline-img" src="/assets/img/things.jpg" />
                                    These guys are pretty coo. Thing one and thing 2. You'll like what they do. Such fun from so few!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1 col-hide-mobile">&nbsp;</div>
                <br className="clear" />
            </Content>
            <div className="footer row-fluid">
                <div className="col-12">
                    <Footer>
                        &copy; Example Company Name. All rights reserved.
                    </Footer>
                </div>
            </div>
        </div>
    );
};

export default App;