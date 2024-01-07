import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import htmx from "astro-htmx";
import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), htmx(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
