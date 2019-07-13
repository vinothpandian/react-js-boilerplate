import React from "react";
import { storiesOf } from "@storybook/react";

import Button from ".";

storiesOf("Button", module)
  .add("default", () => <Button>Button</Button>)
  .add("dark", () => <Button dark>Button</Button>);
