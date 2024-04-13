import React from 'react';
import icon from '../assets/images/logo.png';
import './Header.css';
import MyButton from "../UI/MyButton";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="/"><img src={icon} alt=''/><span>Whitemount</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="mr-auto">
                    </ul>

                    <li className="nav-item">
                        <a className="nav-link" href="#games">Games</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#exampleModalCenter" data-toggle="modal" data-target="#exampleModalCenter">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#teams">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/police">Private police</a>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Header;