import Flaps from "./Flaps";
import { skills } from "../data";

const Tech = ({ name, logo }) => (
  <>
    {logo && <img className="logo" src={logo} alt="" loading="lazy" />}
    <Flaps text={name} />
  </>
);

const TechStack = () => (
  <section className="board" id="stack" aria-labelledby="stack-h">
    <header>
      <h2 id="stack-h">Tech stack <small lang="hi">तकनीकी कौशल</small></h2>
    </header>
    {skills.map((g) => (
      <div className="skill-row" key={g.group}>
        <h3>{g.group}</h3>
        <ul className="techs">
          {g.items.map((s) => (
            <li key={s.name}>
              {s.href ? (
                <a className="tech" href={s.href} target="_blank" rel="noopener noreferrer"><Tech {...s} /></a>
              ) : (
                <span className="tech"><Tech {...s} /></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default TechStack;
