import React from "react";
import "./Thanks.css";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="thanks">
      <h1>Thank you for contacting me!</h1>
      <button>
        <Link className="link" to="/">
          Go back to home
        </Link>
      </button>
    </div>
  );
};

export default Thanks;
