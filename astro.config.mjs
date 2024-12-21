// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "load",
  },
  integrations: [icon()],
});
