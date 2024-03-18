import React from "react";

const { default: LayoutAuth } = require("@/components/layouts/auth");

export default function Home() {
  return (
    <main>
      <LayoutAuth />
    </main>
  );
}
