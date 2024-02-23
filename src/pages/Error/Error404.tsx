import React, { Fragment } from "react";
import {Button} from 'react-bootstrap'
import { useNavigate } from "react-router";

function Error404() {
  let navigate=useNavigate()
  return (
    <Fragment>
      <div
        className="d-flex align-items-center justify-conten-center w-100"
        style={{ height: "200px" }}
      >
        <h2>404 - Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Button className="btn-primary" onClick={()=>{navigate("/")}}>Back to home</Button>
      </div>
    </Fragment>
  );
}

export default Error404;
