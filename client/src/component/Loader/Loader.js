import React from "react";
import "./loader.css";
import { FallingLines } from "react-loader-spinner";

export default function Loader(props) {
  const popd = props.pop;
  return (
    <>
      {popd && (
        <div className=" mainDiv d-flex justify-content-center align-items-center">
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      )}
    </>
  );
}
