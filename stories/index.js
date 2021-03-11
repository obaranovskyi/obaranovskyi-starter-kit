import React from "react";
import { storiesOf } from "@storybook/react";

import { Ellipsis, Ring } from "../src";

storiesOf("Spinners", module)
  .add("Ellipsis", () => <Ellipsis />)
  .add("Ring", () => <Ring />);
