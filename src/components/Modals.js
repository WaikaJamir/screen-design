import React from "react";
import Modal from "react-bootstrap/Modal";

function Modals(props) {
  // const currentTime = new Date().toLocaleTimeString();
  // console.log(currentTime);

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={() => props.handleClose(true)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Check-Out!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ color: "red", textAlign: "center", fontSize: "20px" }}>
            <p> Hi! {props.users}, Are you sure you want to Check Out ?!</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            style={{
              borderWidth: 1,
              borderColor: "#005b8f",
              color: "#005b8f",
            }}
            className="btn btn"
            size="md"
            onClick={() => props.handleClose(true)}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            size="md"
            onClick={props.checkout}
          >
            Yes!
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modals;
