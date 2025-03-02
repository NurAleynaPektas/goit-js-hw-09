import { defineConfig } from "vite";
export default defineConfig(({ command }) => {
  return {
    base: "/goit-js-hw-09/",
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
  };
});
