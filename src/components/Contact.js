import { contacts } from "../data";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const Contact = () => (
  <>
    <section className="enquiry" id="enquiry" aria-labelledby="enq-h">
      <div>
        <h2 id="enq-h">Enquiry</h2>
        <p>B.Tech Computer Engineering, Dharmsinh Desai University (2022–2026). Building on Frappe and ERPNext at Resilient Tech.</p>
      </div>
      <div className="counter">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.download ? { download: c.download } : c.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {c.label} <Arrow />
          </a>
        ))}
      </div>
    </section>
    <footer className="foot">Harsh Patadia · Vadodara, Gujarat</footer>
  </>
);

export default Contact;
