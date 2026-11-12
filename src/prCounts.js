import { useEffect, useState } from "react";

// Same queries as the "merged PRs" links on the page, so the numbers match what a visitor sees there.
const prQueries = {
  frappe: "is:pr is:merged repo:frappe/frappe involves:harshp4114",
  erpnext: "is:pr is:merged repo:frappe/erpnext involves:harshp4114",
  bank: "is:pr is:merged repo:resilient-tech/bank_integration author:harshp4114",
};

// Shown until GitHub answers, and kept if it can't (offline, rate limited: 10 searches/min per IP).
const fallback = { frappe: 19, erpnext: 4, bank: 6 };
const CACHE_KEY = "pr-counts";
const MAX_AGE = 6 * 60 * 60 * 1000;

const readCache = () => {
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_KEY));
    return c && Date.now() - c.at < MAX_AGE ? c.counts : null;
  } catch {
    return null;
  }
};

const fetchCount = (q) =>
  fetch(`https://api.github.com/search/issues?per_page=1&q=${encodeURIComponent(q)}`, {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((d) => d.total_count);

export const usePrCounts = () => {
  const [counts, setCounts] = useState(() => readCache() || fallback);

  useEffect(() => {
    if (readCache()) return;
    const keys = Object.keys(prQueries);
    Promise.allSettled(keys.map((k) => fetchCount(prQueries[k]))).then((results) => {
      const next = { ...fallback };
      results.forEach((r, i) => { if (r.status === "fulfilled") next[keys[i]] = r.value; });
      setCounts(next);
      if (results.every((r) => r.status === "fulfilled")) {
        try { localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), counts: next })); } catch {}
      }
    });
  }, []);

  return counts;
};
