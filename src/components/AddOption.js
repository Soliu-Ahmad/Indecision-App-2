import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleAddOption(e) {
        e.preventDefault();
        const formOption = e.target.elements.options.value;

        if (formOption) {
            this.props.addOption(formOption);
            e.target.elements.options.value = ''
        }

    }
    render() {
        return (<div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="options" />
                <button>Add Option</button>
            </form>

        </div>)
    }
}
export default AddOption;