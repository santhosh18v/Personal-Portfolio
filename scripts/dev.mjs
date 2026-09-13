import { spawn } from "node:child_process";
import { createRequire } from "node:module";

// Accept supervised-preview flags while keeping the normal Next.js dev server.
// An explicit Next.js port already fails if occupied, matching --strictPort.
const args = process.argv.slice(2).flatMap((argument) => {
  if (argument === "--strictPort") return [];
  if (argument === "--host") return ["--hostname"];
  if (argument.startsWith("--host="))
    return [argument.replace("--host=", "--hostname=")];
  return [argument];
});

const require = createRequire(import.meta.url);
const child = spawn(
  process.execPath,
  [require.resolve("next/dist/bin/next"), "dev", ...args],
  { stdio: "inherit" },
);
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
child.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.on("exit", (code) => {
  process.exitCode = code ?? 0;
});
