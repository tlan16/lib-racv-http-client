import { BuildConfig } from "unbuild";

const config: BuildConfig = {
  entries: ["./index.ts"],
  sourcemap: true,
  declaration: "node16",
  clean: true,
  rollup: {
    emitCJS: true,
  },
};

export default config;
