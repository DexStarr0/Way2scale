import React from "react";

export default function Alert(props) {
  const alert = props.alert;
  return (
    <>
      {alert && (
        <div
          className={`alert alert-${alert.type} text-capitalize font-weight-bold text-truncate alert-dismissible fade show p-1 d-flex justify-content-center align-items-center`}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "10",
            height: "60px",
            marginTop: "60px",
            width: "100%",
          }}
          role="alert"
        >
          {alert.type} : {alert.msg}
        </div>
      )}
    </>
  );
}
