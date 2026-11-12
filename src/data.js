import resumeFile from "./assets/resume.pdf";

// Single source for the portfolio's content (mirrors resume.txt).

const gh = (org) => `https://github.com/${org}.png?size=80`;
const cdn = (path) => `https://res.cloudinary.com/dlh2n274r/image/upload/${path}`;

export const projects = [
  {
    name: "Partner Portal",
    type: "Work",
    status: "Private",
    statusTone: "accent",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "Frappe", "ERPNext", "JWT"],
    summary:
      "Suppliers had no single place to watch product sales, inventory health, purchasing and reports across the retail network. I built a secure supplier portal with interactive analytics dashboards, passwordless sign-in, inventory alerts, CSV/Excel exports, scheduled email reports, and supplier-scoped data access with rate limiting and API security.",
    links: [],
  },
  {
    name: "SymptoCure",
    type: "Side",
    status: "Live",
    stack: ["React.js", "Node.js", "FastAPI", "MongoDB", "scikit-learn", "Socket.IO", "JWT", "Tailwind CSS"],
    summary:
      "Early diagnosis and quick access to a doctor are hard for common symptoms. SymptoCure predicts likely diseases with a machine-learning model and connects patients to doctors for real-time consultations.",
    links: [
      { label: "Live demo", href: "https://symptocure.netlify.app/" },
      { label: "Source", href: "https://github.com/harshp4114/SymptoCure" },
    ],
  },
  {
    name: "RuralFin",
    type: "Hack",
    status: "Top 75",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS"],
    summary:
      "Rural and low-income communities are shut out of digital finance. RuralFin is a hybrid cash-digital wallet with agent-assisted services and budgeting features. Top 75 finalist, Odoo x Charusat Hackathon 2025.",
    links: [
      { label: "Live demo", href: "https://ruralfin.netlify.app/" },
      { label: "Source", href: "https://github.com/Jhil20/Exception-RuralFin" },
    ],
  },
  {
    name: "Bank Integration",
    type: "Work",
    prKey: "bank", // status shows the live merged-PR count
    stack: ["Python", "JavaScript", "Frappe", "ERPNext", "Selenium"],
    summary:
      "HDFC portal changes broke the ERPNext online payment automation at Resilient Tech. I rebuilt the workflow and added bulk payments, IMPS/RTGS configuration and automated receipt management.",
    links: [
      { label: "#18", href: "https://github.com/resilient-tech/bank_integration/pull/18" },
      { label: "#25", href: "https://github.com/resilient-tech/bank_integration/pull/25" },
      { label: "#26", href: "https://github.com/resilient-tech/bank_integration/pull/26" },
      { label: "#27", href: "https://github.com/resilient-tech/bank_integration/pull/27" },
      { label: "#32", href: "https://github.com/resilient-tech/bank_integration/pull/32" },
      { label: "#34", href: "https://github.com/resilient-tech/bank_integration/pull/34" },
      { label: "Repository", href: "https://github.com/resilient-tech/bank_integration" },
    ],
  },
];

export const upstream = [
  {
    prKey: "frappe",
    repo: "frappe/frappe",
    note: "Feature development, bug fixes and refactors",
    href: "https://github.com/frappe/frappe/pulls?q=is%3Apr+state%3Amerged+involves%3Aharshp4114",
  },
  {
    prKey: "erpnext",
    repo: "frappe/erpnext",
    note: "Bug fixes and refactors",
    href: "https://github.com/frappe/erpnext/pulls?q=is%3Apr+state%3Amerged+involves%3Aharshp4114",
  },
];

// logo is optional; items without one render as text-only chips.
export const skills = [
  {
    group: "Languages",
    items: [
      { name: "Python", logo: gh("python"), href: "https://www.python.org/" },
      { name: "JavaScript", logo: cdn("v1731314703/javascript_v4un50.png"), href: "https://developer.mozilla.org/docs/Web/JavaScript" },
      { name: "TypeScript", logo: cdn("ts.svg_vhgtld.png"), href: "https://www.typescriptlang.org/" },
      { name: "C++", logo: cdn("v1731314701/cplus_lmbbng.jpg"), href: "https://isocpp.org/" },
      { name: "C#", logo: cdn("v1731314701/csharp_dimf3c.png"), href: "https://learn.microsoft.com/dotnet/csharp/" },
      { name: "Java", logo: cdn("v1731314702/java_hlapyw.png"), href: "https://www.java.com/" },
      { name: "SQL" },
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      { name: "React.js", logo: cdn("v1731314705/react_mb8iax.jpg"), href: "https://react.dev/" },
      { name: "Next.js", logo: gh("nextjs"), href: "https://nextjs.org/" },
      { name: "Express.js", logo: gh("expressjs"), href: "https://expressjs.com/" },
      { name: "Node.js", logo: cdn("v1731314705/node_fcsgpx.png"), href: "https://nodejs.org/" },
      { name: "Tailwind CSS", logo: gh("tailwindlabs"), href: "https://tailwindcss.com/" },
      { name: "JWT", logo: cdn("jwt_unuukg.svg"), href: "https://jwt.io/" },
      { name: "Socket.IO", logo: gh("socketio"), href: "https://socket.io/" },
      { name: "ASP.NET MVC", logo: gh("aspnet"), href: "https://dotnet.microsoft.com/apps/aspnet/mvc" },
      { name: "FastAPI", logo: gh("fastapi"), href: "https://fastapi.tiangolo.com/" },
      { name: "Frappe Framework", logo: gh("frappe"), href: "https://frappe.io/framework" },
      { name: "ERPNext", logo: gh("erpnext"), href: "https://erpnext.com/" },
    ],
  },
  {
    group: "Databases & Tools",
    items: [
      { name: "MongoDB", logo: cdn("v1731314703/mongo_eprkhy.jpg"), href: "https://www.mongodb.com/" },
      { name: "MySQL", logo: cdn("v1731314704/mysql_gbdnjn.png"), href: "https://www.mysql.com/" },
      { name: "Entity Framework", logo: gh("dotnet"), href: "https://learn.microsoft.com/ef/" },
      { name: "Git", logo: gh("git"), href: "https://git-scm.com/" },
      { name: "GitHub", logo: gh("github"), href: "https://github.com/" },
      { name: "Postman", logo: cdn("v1731314705/postman_z0okjm.png"), href: "https://www.postman.com/" },
    ],
  },
  {
    group: "Core CS",
    items: [
      { name: "Data Structures & Algorithms" },
      { name: "DBMS" },
      { name: "OOP" },
      { name: "Computer Networks" },
      { name: "Auth & Security" },
    ],
  },
];

export const contacts = [
  { label: "GitHub", href: "https://github.com/harshp4114" },
  { label: "Resume", href: resumeFile, download: "HarshKPatadia_resume.pdf" },
  { label: "Email", href: "mailto:harshpatadia4114@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-patadia-a677a4289/" },
  { label: "LeetCode", href: "https://leetcode.com/u/harsh4114/" },
];
