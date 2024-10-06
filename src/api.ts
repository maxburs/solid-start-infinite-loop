import fs from 'node:fs/promises';

"use server";

export function runThisOnTheServer() {
  return fs.readFile(import.meta.filename, 'utf8')
}
