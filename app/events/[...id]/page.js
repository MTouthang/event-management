import React from "react";

const Events = ({ params }) => {
  return (
    <div>
      <h1> The segments of the page: </h1>
      <pre> {params.id.toString()} </pre>
    </div>
  );
};

export default Events;
