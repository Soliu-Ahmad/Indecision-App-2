import React from "react"


class Option extends React.Component {
    render() {
        return (<div>
            Available options: <p>{this.props.OptionText}</p>
            <button onClick={(e) => { this.props.handleRemove(this.props.OptionText) }}>remove</button>
        </div>)
    }
}
export default Option