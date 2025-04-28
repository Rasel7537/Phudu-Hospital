import React, { useState } from "react";
import { BeatLoader } from "react-spinners";

const Spinner = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <button
        onClick={() => setLoading(!loading)}
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: 16,
          margin: 20,
          padding: 5,
        }}
      >
        {" "}
        loader{" "}
      </button>
      <div className="text-center">
        <BeatLoader loading={loading} color="black" />
      </div>
    </div>
  );
};

export default Spinner;
