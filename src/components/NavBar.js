import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function NavBar(props) {
    let navMode = "light";
    if (props.mode !== null) {
        navMode = "dark";
    } else {
        navMode = "light";
    }

    const setActive = (e) => {
        document.getElementById("homelink").classList.remove("active");
        document.getElementById("aboutlink").classList.remove("active");
        e.target.classList.add("active");
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${navMode} bg-${navMode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" onClick={setActive} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" onClick={setActive} id="homelink" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={setActive} id="aboutlink" to="/About">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="form-check form-check-inline text-info">
                        <input className="form-check-input" type="radio" onChange={props.handleToggle} name="inlineRadioOptions" id="lightMode" value="light" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Light Mode</label>
                    </div>
                    <div className="form-check form-check-inline text-primary">
                        <input className="form-check-input" type="radio" onChange={props.handleToggle} name="inlineRadioOptions" id="primaryMode" value="primary" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Blue Dark Mode</label>
                    </div>
                    <div className="form-check form-check-inline text-danger">
                        <input className="form-check-input" type="radio" onChange={props.handleToggle} name="inlineRadioOptions" id="dangerMode" value="danger" />
                        <label className="form-check-label" htmlFor="inlineRadio3">Red Dark Mode</label>
                    </div>
                    <div className="form-check form-check-inline text-success">
                        <input className="form-check-input" type="radio" onChange={props.handleToggle} name="inlineRadioOptions" id="dangerMode" value="success" />
                        <label className="form-check-label" htmlFor="inlineRadio3">Green Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title: "Set title here",
    aboutText: "About"
}

export default NavBar;