import React from "react";
import AgeValue from "./ageComponent";
import ModalElement from "./modalElement";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            dob: new Date(),
            age: 0,
            submitClicked: false,
            show: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getAge = this.getAge.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.hideModal = this.hideModal;
    }

    showModal() {
        this.setState({ show: true });
    };

    hideModal() {
        console.log("hi there !")
        this.setState({ show: false });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitClicked: true, show: true })
    }

    getAge(event) {
        let currentDate = new Date();
        let dob = new Date(event.target.value);
        let age1 = currentDate.getTime() - dob.getTime();
        let ageInYear = Math.floor((age1 / 1000 / 60 / 60 / 24 / 365));
        this.setState({ age: ageInYear });
    }
    // handleClose = () => this.hideModal;
    // a = handleClose()
    // a() ==> this.hideModal()

    // handleClose = this.hideModal
    // handleClose() === > this.hideModal()

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    Date Of Birth:
                    <input type="date" onChange={this.getAge} />
                    Age:
                    <AgeValue age={this.state.age} name={this.state.value} />
                </label>
                <ModalElement show={this.state.show} handleClose={this.hideModal} name={this.state.value} age={this.state.age} />
                ModalElement(show,hideModal, value,age)
                <input type="submit" value="Submit" /><br />
                {this.state.submitClicked && <h1> {this.state.value + "is " + this.state.age + " years old"} </h1>}
            </form>
        );
    }
}

export default NameForm;