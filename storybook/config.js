/* eslint-disable */
import { configure, addDecorator } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import packageJson from "../package.json";

function loadStories() {
  require("../stories/index.js");
}

/*
 *addDecorator(
 *  withOptions({
 *    name: "obaranovskyi starter kit",
 *    url: packageJson.repository.url,
 *    showAddonPanel: false,
 *  })
 *);
 */

configure(loadStories, module);
