import React, { useEffect } from "react";
import AppBuilderMethods from "@appbuilder/react";
import customization from "./customization";

function App() {
  useEffect(() => {
    AppBuilderMethods.customize(customization);
  });

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <AppBuilderMethods.View />
    </div>
  );
}

export default App;
