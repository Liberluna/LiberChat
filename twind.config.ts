import { Options } from "$fresh/plugins/twindv1.ts";
import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3"
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4"

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset],
    plugins: {
      red: `text-red-700`
    }
  }),
  selfURL: import.meta.url,
} as Options;
