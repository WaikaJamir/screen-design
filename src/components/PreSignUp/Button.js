import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import Form from "../Form";

function Buttoncol() {
  const [open, setOpen] = useState(false);

  const alertButton = () => {
    setOpen(!open);
  };
  return (
    <>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <input type="text" />
        </div>
      </Collapse>
      {/* <Button
        // onClick={() => setOpen(!open)}
        onClick={openButton}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button> */}

      <Form alertButton={alertButton} />
    </>
  );
}

export default Buttoncol;
