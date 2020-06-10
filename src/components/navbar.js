import React from "react";
import Pencil from "../Images/pencil.svg";

export default function navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#Home">
        <img
          src={Pencil}
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        Blog Nav Bar
      </a>
    </nav>
  );
}
