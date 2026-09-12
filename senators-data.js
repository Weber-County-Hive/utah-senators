// Utah Senators — The Weber County Hive
// One object per senator profile. Add a new senator by adding one object here
// and creating the matching case-file HTML page — no index.html editing needed.
//
// status: "current" | "former"  (former = lost re-election, retired, or resigned)
// yearStart / yearEnd: numbers. For a current senator, yearEnd is null.
// If a senator loses re-election or leaves office, set status to "former" and
// yearEnd to the last year they held the seat — they stay listed under that
// year rather than being removed from the roster.

const SENATORS = [
  {
    id: "jerry-stevenson",
    name: "Jerry Stevenson",
    district: "SD-6",
    districtName: "",
    status: "former",
    yearStart: null,
    yearEnd: 2026,
    role: "Outgoing",
    summary: "MIDA Vice Chair who personally sponsored the bill expanding MIDA's own powers — then watched his board use it on Stratos 13 months later. Also a UIPA board member who personally moved a $5M developer loan, twice.",
    tags: ["MIDA", "SB 316", "UIPA", "Executive Appropriations"],
    href: "jerry-stevenson.html"
  },
  {
    id: "kirk-cullimore",
    name: "Kirk Cullimore",
    district: "SD-19",
    districtName: "",
    status: "current",
    yearStart: null,
    yearEnd: null,
    role: "Senate Majority Leader",
    summary: "President of a state-regulated insurance company, disclosed 91 days late. An apparent board seat on the innovation institute he helped create — and helped exempt from public records law. His own campaign has paid one operative nearly $79,000.",
    tags: ["Sentinel Security Life", "Nucleus Institute", "Irish Elk LLC", "Confirmation Committee"],
    href: "kirk-cullimore.html"
  },
  {
    id: "brady-brammer",
    name: "Brady Brammer",
    district: "SD-21",
    districtName: "Highland",
    status: "current",
    yearStart: 2025,
    yearEnd: null,
    role: "",
    summary: "Sponsor or floor sponsor of the 2026 session's core judicial-power stack, including a fully governor-appointed shadow court built as insurance against a losing court ruling. 18 bills graded — the poor ones touch nearly the whole state; the good ones touch a few thousand people at most.",
    tags: ["Judicial Control Stack", "SJR005", "Doers Network", "18 Bills Graded"],
    href: "brady-brammer.html"
  }
];
