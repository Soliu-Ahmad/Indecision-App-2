import React from "react";
const Header = (props) => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <h1 className="header__title">{props.topic}</h1>
                    <h2 className="header__subtitle">{props.subtitle}</h2>
                </div>
            </div>
        </div>
    )
}

Header.defaultProps = {
    topic: 'Indecision App',
    subtitle: 'Let Computer make decisions for you....'
}
export default Header