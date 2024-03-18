import React from "react";

const { default: LayoutAuth } = require("@/components/layouts/auth");

export default function Home() {
  return (
    <React.Fragment>
      <LayoutAuth />
    </React.Fragment>
  );
}
