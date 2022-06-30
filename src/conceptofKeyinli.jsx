import React from "react";

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filtersArr: [] }
        this.addButtons = this.addButtons.bind(this);
        this.removeButtons = this.removeButtons.bind(this);
        this.getInput = this.getInput.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    addButtons(e) {
        let tempArr = this.state.filtersArr;        
        tempArr.push({ comp: this.getInput(e.target.id), id: e.target.id });
        console.log(tempArr);
        this.setState({ filtersArr: tempArr });
    }

    removeButtons(e) {
        console.log(e.target.id);
        let newArr = this.state.filtersArr.filter((filter) => {
            return (filter.id !== 'FirstButton')
        })
        this.setState({ filtersArr: newArr });
    }

    onChangeHandler(e) {
        console.log(e.target.value);
    }

    getInput(id) {
        return (
            <div>
                <h6>{id}</h6>
                <input
                    id="min"
                    type="text"
                    placeholder="min"
                    onChange={this.onChangeHandler} />
            </div>
        )
    }

    render() {
        console.log(this.state.filtersArr)
        let styles = {
            display: 'inline-block'
        }

        return (
            <div>
                <p>Add three buttons and enter the number in each input, and remove amt.</p>
                <button id="FirstButton" onClick={this.addButtons}>FirstButton</button>
                <button id="SecondButton" onClick={this.addButtons}>SecondButton</button>
                <button id="ThirdButton" onClick={this.addButtons}>ThirdButton</button>

                <button id="FirstButton" onClick={this.removeButtons}>Remove firstButton</button>

                <ul>
                    {this.state.filtersArr.map((filter, index) => {
                        return <li style={styles} key={filter.id}>{filter.comp}</li>
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default ButtonComponent;
