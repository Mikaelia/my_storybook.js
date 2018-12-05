import React from "react";
import { setAddon, configure, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";

// Global Styling
addDecorator(story => (
  <div style={{ padding: "20px", textAlign: "center" }}>{story()}</div>
));

// Enables JSX Output
setAddon(JSXAddon);

function loadStories() {
  require("./welcomeStory");
  require("../src/components/index.js");
}

configure(loadStories, module);
