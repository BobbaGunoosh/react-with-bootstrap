import React from "react";

export default function Blog() {
  return (
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>BLOG TITLE</strong>
      <p>blog description summary</p>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
