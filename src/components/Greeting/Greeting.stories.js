import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Greeting from ".";

storiesOf("Greeting", module)
  .addDecorator(withKnobs)
  .add("default", () => <Greeting>{text("Label", "Hello")}</Greeting>);
