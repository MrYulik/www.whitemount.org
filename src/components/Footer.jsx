import React from 'react';
import {FaTelegram} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-dark mr200">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Studio</h3>
                            <ul>
                                <li><a href="#games">Games</a></li>
                                <li><a href="#teams">Team</a></li>
                                <li><a href="/police">Private policy</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <selection id="about">
                                <h3>Contact</h3>
                                <ul>
                                    <li><a href="mail:whitemountstudios@gmail.com">whitemountstudios@gmail.com</a></li>
                                </ul>
                            </selection>
                        </div>
                        <div className="col item social"><a href="https://t.me/EcliptorFoundation"><FaTelegram /></a></div>
                    </div>
                    <p className="copyright">Whitemount Studios © 2024</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;