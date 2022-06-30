import React from "react";
const Header = (props) => {
    return (<div>
        <h1>{props.topic}</h1>
        <h2>{props.subtitle}</h2>
    </div>)
}

Header.defaultProps = {
    topic: 'Indecision App',
    subtitle: 'Let Computer make decisions for you....'
}
export default Header