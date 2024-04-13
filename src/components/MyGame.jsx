import React from 'react';
import './MyGame.css';

const MyGame = () => {
    return (
        <selection id="games">
            <main className="main_container">
                <div className="container">
                    <h1 className="card_title">Our Games</h1>
                    <div className="row mr50">
                        <div className="col">
                            <a href="https://steamcommunity.com">
                                <div className="dws-card">
                                    <div className="dws-card-filter">
                                        <h4>Ecliptor</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm">
                            <a href="#">
                                <div className="dws-card-1">
                                </div>
                            </a>
                        </div>
                        <div className="col-md">
                            <a href="#">
                                <div className="dws-card-1">
                                </div>
                            </a>
                        </div>
                        <div className="col-lg">
                            <a href="#">
                                <div className="dws-card-1">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </selection>
    );
};

export default MyGame;