import React from 'react';
import headerIcon from '../assets/images/top_header.png';
import './Main.css';

const Main = () => {
    return (
        <div className="main_container">
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Contacts</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            E-mail: whitemountstudios@gmail.com<br/>
                            Telegram: <a href="https://t.me/EcliptorFoundation">Telegram</a>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h1 className="main_title">We're an game <br/>
                            development <br/>
                            studio. </h1>
                    </div>

                    <div className="col-lg">
                        <img className="main_image" src={headerIcon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;