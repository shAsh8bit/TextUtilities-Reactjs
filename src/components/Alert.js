import React from "react";


function Alert(props) {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      {props.Alert}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
