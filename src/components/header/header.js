import React from 'react';
import { Link } from 'react-router-dom';
import brainflixlogo from "../../assets/images/Logo/BrainFlix-logo.svg";
import yourimg from "../../assets/images/images/Mohan-muruge.jpg";
import uploadimg from "../../assets/images/Icons/upload.svg";
import './header.scss';

function Header() {
    return (
        <header className="Header">
            <Link to="/" className="navbar__search--logo">
                <img src={brainflixlogo} alt="brainflix logo" />
            </Link>
            <form className="navbar__useroptions">
                <div className="navbar__searchbar__container">
                    <input className="navbar__searchbar" type="text" placeholder="Search" />
                </div>
                <Link to="/" className="navbar__userimg">
                    <img src={yourimg} alt="Your Image" className="navbar__userimg" />
                </Link>
                <div className="navbar__upload-button__container">
                    <Link to="/upload" >
                        <button type="submit" className="navbar__upload-button" >
                            <img className="navbar__upload-button__image" src={uploadimg} alt="Upload" />
                            UPLOAD
                        </button>
                    </Link>
                </div>
            </form>
        </header>
    );
}

export default Header;