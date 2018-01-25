import React from 'react';

const Header = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <img className="mx-auto d-block" style={{ width: "75%", height: "75%" }} alt="Totoro!" src={require("../logo.png")} />
            </div>
        </div>
    )
}

export default Header;