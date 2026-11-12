const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/";

// One split-flap cell per character, grouped by word so long labels wrap between
// words instead of mid-word. The real text is kept for screen readers.
const Flaps = ({ text, className = "" }) => (
  <span className={`flaps ${className}`}>
    <span className="sr-only">{text}</span>
    {text.toUpperCase().split(" ").map((word, w) => (
      <span className="word" aria-hidden="true" key={w}>
        {[...word].map((c, i) => <span key={i} data-c={c}>{c}</span>)}
      </span>
    ))}
  </span>
);

// Scramble every flap cell inside `root`, then settle on its real character.
export const flip = (root) => {
  root.querySelectorAll(".flaps").forEach((row, r) => {
    row.querySelectorAll("[data-c]").forEach((cell, i) => {
      const final = cell.dataset.c;
      let n = 5 + (i % 12) + (r % 6) * 2;
      const t = setInterval(() => {
        cell.textContent = --n > 0 ? glyphs[(Math.random() * glyphs.length) | 0] : final;
        if (n <= 0) clearInterval(t);
      }, 40);
    });
  });
};

export default Flaps;
