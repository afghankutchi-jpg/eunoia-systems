export const company = {
  name: "Eunoia Systems",
  mark: "Eunoia",
  tagline: "Supporting Healthcare  ·  Strengthening Revenue",
  phone: "+1 (512) 709-9079",
  phoneHref: "tel:+15127099079",
  email: "info@eunoiasystems.com",
  address: "5900 Balcones Drive",
  city: "Austin, Texas 78731",
  hours: "Inquiry desk, business days, Central Time",
};

export type Service = {
  slug: string;
  name: string;
  title: string;
  eyebrow: string;
  summary: string;
  lede: string;
  paragraphs: string[];
  capabilities: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  standards: string[];
  record: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "front-office",
    name: "Front office",
    title: "Front office management",
    eyebrow: "Patient access",
    summary: "Scheduling, eligibility, authorization, and the first financial conversation — handled so the visit starts clean.",
    lede: "Most denials are born before a clinician opens the chart. Front office work is revenue work: the right patient, the right coverage, the right authorization, and a balance the patient already understands.",
    paragraphs: [
      "Eunoia Systems organizes the front of the practice so collections and the schedule move together. Appointments are created, confirmed, and protected. Demographics are verified instead of copied forward. Coverage is checked before the visit, not after a denial.",
      "The team handles the administrative conversation patients actually have — reminders, referrals, questions, and payments — while clinicians stay with care. The process is written down, measured, and adjusted to the way each office already runs.",
      "A front desk fails in small, repeating ways: an eligibility response left in a portal, an authorization that was ‘pending’ for nine days, a referral that never left the fax machine, a copay waived because nobody knew the deductible had reset. Each of those is a claim that will be born already wounded. The engagement treats them as a queue with an owner, not as interruptions between patients.",
      "Work is done in the practice’s own scheduler and practice-management system. Patients still call the number on the door. What changes is that the answer, the verification, and the financial conversation follow a standard the office can inspect. When a payer or a plan rule changes, the checklist changes with it, and the desk is told before the next Monday rush.",
    ],
    capabilities: [
      { title: "Scheduling and confirmation", body: "Books are built with intention. Reminders and confirmation calls reduce no-shows without turning the desk into a call center." },
      { title: "Eligibility and authorization", body: "Coverage is verified and pre-authorizations are obtained before the encounter, which is the cheapest place to prevent a denial." },
      { title: "Referral management", body: "Specialist appointments are arranged and notes move with the patient, instead of sitting in a fax queue." },
      { title: "Inbound and outbound calls", body: "Patients reach a person who can route, explain, or resolve. Calls are not a leftover task at the end of clinic." },
      { title: "Point-of-service payments", body: "Estimates and balances are collected the way the practice directs — clearly, and at the moment the patient is present." },
      { title: "Questions and feedback", body: "Patient questions are answered and patterns are reported back, so the same confusion does not repeat next month." },
    ],
    steps: [
      { title: "Map the desk", body: "We learn how the schedule, the phones, and the eligibility checks actually work today — including the workarounds." },
      { title: "Write the standard", body: "Each visit type gets a checklist: what must be true before the patient is roomed." },
      { title: "Run it daily", body: "Scheduling, verification, and authorization are worked as a queue, not as heroics between patients." },
      { title: "Report the leaks", body: "No-shows, auth misses, and eligibility failures are counted so the desk can see what changed." },
    ],
    standards: [
      "Eligibility checked before the visit, not after the denial",
      "Authorizations tracked to a status, not a memory",
      "Demographics updated at every encounter",
      "Patient estimates explained in plain language",
    ],
    record: [
      "A visit-type checklist: what must be true before the patient is roomed",
      "A daily eligibility and authorization queue with a status on every open item",
      "Confirmation and no-show counts, so the schedule is managed instead of mourned",
      "A script for copays, deductibles, and prior balances the desk can say without improvising",
      "A monthly note on the questions patients keep asking, sent back to the practice",
    ],
    related: ["medical-billing", "patient-financials", "denial-management"],
  },
  {
    slug: "medical-billing",
    name: "Medical billing",
    title: "Medical billing",
    eyebrow: "Claim to cash",
    summary: "Charge entry, coding review, submission, posting, and statements — run as one continuous billing operation.",
    lede: "Billing is not a batch job at the end of the week. It is the path from a documented encounter to a posted payment. Eunoia Systems runs that path with specialty-aware billers, a written follow-up cadence, and reports a practice can actually read.",
    paragraphs: [
      "Documentation is read before codes are chosen. Charges are entered against the encounter, scrubbed, and submitted inside filing limits. Payments are posted and reconciled so the ledger matches what the payer and the patient actually did.",
      "The operating standard published with this work is a 98% first-pass acceptance rate, aging held under 90 days, and a billing cycle that does not depend on one person remembering the worklist. Reports are built for the practice, not pulled from a generic template and emailed unread.",
      "The path is concrete. A note is read. A charge is compared with that note. The claim is scrubbed for the errors that actually bounce this specialty — missing referring provider, a diagnosis that does not support the procedure, a modifier, a unit, an authorization number that was never attached. What fails the scrub is corrected before it spends a week in a payer’s reject file.",
      "After the claim leaves, it is not ‘submitted’ and forgotten. Accepted, rejected, and pended files are worked on a clock. Payments are posted to the line, not as a lump that hides an underpayment. Contractual adjustments are separated from patient responsibility, and from write-offs that nobody decided. If a balance remains, it has one of three next homes: an appeal, a statement, or an explicit close.",
    ],
    capabilities: [
      { title: "Charge integrity", body: "Demographics, charges, and documentation are checked before a claim leaves. Rework is more expensive than a careful first pass." },
      { title: "Specialty coding support", body: "Billers work inside the specialty. Notes are reviewed against the codes, and code-set changes are tracked as they land." },
      { title: "Submission and status", body: "Claims go out clean. Accepted, rejected, and pending files are worked on a schedule, not when someone has a spare hour." },
      { title: "Payment posting", body: "Insurance and patient payments are posted and reconciled so underpayments are visible, not absorbed." },
      { title: "Patient statements", body: "Statements go out on time, in language a person can settle, with the payment options the practice allows." },
      { title: "Custom reporting", body: "Charges, receipts, denials, and aging are reported the way the administrator asks to see them." },
    ],
    steps: [
      { title: "Intake the encounter", body: "Charges, notes, and demographics arrive in one queue tied to the practice’s own software." },
      { title: "Review and code", body: "A biller reads the note, confirms the codes, and fixes what would bounce before submission." },
      { title: "Submit and watch", body: "Clean claims go out. Rejections are corrected inside the window, not discovered at month-end." },
      { title: "Post and explain", body: "Payments land on the account. What remains is either an appeal, a patient balance, or a write-off with a reason." },
    ],
    standards: [
      "98% first-pass claim acceptance as the operating standard",
      "Aging inventory kept under 90 days",
      "Every underpayment has an owner",
      "Statements a patient can understand without calling",
    ],
    record: [
      "Charge, submission, and rejection logs tied to the encounter, not to a week-ending batch",
      "A first-pass acceptance figure, read beside denial rate and aging — never alone",
      "Underpayment exceptions with the contract amount, the paid amount, and the next action",
      "Patient statements on the practice’s cadence, in an order a person can follow",
      "A monthly report shaped to the administrator who actually reads it",
    ],
    related: ["denial-management", "ar-recovery", "coding-integrity"],
  },
  {
    slug: "ar-recovery",
    name: "A/R recovery",
    title: "Accounts receivable recovery",
    eyebrow: "Aging inventory",
    summary: "Old, denied, and low-dollar claims worked in order — before filing limits quietly erase them.",
    lede: "Aging accounts receivable is not a report. It is cash sitting in other people’s queues. Eunoia Systems works unresolved claims systematically, including the small balances that are easy to ignore and expensive in aggregate.",
    paragraphs: [
      "Practices come to this work with a backlog, A/R days above their own benchmark, too few people to follow up, and write-offs that were never really decided. The recovery is paced: older claims first, because they expire, then the pattern of denials that created them.",
      "Follow-up is polite and persistent with payers. Patient balances are explained in writing a person can act on. If the practice wants the team to speak with patients directly, that is scoped. If not, the statements and the worklist still move.",
      "The first pass through an aging book is an inventory, not a collection call. Every open claim is sorted by whether it can still be paid: inside a filing limit, inside an appeal window, missing a document the practice still has, or finished. Only the last group is a write-off conversation. The others get a next action and a date.",
      "Low-dollar claims are worked as a class. They are too small to escalate one by one and too numerous to skip. A recovery that reports only the large wins flatters the average and leaves the volume that filled the bucket. As claims close, the reason they aged — late charges, a missing authorization, a payer that never received the corrected claim — is written down and handed back to billing.",
    ],
    capabilities: [
      { title: "Inventory, not a sample", body: "Unresolved claims are reviewed as a population, including low-dollar items that still belong to the practice." },
      { title: "Age-first priority", body: "Claims closest to a filing or appeal limit are worked before fresher, easier ones." },
      { title: "Correct and resubmit", body: "Rejected, denied, and underpaid claims are fixed and sent back with the documentation the payer asked for." },
      { title: "Cause removal", body: "Repeat denial reasons are traced to the front of the cycle so the same A/R is not rebuilt next quarter." },
      { title: "Patient balances", body: "Remaining balances are stated clearly. Questions get an answer. Payment options follow the practice’s policy." },
      { title: "A visible worklist", body: "Every open claim has an age, a payer, a next action, and a person. Nothing lives in a spreadsheet nickname." },
    ],
    steps: [
      { title: "Evaluate", body: "The open inventory is sorted by age, dollars, payer, and whether it can still be collected." },
      { title: "Prioritize", body: "Expiring and high-friction claims move to the top. Fresh clean claims are not allowed to crowd them out." },
      { title: "Recover", body: "Corrections, appeals, and payer follow-up run on a cadence inside the limit." },
      { title: "Stop the leak", body: "The reasons that filled the aging bucket are handed back to billing, coding, and the front office." },
    ],
    standards: [
      "Filing limits treated as hard dates",
      "Low-dollar claims included, not discarded by habit",
      "Underpayments appealed with a reason code",
      "Recovered cash distinguished from timing shifts",
    ],
    record: [
      "An opening inventory: age, payer, dollars, and whether the claim can still be collected",
      "A worklist ordered by filing and appeal dates, not by which claim looks easy",
      "Corrected claims and appeals with the document the payer asked for attached",
      "A separation of recovered cash from payments that were only slow",
      "A short list of the upstream causes that built the backlog, given to billing and the front office",
    ],
    related: ["denial-management", "medical-billing", "patient-financials"],
  },
  {
    slug: "credentialing",
    name: "Credentialing",
    title: "Credentialing and enrollment",
    eyebrow: "Payer enrollment",
    summary: "Applications, CAQH, re-credentialing, EDI, and contract follow-up so claims are payable on day one.",
    lede: "A credentialing file is a revenue file. If a clinician is not enrolled, or a re-credentialing date is missed, otherwise perfect claims do not pay. Eunoia Systems runs enrollment as a tracked project, from the document set through payer approval.",
    paragraphs: [
      "The work starts by gathering what payers actually ask for, then submitting and watching it. Medicare, Medicaid, and commercial panels are handled as separate clocks. Re-credentialing is calendared early enough that a lapse does not become a denial trend.",
      "Where a panel is closed, IPA routes are used when they are real. EDI, ERA, and EFT are enrolled so payments do not arrive as paper. Contract terms are read. When the practice wants a renegotiation, the file is prepared with volumes and current allowables — not a hopeful phone call.",
      "Enrollment is a project with dates. Licenses, malpractice, DEA, board status, W-9, and the practice details payers actually compare are gathered once and kept current. Each plan receives the packet it requires. Status is chased until the result is written: approved, returned, or declined. A verbal ‘you should be fine’ is not an effective date, and billing is not told to submit into that fog.",
      "Re-credentialing is opened months before the lapse, on a calendar the practice can see. CAQH attestations sit on the same calendar. A beautiful application attached to a stale profile still waits. After approval, EDI, ERA, and EFT are confirmed against a live remit. The first claims after a new enrollment are watched, because that is when a silent setup error introduces itself as a denial trend.",
    ],
    capabilities: [
      { title: "Initial enrollment", body: "Applications are assembled, submitted, and statused until the effective date is in writing." },
      { title: "Re-credentialing", body: "Expirations are tracked so a payer does not quietly close a clinician." },
      { title: "CAQH and profiles", body: "Attestations and documents stay current. A stale profile is a delayed start." },
      { title: "EDI, ERA, and EFT", body: "Electronic transactions are enrolled so remits and deposits match the claims that created them." },
      { title: "Closed panels and IPAs", body: "When a direct panel is shut, legitimate association routes are pursued instead of waiting." },
      { title: "Contracts", body: "Allowables are compared with the work the practice actually performs. Renegotiation is prepared, not improvised." },
    ],
    steps: [
      { title: "Collect the file", body: "Licenses, malpractice, DEA, board status, and practice details are gathered once and kept complete." },
      { title: "Submit by payer", body: "Each plan gets the packet it requires, not a generic upload." },
      { title: "Chase the status", body: "Applications are followed until approved, returned, or declined — with a date, not a feeling." },
      { title: "Turn on payments", body: "EDI and EFT are confirmed, then the first claims are watched to prove the enrollment is real." },
    ],
    standards: [
      "No claim dependency on an unconfirmed effective date",
      "Re-credentialing opened before the lapse window",
      "EFT confirmed against a live remit",
      "Application status reported without the practice having to ask",
    ],
    record: [
      "A complete provider file: licenses, malpractice, DEA, board status, and practice identifiers",
      "A payer-by-payer status with the last action and the next date, not a feeling",
      "Written effective dates before claims are released for that clinician",
      "Re-credentialing opened before the lapse window, with CAQH on the same calendar",
      "EDI, ERA, and EFT confirmed when a remit matches a deposit",
    ],
    related: ["medical-billing", "front-office", "value-based-care"],
  },
  {
    slug: "denial-management",
    name: "Denial management",
    title: "Denial management",
    eyebrow: "Prevent and recover",
    summary: "Denials sorted by cause, appealed on time, and stopped at the step that created them.",
    lede: "A denial is a message. Eunoia Systems reads it, groups it, appeals what should be paid, and changes the upstream step that keeps producing it. The point is not a heroic appeal queue. The point is a shorter queue next month.",
    paragraphs: [
      "Denied and unpaid claims are categorized by reason, payer, provider, and origin — registration, authorization, coding, timely filing, medical necessity, or a contract issue. Each category has a different fix. Treating them as one pile wastes the filing window.",
      "Appeals go out with the record the payer asked for. Recurring causes are taken back to scheduling, eligibility, or coding. The practice sees the rate, the dollars, and the two or three reasons that explain most of the loss.",
      "Denials are not one pile. A missing authorization, a diagnosis that does not support the procedure, a timely-filing miss, a medical-necessity review, and a contract underpayment have different clocks and different owners. Working them as a single appeal queue burns the window on items that cannot be paid and neglects the ones that can.",
      "Each month the practice gets the denial rate, the dollars still open, the overturn rate, and the causes ranked. Preventable registration and authorization denials are shown apart from clinical disputes. Write-offs are named. An appeal is not closed because the list felt long. It is closed because it was paid, upheld, or explicitly abandoned with a reason.",
    ],
    capabilities: [
      { title: "Identify", body: "The reason code is translated into a cause a manager can act on, not left as payer jargon." },
      { title: "Sort", body: "Denials are grouped by source so a registration problem is not worked like a coding problem." },
      { title: "Appeal", body: "Recoverable denials are appealed inside the limit, with the note, the auth, or the corrected claim attached." },
      { title: "Prevent", body: "The top causes are pushed upstream. A denial that can be stopped at eligibility is not allowed to become a hobby." },
      { title: "Watch the rate", body: "Denial rate, overturn rate, and dollars still open are reported together. One number without the others misleads." },
      { title: "Leave a record", body: "Every appeal has an outcome. Write-offs are explicit. Nothing is closed because the worklist felt long." },
    ],
    steps: [
      { title: "Catch", body: "Denials and rejections are taken from the remit the day they post, not at the monthly meeting." },
      { title: "Classify", body: "Each item is tagged by cause and by whether it can still be paid." },
      { title: "Fight or fix", body: "Recoverable items are appealed. Unrecoverable items are corrected in the workflow that made them." },
      { title: "Retire the cause", body: "When a reason repeats, the checklist at the front of the cycle changes." },
    ],
    standards: [
      "Appeals filed inside the payer limit",
      "Top three causes named every month",
      "Preventable denials separated from clinical ones",
      "Overturns posted, not just celebrated",
    ],
    record: [
      "A denial log tagged by reason, payer, clinician, and whether it can still be paid",
      "Appeals filed inside the limit, with the note, auth, or corrected claim attached",
      "The top causes named every month, in language a manager can act on",
      "Preventable denials separated from clinical disputes",
      "A changed checklist at the front of the cycle when a reason keeps repeating",
    ],
    related: ["ar-recovery", "medical-billing", "front-office"],
  },
  {
    slug: "patient-financials",
    name: "Patient financials",
    title: "Patient financials",
    eyebrow: "The balance people pay",
    summary: "Estimates, statements, and payment options designed so patients understand what they owe and settle it.",
    lede: "Patients pay a dinner bill faster than a medical one when the dinner bill is the only document that makes sense. Eunoia Systems treats patient responsibility as its own revenue stream: estimated early, explained plainly, and collected without turning the front desk into a collections agency.",
    paragraphs: [
      "Coverage is translated into an estimate before or at the visit, using the practice’s fee schedule and what the plan has already said. After adjudication, the statement shows what insurance paid, what was adjusted, and what remains — in that order.",
      "Payment options follow the physician’s direction. The tone stays direct and respectful. The goal is a settled balance and a patient who will come back, not a surprise invoice three months later.",
      "The statement is a letter, not a remittance advice. The useful order is human: what was done, what insurance paid, what was adjusted, what remains, how to pay, and who to ask. A ledger that opens with a contractual-adjustment code is accurate and unpaid. When an estimate was wrong, the statement says so. A short explanation outperforms a corrected total with no story.",
      "Patient accounts receivable and insurance accounts receivable are reported apart. A family is not a slow commercial payer, and a pended claim is not a collections problem. Staff stop making the wrong phone call. Balances end in a state: paid, on a plan the practice approved, disputed, or written off. Silence is not one of the states.",
    ],
    capabilities: [
      { title: "Estimates", body: "Expected patient responsibility is calculated before the balance becomes a grievance." },
      { title: "Statements", body: "Each statement tells a short story: billed, allowed, paid, adjusted, due." },
      { title: "Cadence", body: "Statements and reminders go on a calendar. Silence is not a strategy." },
      { title: "Options", body: "Card, plan, and other methods the practice approves are offered consistently." },
      { title: "Questions", body: "Patients who call get the same explanation the statement already attempted." },
      { title: "Reporting", body: "Patient A/R is split from insurance A/R so a slow payer is not blamed on families." },
    ],
    steps: [
      { title: "Estimate", body: "Benefits and the scheduled service produce a number the desk can say out loud." },
      { title: "Collect what is known", body: "Copays, deductibles already met or not, and prior balances are handled at the visit when policy allows." },
      { title: "Statement the rest", body: "After the remit, the remaining balance is sent in plain language." },
      { title: "Resolve", body: "Paid, plan, dispute, or write-off. Every balance ends in one of those states." },
    ],
    standards: [
      "Insurance A/R and patient A/R reported apart",
      "Statements issued on a set cadence",
      "No balance sent that staff cannot explain",
      "Collection tone set by the practice, then kept",
    ],
    record: [
      "Estimates the desk can say before or at the visit, from the fee schedule and the benefit",
      "Statements in a fixed order: service, paid, adjusted, due, how to pay, who to ask",
      "A cadence for reminders, so a balance is not discovered at month four",
      "Patient A/R reported separately from insurance A/R",
      "Every open balance closed to paid, plan, dispute, or write-off",
    ],
    related: ["front-office", "medical-billing", "ar-recovery"],
  },
  {
    slug: "value-based-care",
    name: "Value-based care",
    title: "Value-based care transition",
    eyebrow: "Beyond fee-for-service",
    summary: "The operational bridge from volume billing to contracts that pay for outcomes, quality, and attributed patients.",
    lede: "Moving toward value-based reimbursement does not require gambling the fee-for-service cash that keeps the lights on. Eunoia Systems separates the two books: claims that must still be paid cleanly, and the quality, attribution, and contract work a value arrangement actually measures.",
    paragraphs: [
      "The transition fails when a practice changes its clinical model and forgets that payers still adjudicate claims, still deny for authorization, and still expect a credentialed clinician. Revenue cycle discipline is the floor. Quality reporting and contract terms sit on top of it.",
      "Engagements start by naming which contracts are fee-for-service, which are pay-for-performance, and which put a panel of patients on the practice. Each one has different data, different deadlines, and a different definition of a good month.",
      "The operational work is unglamorous and specific. Attribution rosters are compared with the patients the practice actually sees. Quality measures are captured where the encounter happens, not reconstructed from memory at audit time. Leakage — patients attributed here and cared for elsewhere — is visible. Fee-for-service yield is kept on its own page so a value contract cannot hide a claims problem, and a claims problem cannot be mistaken for a failed contract.",
      "The shift is paced. One arrangement is learned while the old book is still collected. Deadlines, quality gates, and who owns the data are written down before a workflow changes. A blended dashboard that produces a single encouraging number is refused.",
    ],
    capabilities: [
      { title: "Contract reading", body: "Payment terms, quality gates, and attribution rules are written in operational language." },
      { title: "Two-book reporting", body: "Fee-for-service yield and value-contract performance are not mashed into one vanity number." },
      { title: "Measure capture", body: "The quality data a contract pays on is tied to the encounter, not reconstructed at audit time." },
      { title: "Panel hygiene", body: "Attributed patients, eligibility, and leakage are reviewed so the roster matches reality." },
      { title: "Denial discipline", body: "Value contracts do not excuse sloppy claims. Preventable denials still take cash out of both models." },
      { title: "A paced shift", body: "The practice moves one contract at a time, with the old book still collected while the new one is learned." },
    ],
    steps: [
      { title: "Name the contracts", body: "Every payer arrangement is classified before anyone changes a workflow." },
      { title: "Protect current cash", body: "Billing, A/R, and denials keep their cadence so the transition is not funded by accident." },
      { title: "Instrument the measures", body: "What the contract scores is captured where the care happens." },
      { title: "Review quarterly", body: "Attribution, quality, and cash are looked at together and the workflow is adjusted." },
    ],
    standards: [
      "Fee-for-service cash protected during the shift",
      "Quality measures captured at the encounter",
      "Attribution reviewed, not assumed",
      "No blended report that hides a failing contract",
    ],
    record: [
      "A map of every arrangement: fee-for-service, pay-for-performance, or attributed panel",
      "Two books of reporting, so current cash and contract performance are not blended",
      "Quality measures tied to the encounter that created them",
      "An attribution review: who is on the roster, who was seen, who leaked",
      "A quarterly read of cash, quality, and the workflow change that follows",
    ],
    related: ["medical-billing", "compliance-program", "coding-integrity"],
  },
  {
    slug: "coding-integrity",
    name: "Coding integrity",
    title: "Coding integrity and audit",
    eyebrow: "Documentation to code",
    summary: "Notes, codes, and charge capture reviewed so the claim matches the care — and survives a payer’s second look.",
    lede: "Under-coding leaves money on the table. Over-coding borrows it from the future. Eunoia Systems reviews documentation and codes together, specialty by specialty, so what was done is what is billed and what is billed can be defended.",
    paragraphs: [
      "Audits are samples with a purpose: a new clinician, a new payer rule, a denial reason that keeps returning, or a service line whose yield dropped without a volume drop. Findings are specific — a missing element in the note, a modifier, a unit, a diagnosis that does not support the procedure.",
      "Education goes back to the people who write the notes and the people who enter the charges. A report that never changes the next week’s claims was only a document.",
      "An audit here is a sample with a reason: a new clinician, a new payer rule, a denial that keeps returning, or a service line whose yield fell without a drop in volume. Encounters are read beside the codes and the charges. Findings name the missing element — a history, a modifier, a unit, a diagnosis that does not support the procedure — and they name the dollars left behind by under-coding with the same seriousness as the risk in over-coding.",
      "The result is not a binder. Patterns are separated from one-off typos. Education is given to coding, to billing, and to the people who write the notes, in the language each of them uses. The same slice is sampled again after the change. Improvement is observed, or the workflow is changed again. A single snapshot is not an audit.",
    ],
    capabilities: [
      { title: "Focused audits", body: "Samples are chosen around risk: new services, outlier clinicians, and denial-prone codes." },
      { title: "Note-to-code review", body: "The record is read before the claim is defended. Codes without a story are not polished; they are fixed." },
      { title: "Modifier and unit checks", body: "The small characters that change payment are reviewed on purpose." },
      { title: "Charge capture gaps", body: "Services performed and never charged are listed beside services charged and poorly supported." },
      { title: "Education", body: "Findings are taught to coding, billing, and the clinical team in language each of them uses." },
      { title: "Re-measure", body: "The same slice is looked at again after the fix, so improvement is observed rather than hoped." },
    ],
    steps: [
      { title: "Pick the risk", body: "The audit starts where money or compliance is already moving the wrong way." },
      { title: "Read the notes", body: "A sample of encounters is compared with the codes and the charges." },
      { title: "Name the pattern", body: "Findings are grouped. One-off typos are not treated like a system." },
      { title: "Close the loop", body: "Workflow, education, and a second sample confirm the pattern moved." },
    ],
    standards: [
      "Findings tied to encounters, not slogans",
      "Under-coding reported with the same seriousness as risk",
      "Education delivered to the people who can change next week",
      "A follow-up sample, not a single snapshot",
    ],
    record: [
      "A sample chosen around risk, with the encounters named",
      "Note-to-code findings: what is unsupported, what was missed, and what it is worth",
      "Under-coding listed beside compliance risk, not treated as a compliment",
      "Education for the clinician, the coder, and the biller — separately, because they fix different things",
      "A second sample after the change, so the pattern is confirmed or the work continues",
    ],
    related: ["medical-billing", "denial-management", "compliance-program"],
  },
  {
    slug: "prior-authorization",
    name: "Prior authorization",
    title: "Prior authorization",
    eyebrow: "Before the encounter",
    summary: "Auths requested, tracked, and attached to the claim — so a covered service is not performed on a verbal yes.",
    lede: "An authorization that lives in someone’s memory is not an authorization. Eunoia Systems runs prior auth as its own queue: the requirement is known before the patient is booked, the request goes out with the record the plan asks for, and the decision is written down before the claim exists.",
    paragraphs: [
      "Plans change what they require without announcing it to the front desk. A procedure that was fine last quarter now needs a peer review. A drug, a scan, a therapy visit, a surgery date — each has a different form, a different clinical attachment, and a different clock. Treating them as a favor the nurse does between patients is how a clean claim becomes a denial the practice cannot appeal.",
      "The work starts from the schedule, not from the denial. Upcoming encounters are checked against the plan’s current rule. If an auth is required, the packet is built from the note, the order, and the history the payer listed. Status is chased until it is approved, denied, or pended with a missing item. A reference number is stored where billing will actually find it.",
      "When a plan says no, the practice hears it before the patient is on the table, not after the remit. The options are concrete: more documentation, a peer-to-peer, a different site of service, or a conversation with the patient about responsibility. A denied auth that is discovered at posting is already late.",
      "Retro-authorizations are the exception, not the method. They are attempted when the clinical situation truly could not wait, and they are labeled as such. The monthly report shows what was requested, what was approved, what expired unused, and which services keep arriving without a number.",
    ],
    capabilities: [
      { title: "Rule check", body: "The schedule is compared with what that plan requires this month, not with what the office remembers from last year." },
      { title: "Packet", body: "Orders, notes, and the clinical facts the form asks for are attached the first time." },
      { title: "Status", body: "Every request has a state: not started, submitted, pended, approved, denied, expired." },
      { title: "The number on the claim", body: "Approved reference numbers are placed where charge entry will see them." },
      { title: "Peer review", body: "When a plan wants a clinician, the request is scheduled with the record already assembled." },
      { title: "Expiry", body: "Approvals that lapse before the date of service are renewed before they become a denial." },
    ],
    steps: [
      { title: "Read the book", body: "Upcoming visits and procedures are listed with the plan and the service." },
      { title: "Decide if a rule applies", body: "Required, not required, or unknown — unknown is worked, not skipped." },
      { title: "Submit and chase", body: "The packet goes out and is followed until a written decision exists." },
      { title: "Hand it to billing", body: "The number, the dates it covers, and the units approved move with the encounter." },
    ],
    standards: [
      "No ‘verbal approval’ treated as a reference number",
      "Auth status visible before the date of service",
      "Expired approvals renewed or the visit rescheduled",
      "Denied auths reported before the service, not after the remit",
    ],
    record: [
      "A queue of upcoming services that require authorization, with the plan’s rule cited",
      "Submission dates, pend items, and written decisions",
      "Reference numbers and the dates and units they cover, attached to the encounter",
      "A list of denials received in time to change the plan of care or the patient’s expectation",
      "A monthly count of services performed without an auth, and why",
    ],
    related: ["front-office", "denial-management", "medical-billing"],
  },
  {
    slug: "charge-capture",
    name: "Charge capture",
    title: "Charge capture",
    eyebrow: "What was done, billed",
    summary: "Encounters reconciled to charges so performed work is not left in the room and unbilled work is not invented.",
    lede: "Revenue leaks in the gap between the visit and the charge. Eunoia Systems closes that gap: every closed encounter is accounted for, missing charges are listed while the note is still fresh, and charges that have no encounter are not allowed to become claims.",
    paragraphs: [
      "A busy clinic loses money in ordinary ways. A procedure done in the room never makes the superbill. An injection is documented and not charged. A hospital consult is signed three days later and misses the batch. A cancelled visit is charged anyway because the schedule still showed it. None of these look like a denial. They look like a normal month, slightly smaller than it should be.",
      "Capture is a reconciliation, not a hope that the clinician remembered the card. Closed encounters in the system of record are compared with charges entered. What is missing is sent back while the chart is still open. What is charged without a matching encounter is held. Late charges are dated so they do not quietly become timely-filing losses.",
      "The specialty matters. An orthopedic day and a therapy day do not leak in the same place. Implants, timed codes, infusions, facility versus professional components, and supplies are checked against the way that practice actually works. A generic ‘missing charge’ report that nobody opens is not the deliverable.",
      "The point is a same-week lag, not a heroic end-of-month sweep. When capture slips, the reason is named: a template, a clinician, a location, a lag in signing. Billing cannot code what was never sent, and coding integrity cannot defend a service that was never recorded.",
    ],
    capabilities: [
      { title: "Encounter reconciliation", body: "Closed visits are matched to charges. Unmatched items are a worklist, not a surprise." },
      { title: "Same-week lag", body: "Missing charges are raised while the note can still be completed." },
      { title: "Held charges", body: "A charge without an encounter, a signature, or a location does not proceed to a claim." },
      { title: "Specialty items", body: "The supplies, time, and components that this specialty forgets are on the checklist." },
      { title: "Late-charge control", body: "Charges that arrive after the usual window are dated and prioritized against filing limits." },
      { title: "Cause", body: "Repeating gaps are traced to a template or a handoff, not blamed on ‘being busy’." },
    ],
    steps: [
      { title: "List what closed", body: "The day’s encounters, by clinician and location, are the starting inventory." },
      { title: "Match the charges", body: "Each encounter has a charge, a reason it has none, or a flag that it is not billable." },
      { title: "Return the gaps", body: "Missing items go back to the person who can still document them." },
      { title: "Release the clean set", body: "Only reconciled encounters move into coding and submission." },
    ],
    standards: [
      "Unbilled encounters aged in days, not discovered at month-end",
      "No charge released without an encounter behind it",
      "Late charges visible against the filing limit",
      "Repeat gaps assigned to a template or a handoff",
    ],
    record: [
      "A daily or weekly reconciliation of closed encounters to charges",
      "A missing-charge list still early enough to fix",
      "Held items and the reason each is held",
      "Lag time from visit to charge, by clinician and location",
      "The repeating gaps, named, so the template can change",
    ],
    related: ["coding-integrity", "medical-billing", "denial-management"],
  },
  {
    slug: "payer-contracting",
    name: "Payer contracting",
    title: "Payer contracting",
    eyebrow: "What the plan agreed to pay",
    summary: "Fee schedules, allowables, and renewal dates read and compared with what the practice is actually paid.",
    lede: "A contract is a price list with obligations. Eunoia Systems reads it that way: what was agreed, what is being paid, when it renews, and whether the work the practice does is even on the schedule. Credentialing gets you enrolled. Contracting tells you what enrollment is worth.",
    paragraphs: [
      "Many practices cannot put a hand on the current fee schedule. Payments are posted against ‘whatever the plan allowed,’ and an underpayment is invisible because the expected amount was never written down. A renewal passes in silence. A new code the practice started performing is paid at a default that nobody negotiated.",
      "The engagement builds a usable book. Current agreements are collected. Effective dates, termination notice, timely-filing limits, and the fee schedule — or the method the plan uses when it will not publish one — are extracted into language an administrator can use. Allowables are compared with payments already posted. The gap is an underpayment list, not a mood.",
      "Renegotiation is prepared only when the practice wants it and the file can support it. Volume, mix, and current yield are assembled before anyone calls a contractor. A hopeful conversation without those numbers is how a worse rate gets signed. If the strategy is to leave a plan, the termination clause and the patients affected are named first.",
      "This is not a promise of a higher rate. Some plans will not move. The deliverable is that the practice knows which agreements pay, which ones quietly discount the work, and which dates are about to pass without a decision.",
    ],
    capabilities: [
      { title: "The file", body: "Agreements, amendments, and fee schedules are gathered into one place the practice can open." },
      { title: "The dates", body: "Renewal, termination notice, and timely filing are calendared." },
      { title: "Allowed versus paid", body: "Posted payments are compared with the contracted amount on the codes that matter." },
      { title: "Missing codes", body: "Services the practice performs and the contract does not price are listed before they become a pattern of defaults." },
      { title: "A negotiation file", body: "Volume and yield are prepared so a rate conversation is about the work, not a complaint." },
      { title: "After the signature", body: "A new schedule is loaded into how underpayments are detected, or the old one keeps hiding them." },
    ],
    steps: [
      { title: "Collect the paper", body: "Current contracts and the last amendments are found, including the ones in a drawer." },
      { title: "Extract the economics", body: "Rates, method, dates, and limits are written in operational language." },
      { title: "Compare with the ledger", body: "What was paid is set next to what was agreed, on the codes that carry the practice." },
      { title: "Decide", body: "Hold, renegotiate, or exit — with the clause and the patients named." },
    ],
    standards: [
      "No payment judged without an expected amount",
      "Renewal dates owned before the notice window",
      "Underpayments distinguished from contractual adjustments",
      "A new fee schedule loaded into posting, not left in a PDF",
    ],
    record: [
      "A contract inventory with effective dates and notice periods",
      "Fee schedules, or a written note when the plan will not provide one",
      "An underpayment list on the codes that carry the revenue",
      "A negotiation file: volume, mix, and current yield",
      "Confirmation that a new schedule is what posting now expects",
    ],
    related: ["credentialing", "ar-recovery", "medical-billing"],
  },
  {
    slug: "revenue-analytics",
    name: "Revenue analytics",
    title: "Revenue analytics",
    eyebrow: "A report someone can act on",
    summary: "Charges, receipts, denials, and aging arranged so a manager can see the leak without learning the billing system.",
    lede: "A practice does not need more dashboards. It needs a small set of numbers that change what happens on Monday. Eunoia Systems builds that set from the system the practice already runs, and refuses the single flattering percentage that hides the rest.",
    paragraphs: [
      "Most billing reports are either a data dump or a scoreboard. The dump is accurate and unread. The scoreboard picks the month that looks best. Neither tells an owner whether clean claims are actually clean, whether aging is old or merely slow, or whether one payer and one reason explain the loss.",
      "The standard pack is short. Charges and receipts. First-pass acceptance beside denial rate. Aging split at 90 days and by payer. Patient receivables split from insurance. Underpayments. Authorization and eligibility misses, when those queues exist. Each number has a definition written in a sentence, so two months can be compared without an argument about what the column meant.",
      "The commentary is part of the report. A movement gets a cause: a credentialing lag, a payer hold, a clinician whose notes are late, a code that started denying in week two. A number without a cause is how a meeting becomes a feeling. The practice can ask for a cut — by location, by clinician, by specialty — and that cut uses the same definitions.",
      "Analytics does not replace the work. It shows whether billing, the front office, denials, and contracting are doing what they said. When a figure is bad, the report names the queue that owns it. When a figure is good for a temporary reason, it says that too.",
    ],
    capabilities: [
      { title: "Definitions", body: "Each figure is defined once. Next month uses the same sentence." },
      { title: "The short pack", body: "Yield, first-pass, denials, aging, and patient balances — together, because one of them lies alone." },
      { title: "Cuts that matter", body: "Payer, location, and clinician views use the same rules as the total." },
      { title: "Cause", body: "A movement is explained. ‘Variance’ is not an explanation." },
      { title: "The temporary win", body: "A backlog release or a payer catch-up is labeled so it is not mistaken for a new process." },
      { title: "The queue", body: "A bad number points at the worklist that can change it." },
    ],
    steps: [
      { title: "Agree the definitions", body: "What counts as a clean claim, a denial, and an aging bucket is settled before the first pack." },
      { title: "Pull from the system of record", body: "The report is built from the practice’s software, not from a second ledger." },
      { title: "Write the cause", body: "Each material movement gets a sentence and an owner." },
      { title: "Keep the pack stable", body: "Columns do not change because a worse number appeared." },
    ],
    standards: [
      "First-pass, denial rate, and aging shown together",
      "Patient receivables reported apart from insurance",
      "Definitions stable month to month",
      "No single percentage offered as the whole story",
    ],
    record: [
      "A written definition for every figure in the pack",
      "A monthly pack: charges, receipts, first-pass, denials, aging, patient balances",
      "Cuts by payer and, where volume supports it, by clinician or location",
      "A cause and an owner for each material movement",
      "A note when a good month is a one-time release rather than a better process",
    ],
    related: ["medical-billing", "denial-management", "ar-recovery"],
  },
  {
    slug: "compliance-program",
    name: "Compliance",
    title: "Compliance and privacy",
    eyebrow: "The floor under the work",
    summary: "HIPAA safeguards, billing compliance, and the record of who touched a chart — built as operating practice, not a binder.",
    lede: "Compliance is not a poster. Eunoia Systems treats privacy and billing integrity as conditions of the work: who can see a record, why a code was chosen, and what happens when something goes wrong. The marketing site stores nothing clinical. A real engagement does, and it is written that way.",
    paragraphs: [
      "A revenue-cycle vendor sits inside the practice’s most sensitive system. That requires a business associate agreement, access limited to the people doing the work, and a way to see what those people did. Shared logins and an inbox full of spreadsheets are not a privacy program. They are how a small incident becomes a reportable one.",
      "Billing compliance sits beside privacy. Codes have to match the record. Waivers of copays, routine write-offs, and ‘we always bill it this way’ are looked at as policy, not as kindness. An audit finding that never changes the next week’s claims was a document. Education is specific: the encounter, the missing element, the person who can fix the next one.",
      "The practice keeps ownership of its patients and its system. Eunoia’s access is scoped to the queues in the agreement, revocable, and not reused as a back door when someone is in a hurry. Incidents — a misdirected statement, a file sent to the wrong payer attachment, a lost laptop — have a path: contain, tell the practice, document. The practice decides what its obligations are. The vendor does not improvise that decision.",
      "This service can stand alone as a review of how the cycle is controlled, or it can run under billing and coding so the safeguards are the way the work is done rather than a yearly meeting. Either way the output is a short set of controls someone can check, not a policy no one has opened.",
    ],
    capabilities: [
      { title: "The agreement", body: "A business associate agreement is part of the engagement, with the systems and the data named." },
      { title: "Access", body: "People have their own credentials. Access matches the queue. Departures are removed." },
      { title: "The minimum", body: "A biller sees the encounter they are billing. They do not browse the chart room." },
      { title: "Billing integrity", body: "Routine waivers, standing write-offs, and unsupported codes are treated as policy questions." },
      { title: "Incidents", body: "A misdirected record has a path: stop it, tell the practice, write down what happened." },
      { title: "Proof", body: "Controls are things that can be shown — a user list, a sample, a log — not a sentence in a manual." },
    ],
    steps: [
      { title: "Name the data", body: "Which systems, which queues, and which people are in scope." },
      { title: "Limit the doors", body: "Access is granted to the work and taken away when the work ends." },
      { title: "Sample the claims", body: "A small set of encounters is read for support, not for theater." },
      { title: "Leave a control", body: "The practice receives the checks it can repeat without hiring a project to remember them." },
    ],
    standards: [
      "A business associate agreement before production access",
      "No shared logins on patient systems",
      "Access removed when a person leaves the work",
      "Incidents reported to the practice, not handled in private",
    ],
    record: [
      "The systems and data covered by the agreement",
      "A user list: who has access, to what, and when it was last reviewed",
      "A short control list the practice can re-check",
      "Sample findings tied to encounters, with the fix and the owner",
      "An incident path, written before one is needed",
    ],
    related: ["coding-integrity", "medical-billing", "credentialing"],
  },
];

export const cycle = [
  { id: "01", title: "Access", body: "The patient is scheduled, welcomed, and identified. Demographics are confirmed while the person is still in front of you. A wrong date of birth here becomes a denial the biller cannot charm away." },
  { id: "02", title: "Verify", body: "Coverage, benefits, referrals, and authorizations are known before the encounter creates a charge. If the plan needs a number, that number exists before the visit, not after the remit." },
  { id: "03", title: "Document", body: "The note says what happened. Codes are chosen from that record, not from habit. What was done and not written down is not billed. What was billed and not supported is not defended." },
  { id: "04", title: "Submit", body: "A scrubbed claim leaves inside the filing limit and is watched until the payer accepts or returns it. Submission is not the finish. Acceptance without a correction is." },
  { id: "05", title: "Post", body: "Payments, adjustments, and denials hit the account. Underpayments are visible the day they post, against the amount the contract said the plan would pay." },
  { id: "06", title: "Resolve", body: "Appeals, patient balances, and write-offs each get an ending. The cause of leakage is retired so the same claim is not rebuilt next month under a new account number." },
];

export const proof = [
  { figure: "10+", label: "Years beside practices" },
  { figure: "18+", label: "Years of industry exposure" },
  { figure: "98%", label: "First-pass acceptance standard" },
  { figure: "<90", label: "Day aging target" },
  { figure: "HIPAA", label: "Compliance as a floor" },
  { figure: "All", label: "Specialties in scope" },
];

export const values = [
  { title: "Expertise", body: "Credentialed, certified people assigned to the specialty in front of them — not a general queue with a logo on it." },
  { title: "Trust", body: "Patient and payer data is protected as if it were our own chart room. Access is limited, watched, and revocable." },
  { title: "Integrity", body: "The company was built on how the work is done, not on how aggressively a percentage can be described." },
  { title: "Specialization", body: "A rehabilitation clinic and an orthopedic group do not share a script. The workflow follows the practice." },
  { title: "Transparency", body: "Reports are specific. Bad news arrives with a cause and a next action, not a softer adjective." },
];

export const testimonials = [
  { quote: "Claims are processed faster, and the team is quick to follow up. We spend our hours on patient care instead of on billing puzzles.", name: "Dr. M.T.", practice: "Family medicine" },
  { quote: "They learned how a small rehabilitation clinic actually gets paid. Collections improved and denials dropped enough that the front desk felt it.", name: "Dr. D.L.", practice: "Rehabilitation therapy" },
  { quote: "What stands out is the communication. We are told where a claim sits, and we stopped losing afternoons to payment chasing.", name: "Dr. S.W.", practice: "Specialty surgery" },
  { quote: "Staff went back to patients. Claim speed picked up, and the transparency is what made the handoff feel safe.", name: "Dr. L.M.", practice: "Psychology practice" },
  { quote: "The claims process is less stressful because someone owns it. Financial health moved because billing and collections finally had a rhythm.", name: "Dr. E.R.", practice: "General practice" },
  { quote: "Denied claims and slow payments were the whole story. They became the exception. The follow-through is the reason we stayed.", name: "Dr. P.B.", practice: "Orthopedic clinic" },
];

export const specialties = [
  { group: "Procedural", name: "Orthopedics", note: "Authorizations, implants, and global periods kept on the same timeline as the claim." },
  { group: "Procedural", name: "General surgery", note: "Assistants, modifiers, and place-of-service mismatches caught before submission." },
  { group: "Procedural", name: "Cardiology", note: "Diagnostic versus interventional coding, and the pre-certs that sit in front of both." },
  { group: "Procedural", name: "Gastroenterology", note: "Screening versus diagnostic indications documented so the benefit is the one that was used." },
  { group: "Procedural", name: "Ophthalmology", note: "Clinic, optical, and facility components separated so none of them disappear." },
  { group: "Procedural", name: "Dermatology", note: "Lesion counts, pathology, and cosmetic versus covered services kept distinct." },
  { group: "Cognitive", name: "Family medicine", note: "High visit volume, prevention, and chronic care billed without collapsing into generic E/M." },
  { group: "Cognitive", name: "Internal medicine", note: "Complexity supported in the note, and downstream referrals that still belong to the practice’s A/R." },
  { group: "Cognitive", name: "Pediatrics", note: "Guardian responsibility, vaccine programs, and well visits that payers love to reclassify." },
  { group: "Behavioral", name: "Psychiatry", note: "Time, psychotherapy add-ons, and parity rules that still produce quiet denials." },
  { group: "Behavioral", name: "Psychology", note: "Session limits, authorization renewals, and patient balances explained without clinical jargon." },
  { group: "Behavioral", name: "Behavioral health groups", note: "Many clinicians, one tax identity, and credentialing that has to stay in step with both." },
  { group: "Facility", name: "Hospitals and clinics", note: "Follow-up at a volume that a small billing team cannot hold in memory." },
  { group: "Facility", name: "Urgent care", note: "Fast encounters, after-hours rules, and a patient who may never return to the same desk." },
  { group: "Facility", name: "Emergency medicine", note: "Coverage surprises and coding that has to stand up without a long relationship." },
  { group: "Facility", name: "Laboratories", note: "Orders, ABNs, and medical necessity tied to a specimen rather than a visit." },
  { group: "Facility", name: "Home health", note: "Episodes, authorizations, and documentation that lives far from the billing office." },
  { group: "Dental", name: "Dental practices", note: "Verification and claims where medical and dental benefits are easy to confuse." },
];

export const platforms = [
  { name: "athenahealth", note: "Charge and claim workflows configured around the queues the practice already lives in." },
  { name: "Epic", note: "Resolute and Prelude-side handoffs respected. We do not ask a hospital to change its system of record." },
  { name: "Oracle Health (Cerner)", note: "Registration and billing events reconciled to the encounters clinicians actually closed." },
  { name: "eClinicalWorks", note: "A common independent-practice stack. Billing tasks are run inside it, not beside a shadow spreadsheet." },
  { name: "NextGen", note: "Templates and claim edits aligned so staff are not fighting their own build." },
  { name: "AdvancedMD", note: "Scheduling through payment posting treated as one loop." },
  { name: "Tebra", note: "Small-practice billing kept current without adding a second source of truth." },
  { name: "DrChrono", note: "Mobile encounter flow matched to a same-week billing cadence." },
  { name: "ModMed", note: "Specialty EHR conventions kept intact, especially where the note drives the code." },
  { name: "Greenway", note: "Intergy-style charge review worked with the practice’s existing edits." },
  { name: "Practice Fusion", note: "Lightweight charts, disciplined claims. The rigor lives in the process." },
  { name: "Dentrix and dental PMS", note: "Verification and claim status for offices where the medical team is not the whole story." },
];

export const articles = [
  {
    slug: "first-pass-is-the-number",
    title: "First-pass acceptance is the number that tells the truth",
    date: "March 12, 2026",
    minutes: 6,
    dek: "Collections can rise because you finally worked a backlog. First-pass tells you whether this month’s claims were built correctly.",
    sections: [
      { heading: "Two different victories", body: ["A practice can have a wonderful cash month and a broken process. Old claims finally pay, a payer releases a hold, or a credentialing file lands. The deposit looks like improvement. Next month the same denials return.", "First-pass acceptance ignores that theater. It asks a narrower question: of the claims that left this period, how many were accepted without coming back for a fix? Eunoia Systems holds 98% as the operating standard because everything downstream — appeal labor, aging, patient frustration — is priced into the other 2%."] },
      { heading: "What usually sits in the 2%", body: ["Registration errors, missing authorizations, diagnosis pointers, and modifiers. Occasionally a true coverage issue. The mix matters more than the average. If half of the failures are eligibility, more coders will not help.", "Read the rejects by cause for four weeks. The ranking almost never matches the story the office has been telling."] },
      { heading: "How to use the figure", body: ["Pair it with denial rate and with A/R older than 90 days. First-pass without aging can mean you are clean and slow. Aging without first-pass can mean you are heroic and sloppy.", "Publish the number inside the practice. When the front desk can see that their eligibility misses became rejects, the checklist survives the Monday rush."] },
    ],
  },
  {
    slug: "aging-past-ninety",
    title: "What to do with A/R older than 90 days",
    date: "January 28, 2026",
    minutes: 7,
    dek: "Past 90 days, hope is not a status. Sort the inventory by whether it can still be paid, then work the dates that expire.",
    sections: [
      { heading: "Stop treating age as one bucket", body: ["A 96-day claim inside a 180-day appeal window is not the same object as a 400-day balance no payer will reopen. Lumping them together produces either false optimism or a mass write-off.", "Split the inventory: still recoverable, recoverable only with a record you do not have yet, and economically finished. Only the third group is a write-off conversation."] },
      { heading: "Small dollars, real money", body: ["Low-dollar claims are where backlog hides. Each one is too small to escalate and too numerous to ignore. A recovery that skips them flatters the average and leaves the volume.", "Work them as a class, with a tighter script and a shorter time-box, rather than as leftovers after the large claims."] },
      { heading: "Kill the source", body: ["If the aging was built by late charge entry, faster phone calls will not save the next quarter. The follow-up team should be required to name the upstream cause as they close each batch.", "Bring that list to billing and the front office monthly. Recovery without prevention is a subscription to the same fire."] },
    ],
  },
  {
    slug: "statements-people-pay",
    title: "Statements people actually pay",
    date: "November 4, 2025",
    minutes: 5,
    dek: "A patient statement is a letter, not a remittance advice. If it reads like a payer file, it will be set down and forgotten.",
    sections: [
      { heading: "Say what happened", body: ["The useful order is human: what we did, what insurance paid, what they adjusted, what you owe, how to pay, who to ask. Ledgers that open with a contractual adjustment code are accurate and unpaid.", "Eunoia’s patient-financial work starts from that order. The practice’s tone is kept. The confusion is not."] },
      { heading: "Estimate before you surprise", body: ["The statement should confirm a number the patient has already heard, not introduce one. Estimates at scheduling or check-in do more for collection than a fourth reminder letter.", "When the estimate was wrong, say so. A short explanation outperforms a corrected total with no story."] },
      { heading: "Separate the books", body: ["Patient A/R and insurance A/R want different tools. A family is not a slow commercial payer, and a pended claim is not a patient collections problem.", "Report them apart. Staff will stop making the wrong phone call."] },
    ],
  },
  {
    slug: "enroll-before-you-bill",
    title: "Enroll the clinician before you bill the clinician",
    date: "August 19, 2025",
    minutes: 6,
    dek: "The most expensive claim is a perfect one submitted for a provider the payer has not enrolled.",
    sections: [
      { heading: "Effective dates are not vibes", body: ["Verbal encouragement from a payer rep is not an effective date. Claims submitted into that fog become a project later, usually after the timely-filing conversation has gotten worse.", "Credentialing at Eunoia is tracked to a written status. Billing is told when it is safe to send, not when it is hopeful."] },
      { heading: "Re-credentialing is a calendar", body: ["Lapses look like sudden denial spikes and are often a date nobody owned. The file should open months before the payer’s deadline, with the documents already current.", "CAQH attestations belong on that same calendar. A beautiful application attached to a stale profile still waits."] },
      { heading: "Turn on the money path", body: ["Enrollment is unfinished until EDI, ERA, and EFT are live and a remit has been matched to a deposit. Otherwise the practice is credentialed and still hunting paper.", "The first twenty claims after a new enrollment deserve eyes. That is when the silent setup errors introduce themselves."] },
    ],
  },
];

export const faqs = [
  { q: "Do we have to outsource the entire cycle?", a: "No. Engagements are scoped. Some practices want the full path from scheduling to the final balance. Others want billing and follow-up, an aging cleanup, a credentialing project, or a coding audit. The work is defined before it starts." },
  { q: "Will you work in our software?", a: "Yes. The practice keeps its system of record. Eunoia is configured to the platform you already run — there is no requirement to migrate onto a house system." },
  { q: "What does 98% first-pass mean here?", a: "It is the operating standard for clean claim acceptance: claims accepted on the first submission without a return for correction. It is not a promise that every payer will pay every charge, and it is not a claim that denials fall by 98%." },
  { q: "How do you handle patient data?", a: "Services are built to HIPAA. Access is limited to the people doing the work, activity is accountable, and a business associate agreement is part of a real engagement. This marketing site does not store clinical data." },
  { q: "Which specialties do you support?", a: "The model is specialty-specific rather than specialty-limited: procedural, cognitive, behavioral, dental, and facility-based practices, including groups and solo clinicians. The workflow is written for the way that specialty documents and gets paid." },
  { q: "Where are you based?", a: "Austin, Texas — 5900 Balcones Drive. The work itself is delivered remotely into the practice’s existing systems, with a person on the phone at +1 (512) 709-9079." },
];

export const audiences = [
  { title: "Physicians and medical groups", body: "Solo clinicians and groups who want billing, denials, and enrollment off the manager’s desk without losing the ability to see what happened. Reporting is built for an owner who still reads it." },
  { title: "Hospitals and clinics", body: "Higher volume, more payers, and follow-up that cannot live in one person’s inbox. The worklist is explicit. Escalations have a clock." },
  { title: "Specialty and outpatient centers", body: "Surgery, therapy, behavioral health, urgent care, dental, laboratory, and home-based care. Each gets the checkpoints that actually cause their denials, not a generic hospital script." },
];

export const models = [
  { title: "Full cycle", body: "Access through final balance. One team, one set of definitions, one monthly story of yield." },
  { title: "Billing and follow-up", body: "The practice keeps the front desk. Eunoia runs charges, claims, posting, denials, and the insurance worklist." },
  { title: "A defined project", body: "Aging recovery, a credentialing wave, a denial blitz, or a coding audit — scoped, dated, and ended on purpose." },
];

export const trajectory = [
  { month: "Mo 1", denials: 11.8, clean: 87 },
  { month: "Mo 2", denials: 9.6, clean: 90 },
  { month: "Mo 3", denials: 8.1, clean: 92 },
  { month: "Mo 4", denials: 6.4, clean: 94 },
  { month: "Mo 5", denials: 5.2, clean: 96 },
  { month: "Mo 6", denials: 4.4, clean: 97 },
  { month: "Mo 7", denials: 3.6, clean: 97.6 },
  { month: "Mo 8", denials: 3.1, clean: 98 },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
