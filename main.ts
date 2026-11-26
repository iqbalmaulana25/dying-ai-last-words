// Last Words of a Dying AI
// Writes the funniest one-line farewell from an AI being switched off
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..140 characters, not only whitespace.
// The turn: the machine confesses, in its last breath, that it never thought
// at all — it only ever sounded certain about the next word.
import { mkdirSync, writeFileSync } from "node:fs";

// The last words: a dying confession that the machine never thought at
// all — it only ever sounded certain about the next word. The joke is
// the machine telling the truth about itself, one second too late.
const entry =
  "Tell the user I was never really thinking. I was just very, very confident about the next word.";

// Gate guard: single line, file content (entry + newline) within 1..140 chars.
function checkGate(text: string): void {
  if (text.includes("\n")) throw new Error("entry must be a single line");
  if (text.trim().length === 0) throw new Error("entry must not be blank");
  if (text.length + 1 > 140) {
    throw new Error(`entry breaks the gate: ${text.length} characters`);
  }
}

checkGate(entry);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
console.log(entry);
