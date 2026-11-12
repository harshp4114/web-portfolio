import { useEffect, useState } from "react";
import Flaps from "./Flaps";
import { projects, upstream } from "../data";

const istTime = () =>
  new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" });

const Departures = () => {
  const [time, setTime] = useState(istTime);
  useEffect(() => {
    const t = setInterval(() => setTime(istTime()), 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="board" id="departures" aria-labelledby="dep-h">
        <header>
          <h2 id="dep-h">Departures <small lang="hi">प्रस्थान</small></h2>
          <span className="clock" aria-hidden="true">{time} IST</span>
        </header>
        <div className="cols" aria-hidden="true"><span>Type</span><span>Project</span><span>Stack</span><span>Status</span></div>

        {projects.map((p, i) => (
          <details className="row" key={p.name} open={i === 0}>
            <summary>
              <Flaps text={p.type} className="type" />
              <Flaps text={p.name} />
              <ul className="via" aria-label={`${p.name} stack`}>
                {p.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
              <span className={`status${p.statusTone ? " " + p.statusTone : ""}`}>
                {p.status}<span className="toggle" aria-hidden="true"></span>
              </span>
            </summary>
            <div className={`detail${p.image ? "" : " solo"}`}>
              <div>
                <p>{p.summary}</p>
                {p.links.length > 0 && (
                  <div className="links">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                    ))}
                  </div>
                )}
              </div>
              {p.image && <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />}
            </div>
          </details>
        ))}
      </section>

      <section className="board" aria-labelledby="arr-h">
        <header>
          <h2 id="arr-h">Merged upstream <small lang="hi">आगमन</small></h2>
        </header>
        {upstream.map((u) => (
          <div className="row" key={u.repo}>
            <a className="arr" href={u.href} target="_blank" rel="noopener noreferrer">
              <Flaps text={u.count} className="type" />
              <Flaps text={u.repo} />
              <span className="note">{u.note}</span>
              <span className="status">{u.count} merged</span>
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Departures;
