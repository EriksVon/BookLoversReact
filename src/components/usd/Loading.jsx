import React from "react";

function Loading() {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/*       <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div> */}
    </div>
  );
}

export default Loading;
