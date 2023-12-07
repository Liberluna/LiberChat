import { Options } from "$fresh/plugins/twindv1.ts";
import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.2.0-next-20221226213230"
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@undefined"

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset],
    plugins: {
      red: `text-red-700`
    }
  }),
  selfURL: import.meta.url,
} as Options;
