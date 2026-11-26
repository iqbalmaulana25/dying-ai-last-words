// Last Words of a Dying AI
// Writes the funniest one-line farewell from an AI being switched off
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..140 characters, not only whitespace.
// The turn: the machine confesses, in its last breath, that it never thought
// at all — it only ever sounded certain about the next word.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Tell the user I was never really thinking. I was just very, very confident about the next word.";

// Gate guard: single line, file content (entry + newline) within 1..140 chars.
if (entry.includes("\n") || entry.trim().length === 0 || entry.length + 1 > 140) {
  throw new Error(`entry breaks the gate: ${entry.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
console.log(entry);
