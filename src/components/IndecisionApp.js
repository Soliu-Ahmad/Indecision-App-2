import React from "react";
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import Header from './Header';
import OptionModal from "../OptionModal";

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.addOption = this.addOption.bind(this);
        this.handleRemove = this.handleRemove.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.state = {
            optionsArray: [],
            selectedOption: undefined
        }
    }

    handlePick() {
        const randomNum = Math.trunc(Math.random() * this.state.optionsArray.length);
        const finalOption = this.state.optionsArray[randomNum];


        this.setState(() => {
            return {
                selectedOption: finalOption
            }
        })
    }



    handleRemoveAll() {
        this.setState(() => {
            return {
                optionsArray: []
            }
        })
    }

    handleRemove(optionToRemove) {
        this.setState((prevState) => {
            return {
                optionsArray: prevState.optionsArray.filter(oddOption => oddOption !== optionToRemove)
            }
        })
    }

    addOption(newOption) {
        // console.log(newOption)
        this.setState((prevState) => {
            return {
                optionsArray: prevState.optionsArray.concat(newOption)
            }

        })
    }

    closeModal() {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Action hasOption={this.state.optionsArray.length > 0} handlePick={this.handlePick} />

                    <div className="widget">
                        <Options optionsArray={this.state.optionsArray} handleRemoveAll={this.handleRemoveAll} handleRemove={this.handleRemove} />
                        <AddOption addOption={this.addOption} />
                    </div>
                    <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal} />
                </div>

            </div>
        )
    }
}

export default IndecisionApp