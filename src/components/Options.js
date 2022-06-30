import React from "react"
import Option from "./Option"


class Options extends React.Component {
    render() {
        return (<div>
            {this.props.optionsArray.map(optionEl => <Option key={optionEl} OptionText={optionEl} handleRemove={this.props.handleRemove}></Option>)}
            <button onClick={this.props.handleRemoveAll}>Remove All</button>
        </div>)
    }
}

export default Options