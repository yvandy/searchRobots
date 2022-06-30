import "./modal.css";

const ModalElement = (props) => {
    console.log(props);
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div>Name: {props.name} </div>
                <div>Age: {props.age} </div>
                <button type="button" onClick={props.handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default ModalElement;
