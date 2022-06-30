import React from "react";

class Action extends React.Component {
    render() {
        return (<div>
            <button onClick={this.props.handlePick} disabled={!this.props.hasOption}>What Should I do......</button>
        </div>)
    }
}

export default Action