import React from "react"
import Option from "./Option"


class Options extends React.Component {
    render() {
        return (
            <div>
                <div className="widget--header">
                    <h3>Your Options</h3>

                    <button onClick={this.props.handleRemoveAll} className="buttonSmall buttonSmall--link">Remove All</button>

                </div>
                {this.props.optionsArray == 0 && <p className="widget--msg">Add new Options here</p>}
                {this.props.optionsArray.map((optionEl, index) => <Option key={optionEl} OptionText={optionEl} handleRemove={this.props.handleRemove} count={index + 1}></Option>)}
            </div>
        )
    }
}

export default Options