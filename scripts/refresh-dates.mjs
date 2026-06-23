// Keeps commit dates in README.md current.
// Markers (the date between them is rewritten; the rest of the line is static):
//   first commit <!--fc:owner/repo-->YYYY-MM-DD<!--/fc-->
//   last  commit <!--lc:owner/repo-->YYYY-MM-DD<!--/lc-->
// `fc` resolves the repo's FIRST commit, `lc` the LATEST. Empty repos are left as-is
// (so a placeholder like "—" stays until the repo has its first commit).
// Run by .github/workflows/refresh-dates.yml.

import { readFile, writeFile } from "node:fs/promises";

const FILE = "README.md";
const LC = /<!--lc:([^>]+)-->(.*?)<!--\/lc-->/g;
const FC = /<!--fc:([^>]+)-->(.*?)<!--\/fc-->/g;

const headers = {
  Accept: "application/vnd.github+json",
  ...(process.env.GH_TOKEN ? { Authorization: `Bearer ${process.env.GH_TOKEN}` } : {}),
};

async function latestCommit(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, { headers });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.[0]?.commit?.author?.date?.slice(0, 10) ?? null;
}

async function firstCommit(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, { headers });
  if (!res.ok) return null;
  const link = res.headers.get("link") || "";
  const m = link.match(/[?&]page=(\d+)>;\s*rel="last"/);
  if (!m) {
    // single page → only one commit; it's both first and last
    const data = await res.json();
    return data?.[0]?.commit?.author?.date?.slice(0, 10) ?? null;
  }
  const res2 = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1&page=${m[1]}`, { headers });
  if (!res2.ok) return null;
  const data2 = await res2.json();
  return data2?.[0]?.commit?.author?.date?.slice(0, 10) ?? null;
}

let md = await readFile(FILE, "utf8");

const lcRepos = [...new Set([...md.matchAll(LC)].map((m) => m[1]))];
const fcRepos = [...new Set([...md.matchAll(FC)].map((m) => m[1]))];

const lcDates = {};
for (const repo of lcRepos) {
  try { const d = await latestCommit(repo); if (d) lcDates[repo] = d; }
  catch (e) { console.error(`lc ${repo}: ${e.message}`); }
}
const fcDates = {};
for (const repo of fcRepos) {
  try { const d = await firstCommit(repo); if (d) fcDates[repo] = d; }
  catch (e) { console.error(`fc ${repo}: ${e.message}`); }
}

md = md
  .replace(LC, (full, repo) => (lcDates[repo] ? `<!--lc:${repo}-->${lcDates[repo]}<!--/lc-->` : full))
  .replace(FC, (full, repo) => (fcDates[repo] ? `<!--fc:${repo}-->${fcDates[repo]}<!--/fc-->` : full));

await writeFile(FILE, md);
console.log("first:", fcDates, "last:", lcDates);
