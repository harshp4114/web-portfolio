import { useEffect, useState } from "react";
import Flaps from "./Flaps";
import { projects, upstream } from "../data";

const istTime = () =>
  new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" });

const Departures = ({ prCounts }) => {
  const [time, setTime] = useState(istTime);
  useEffect(() => {
    const t = setInterval(() => setTime(istTime()), 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="board" id="departures" aria-labelledby="dep-h">
        <header>
          <h2 id="dep-h">Projects <small lang="hi">परियोजनाएँ</small></h2>
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
                {p.prKey ? `${prCounts[p.prKey]} PRs` : p.status}<span className="toggle" aria-hidden="true"></span>
              </span>
            </summary>
            <div className="detail">
              <p>{p.summary}</p>
              {p.links.length > 0 && (
                <div className="links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                  ))}
                </div>
              )}
            </div>
          </details>
        ))}
      </section>

      <section className="board" aria-labelledby="arr-h">
        <header>
          <h2 id="arr-h">Open source <small lang="hi">ओपन सोर्स</small></h2>
        </header>
        {upstream.map((u) => (
          <div className="row" key={u.repo}>
            <a className="arr" href={u.href} target="_blank" rel="noopener noreferrer">
              <Flaps text={String(prCounts[u.prKey])} className="type" />
              <Flaps text={u.repo} />
              <span className="note">{u.note}</span>
              <span className="status">{prCounts[u.prKey]} merged</span>
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Departures;
