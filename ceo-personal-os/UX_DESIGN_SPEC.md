# CEO Personal OS — UX/UI Design Specification

## Design Philosophy

### The Core Insight

This is not a productivity app. It is a **private room**. A place someone goes to think. The design must feel like sitting in a quiet study with good light, a comfortable chair, and a notebook — not like opening a SaaS dashboard.

The user is a 51-year-old CEO in career transition. He is carrying weight — professional uncertainty, family responsibility, the pressure of reinvention at midlife. Every other tool in his life is demanding something from him. **This one gives something back.**

### Three Design Principles

1. **One thing at a time.** Never show two competing actions on the same screen. The daily check-in is not alongside the weekly review is not alongside the goals. Each moment in the app has a single clear purpose.

2. **The room should feel empty before you walk in.** No badges. No notification counts. No red dots. No "you missed 3 days." The app waits patiently. It is there when you arrive and silent when you're not.

3. **Warmth without softness.** The tone is direct, like a trusted advisor. The visuals are warm, like a well-made leather notebook. But nothing is precious or fragile. This is a tool for someone who runs things.

---

## The Experience, Moment by Moment

### First Launch: The Welcome

The CEO opens the app for the first time. No signup. No onboarding carousel. No feature tour.

**What they see:** A single page, warm off-white background, generous whitespace. Centered on the screen:

```
Welcome.

This is your personal operating system.
It helps you think clearly — daily, weekly, and over time.

There's nothing to set up. Let's start with the only
thing that matters today.

          [ Begin Your First Check-In → ]
```

One button. One action. The entire application is behind that button, but the user doesn't need to know that yet. They just need to know what to do *right now*.

After their first check-in, the sidebar appears. The system reveals itself progressively — not all at once.

---

### The Home Screen: Not a Dashboard

**Critical UX decision:** This is NOT a dashboard. Dashboards create anxiety. They show you everything at once and imply that everything is equally urgent. Instead, this is a **morning page** — a single, calm surface that tells you one thing: what to do next.

**Layout: Full-screen, single column, centered at 640px max-width.**

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  Good evening.                                   │
│  Saturday, February 8, 2026                      │
│                                                  │
│  ┌──────────────────────────────────────────┐    │
│  │                                          │    │
│  │  "I am building a life where my family   │    │
│  │   is proud to have me around, my body    │    │
│  │   can keep up with my ambitions, and     │    │
│  │   my work is something I chose."         │    │
│  │                                          │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│                                                  │
│       ┌──────────────────────────────┐           │
│       │                              │           │
│       │   Start Today's Check-In     │           │
│       │                              │           │
│       └──────────────────────────────┘           │
│                                                  │
│                                                  │
│                                                  │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │
│                                                  │
│  This week               Energy trend            │
│  ● ● ● ● ○ ○ ○           ── small sparkline ──  │
│  4 of 7 days              avg: 6.2               │
│                                                  │
│                                                  │
│  Coming up                                       │
│  Weekly review · due tomorrow                    │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Key decisions:**

- **The North Star quote is the visual anchor.** It's the first thing you see. Not metrics. Not tasks. Your own words about what matters. Set in serif italic. Quiet. Present.

- **The primary action is unmistakable.** One button, full-width within the content column, muted sage green background. It says exactly what it does.

- **The secondary information is below a visual divider** and is deliberately understated. Small text, muted colors. The week's check-in dots are not a streak counter — they're just a gentle visual rhythm. No "You missed Tuesday!" Just filled and unfilled circles.

- **The energy sparkline is tiny** — maybe 100px wide. It shows a trend, not a judgment. No axis labels. No numbers except the average. You glance at it; you don't study it.

- **"Coming up"** shows the next cadence due, in plain language. Not "OVERDUE" in red. Just "due tomorrow" in quiet gray. If nothing is due, this section doesn't appear at all.

**Time-of-day awareness:**

| Time | Greeting | Primary Action |
|------|----------|---------------|
| 5am-12pm | Good morning. | Start Today's Check-In |
| 12pm-5pm | Good afternoon. | Start Today's Check-In |
| 5pm-9pm | Good evening. | Start Today's Check-In |
| 9pm-5am | Still up? | Finish Today's Check-In |

If today's check-in is already done:

```
  ✓  Today's check-in is done.
     You noted your energy at 7.
     Tomorrow's priority: "Call David about the VP role."

     [ Review Today's Entry ]     (subtle, text-only link)
```

No confetti. No "Great job!" Just a calm acknowledgment and a reflection of their own words back to them.

---

### The Sidebar: A Bookshelf, Not a Control Panel

The sidebar appears after the first check-in. It lives on the left, 240px wide, warm white background with a subtle left border.

```
┌─────────────────────┐
│                     │
│  ○  Home            │
│                     │
│                     │
│  RHYTHM             │
│  ○  Daily           │
│  ○  Weekly          │
│  ○  Quarterly       │
│  ○  Annual          │
│                     │
│                     │
│  THINK              │
│  ○  Frameworks      │
│  ○  Interviews      │
│                     │
│                     │
│  AIM                │
│  ○  Goals           │
│  ○  North Star      │
│  ○  Principles      │
│                     │
│                     │
│  REMEMBER           │
│  ○  Memory          │
│  ○  History         │
│  ○  Uploads         │
│                     │
│                     │
└─────────────────────┘
```

**Key decisions:**

- **Grouped by verb, not noun.** Not "Reviews" and "Documents" — but RHYTHM (your cadences), THINK (your frameworks), AIM (your direction), REMEMBER (your history). These are action categories that a CEO understands intuitively.

- **Section headers are quiet labels** — small caps, muted color, no icons. The nav items are plain text with a small circle indicator. Active page gets a filled circle and slightly bolder weight.

- **No badge counts.** The Weekly item doesn't show "(overdue)". That information lives on the home screen only. The sidebar is a bookshelf — it organizes, it doesn't nag.

- **Collapsible on mobile** — slides in from left. On tablet, it's a bottom tab bar with the four verb groups as tabs.

---

### Daily Check-In: The Core Ritual

This is the page the CEO will visit 365 times. It must be **effortless, calm, and fast.** It should feel less like filling out a form and more like someone asking you five quiet questions.

**The one-question-at-a-time pattern:**

The screen shows ONE question. Full screen. Centered. Nothing else competing for attention.

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  Daily Check-In                       1 of 6     │
│                                                  │
│                                                  │
│                                                  │
│                                                  │
│  How's your energy today?                        │
│                                                  │
│                                                  │
│                                                  │
│     1    2    3    4    5    6    7    8    9   10 │
│     ○    ○    ○    ○    ○    ○    ●    ○    ○    ○│
│                                                  │
│  depleted          baseline          fully       │
│                                       charged    │
│                                                  │
│                                                  │
│                                                  │
│                                                  │
│                              [ Next → ]          │
│                                                  │
└──────────────────────────────────────────────────┘
```

Then:

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  Daily Check-In                       2 of 6     │
│                                                  │
│                                                  │
│                                                  │
│                                                  │
│  One meaningful win today.                       │
│                                                  │
│  Not your biggest accomplishment — the thing     │
│  that actually mattered.                         │
│                                                  │
│  ┌──────────────────────────────────────────┐    │
│  │                                          │    │
│  │  _                                       │    │
│  │                                          │    │
│  │                                          │    │
│  │                                          │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│                                                  │
│                    [ ← Back ]    [ Next → ]       │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Micro-interaction details:**

- **The rating selector** is not a slider. Sliders are imprecise on mobile and feel corporate. Instead: 10 evenly-spaced circles. Tap one to select. The selected circle fills with sage green and gently scales up 1.2x. A subtle label appears below ("baseline" or "fully charged"). No animation that takes more than 150ms.

- **The text area** has no visible border on load — just a blinking cursor on a warm background. As you type, a subtle bottom border appears. The area auto-grows. No character counter. No "minimum 20 characters." Write one word or five paragraphs.

- **The hint text** (italic, muted) sits between the question and the input. It's the coaching voice — gently reframing the question so you don't reach for a performance answer. It disappears once you start typing (but remains accessible via a small "?" icon if you want it back).

- **Progress indicator** is "2 of 6" in the top right. Not a progress bar — progress bars create urgency. Just a quiet count. You know where you are.

- **Transition between questions** is a gentle horizontal slide — the current question exits left, the next enters from right. Duration: 250ms, ease-out. Not dramatic. Not bouncy. Just smooth.

- **The Back button** is text-only, no background, muted color. Going back is possible but not emphasized. Forward momentum is the default.

- **On the last question (the optional family one):**

```
  How you showed up for your family today.

  This one's optional. Skip it if you want.

  ┌─────────────────────────────────────┐
  │                                     │
  │  _                                  │
  │                                     │
  └─────────────────────────────────────┘

              [ Skip ]    [ Save & Done ]
```

"Skip" and "Save & Done" are the two options. No guilt for skipping. "Save & Done" is the primary button — sage green, satisfying to press.

**After saving:**

The screen doesn't redirect immediately. It holds for 2 seconds with:

```
                  Saved.

    Tomorrow's priority: "Call David about the VP role."

    See you tomorrow.
```

Then it gently fades back to the home screen, which now shows the check-in as done.

**Why this works:** The one-at-a-time pattern removes cognitive overload. A form with 6 fields feels like work. Six individual questions, asked one at a time, feels like a conversation. The CEO spends 30-60 seconds on each. Five minutes total. No scrolling. No form fatigue.

---

### Weekly Review: Guided and Pre-Populated

The weekly review is the first place the interactive UI proves its value over raw Markdown. Because the app has the week's daily check-ins in structured data, it can **do work for you**.

**When you open the Weekly Review page:**

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  Weekly Review                                   │
│  Week of Feb 3 – Feb 8, 2026                     │
│                                                  │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │
│                                                  │
│  YOUR WEEK AT A GLANCE                           │
│                                                  │
│  Energy                                          │
│  Mon  Tue  Wed  Thu  Fri  Sat  Sun               │
│   6    5    7    4    8    7    —                  │
│  ▃▃   ▂▂   ▅▅   ▁▁   ▇▇   ▅▅                    │
│                                                  │
│  Average: 6.2    High: Friday (8)   Low: Thu (4) │
│                                                  │
│                                                  │
│  Your wins this week                             │
│  · "Had honest conversation with Sarah"          │
│  · "Second interview with Apex went well"        │
│  · "Ran 3 miles without stopping"                │
│  · "Actually put my phone away at dinner"        │
│                                                  │
│  Your friction points                            │
│  · "Rejection from DataCorp"                     │
│  · "Snapped at the kids Wednesday"               │
│  · "Couldn't sleep Thursday"                     │
│                                                  │
│                                                  │
│  This data was pulled from your daily check-ins. │
│  Now let's go deeper.                            │
│                                                  │
│           [ Start Weekly Review → ]              │
│                                                  │
└──────────────────────────────────────────────────┘
```

**The pre-populated summary is the key innovation.** Before the CEO writes a single word, they see their own week reflected back. The energy bar chart is simple and immediate. Their wins and friction points — their own words from daily check-ins — are listed as gentle reminders. This is the mirror effect.

**Then the review itself uses the same one-at-a-time pattern** but with section groups. The wizard shows section headers between steps:

```
  ── SECTION: WHAT MATTERED ──────────────

  What 2-3 things this week actually moved
  the needle?

  Not what was busy. What was meaningful.
```

**The Energy Audit section is pre-filled:**

```
  ── SECTION: ENERGY AUDIT ──────────────

  Your average energy this week: 6.2 / 10

  Your highest day was Friday (8/10).
  What made Friday good?

  ┌─────────────────────────────────────┐
  │  _                                  │
  └─────────────────────────────────────┘

  Your lowest day was Thursday (4/10).
  What happened Thursday?

  ┌─────────────────────────────────────┐
  │  _                                  │
  └─────────────────────────────────────┘
```

The app already knows the high and low days. It asks "why" — the human part. This is where technology and reflection meet correctly: the machine handles the data, the human provides the meaning.

**Priority Check section uses a warm card layout:**

```
  ── SECTION: PRIORITY CHECK ──────────────

  For each priority, what did you actually
  do this week?

  ┌─────────────────────────────────────┐
  │  1. Getting a new job               │
  │                                     │
  │  What I did:                        │
  │  ┌─────────────────────────────┐    │
  │  │  _                          │    │
  │  └─────────────────────────────┘    │
  │                                     │
  │  Honest grade:                      │
  │  ○ A  ○ B  ○ C  ○ D  ○ F           │
  └─────────────────────────────────────┘

  ┌─────────────────────────────────────┐
  │  2. Being a better husband          │
  │  ...                                │
  └─────────────────────────────────────┘
```

Each priority gets its own card. The letter grades are tappable radio buttons, not a dropdown. Physical, tactile, honest. Giving yourself a D on "being a better husband" should feel weighty — not because the UI punishes you, but because you're looking at it directly.

---

### Interviews: A Quiet Room

The guided self-interviews (Past Year Reflection, Identity and Values, Future Self) are the most emotionally sensitive part of the system. The UX must create psychological safety.

**The opening is not a form. It's a moment.**

```
┌──────────────────────────────────────────────────┐
│                                                  │
│                                                  │
│                                                  │
│                                                  │
│                                                  │
│        Past Year Reflection                      │
│                                                  │
│        This is a conversation with yourself.     │
│        Read each question, sit with it           │
│        for a moment, and write your              │
│        honest answer.                            │
│                                                  │
│        There are no right answers.               │
│                                                  │
│        Some questions will hit hard.             │
│        Some won't land at all.                   │
│        That's fine.                              │
│                                                  │
│                                                  │
│                                                  │
│              [ I'm ready → ]                     │
│                                                  │
│                                                  │
│                                                  │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Font size increases.** During interviews, the question text is set at 24px, not 18px. The screen is mostly empty space. This signals: slow down. This is not a form to complete — it's a space to think.

**One question per screen. No progress bar.**

For interviews, I would remove the "4 of 22" counter. Knowing there are 22 questions creates clock-watching. Instead, a section label in muted text:

```
  The Big Picture


  Tell me about the last year —
  highlights first.

  What went well? What are you
  genuinely glad happened?
```

No step count. No timer. Just the question and a text area below it. The CEO writes until they're done, then taps "Next question."

**Auto-save on every keystroke (debounced).** The user should never think about saving during an interview. A tiny "Draft saved" appears at the bottom of the screen for 1.5 seconds after each auto-save, then fades. If they close the browser and come back tomorrow, their progress is exactly where they left it.

**Resume experience:**

```
  Past Year Reflection

  You started this on February 5th.
  You've answered 8 questions so far.

  [ Continue where I left off → ]

  [ Start over ]    (small, muted text)
```

No guilt about the gap. Just: "Here's where you were. Want to keep going?"

**The "hard" questions get extra space.** Questions like "Where did you avoid hard decisions?" and "What would you not repeat under any circumstances?" should render with more vertical padding above them — a visual breath before the hard thing. The typography doesn't change, but the space communicates: this one's worth sitting with.

---

### Frameworks: Interleaved Teaching and Doing

Frameworks (Life Map, Vivid Vision, Ideal Life Costing, Annual Review) combine explanatory prose with interactive exercises. The UX challenge: the prose matters. It's the coaching voice. But you can't just render a wall of Markdown with form fields jammed in.

**The solution: a scroll-based experience with "stops."**

The user scrolls through the framework content like reading an article. The prose renders beautifully — serif headings, generous line height, wide margins. When they reach an interactive section, the page presents a **docked interaction area** that locks to the viewport:

```
  ┌────────────────────────────────────────────────┐
  │                                                │
  │  [scrollable prose above, partially visible]   │
  │                                                │
  │  ...The six domains:                           │
  │  1. Career — Your work, your identity...       │
  │  2. Relationships — Your marriage...            │
  │  ...                                           │
  │                                                │
  ├────────────────────────────────────────────────┤
  │                                                │
  │  SCORE EACH DOMAIN                             │
  │                                                │
  │  Career                                        │
  │  1 ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ 10                     │
  │  In one sentence, why?                         │
  │  ┌──────────────────────────────────────┐      │
  │  │  _                                   │      │
  │  └──────────────────────────────────────┘      │
  │                                                │
  │  Relationships                                 │
  │  1 ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ 10                     │
  │  In one sentence, why?                         │
  │  ┌──────────────────────────────────────┐      │
  │  │  _                                   │      │
  │  └──────────────────────────────────────┘      │
  │                                                │
  │              [ Continue reading ↓ ]            │
  │                                                │
  └────────────────────────────────────────────────┘
```

After completing the ratings, tapping "Continue reading" scrolls smoothly to the next prose section, which provides the deep-dive questions for each domain.

**For Ideal Life Costing — the auto-summing cost table:**

This is the single most satisfying interactive element in the system. The user enters dollar amounts and watches totals calculate in real time:

```
  FIXED COSTS                               Monthly

  Housing (mortgage, tax, insurance)     $  3,200
  Utilities                              $    380
  Health insurance                       $    850
  Car / transportation                   $    520
  Kids' school                           $  1,100
  Debt payments                          $    400
  Subscriptions                          $    120
                                         ─────────
  Fixed Total                            $  6,570


  [next category...]


  ═══════════════════════════════════════════════════

  YOUR NUMBER

  Monthly total                          $  11,240
  Annual total                           $ 134,880
  + 10% buffer                           $ 148,368
  Gross income target (~1.35x)           $ 200,297

  ═══════════════════════════════════════════════════

  Your ideal life costs $200,297 per year.
```

The final number appears in larger text, centered, with a subtle sage green underline. Not dramatic — just clear. This is the number the CEO takes into every salary negotiation.

---

### Goals: Progress Without Pressure

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  Goals                                           │
│                                                  │
│  ┌──────────────────────────────────────────┐    │
│  │  THIS YEAR                               │    │
│  │                                          │    │
│  │  1. Secure the right role                │    │
│  │     ████████░░░░░░░░░░░░  4 of 10        │    │
│  │                                          │    │
│  │  2. Strengthen my marriage               │    │
│  │     ██████░░░░░░░░░░░░░░  3 of 10        │    │
│  │                                          │    │
│  │  3. Be a more present dad                │    │
│  │     ████████████░░░░░░░░  6 of 10        │    │
│  │                                          │    │
│  │  4. Build health foundation              │    │
│  │     ██████████░░░░░░░░░░  5 of 10        │    │
│  │                                          │    │
│  │  [ View details → ]                      │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│  ┌──────────────────┐  ┌──────────────────┐      │
│  │  THREE YEARS     │  │  TEN YEARS       │      │
│  │                  │  │                  │      │
│  │  Direction, not  │  │  The long view.  │      │
│  │  precision.      │  │  Read quarterly. │      │
│  │                  │  │                  │      │
│  │  [ Read → ]      │  │  [ Read → ]      │      │
│  └──────────────────┘  └──────────────────┘      │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Key decisions:**

- Progress bars use muted, warm colors — not bright green/red. No percentage labels ("40%"). Just the visual bar and "4 of 10" in plain text.
- The 3-year and 10-year goals are deliberately smaller cards that say "Read" not "Track." These are vision documents, not checklists.
- Clicking into the 1-year detail shows checkboxes that can be toggled inline. Each toggle writes back to the `.md` file immediately.

---

### History: Your Past in Layers

The History page is not a log. It's a **timeline with zoom levels.**

```
  HISTORY

  ┌─ 2026 ─────────────────────────────────┐
  │                                         │
  │  Energy over time                       │
  │  [smooth line chart, 90 days]           │
  │                                         │
  │  February ─────────────────────         │
  │                                         │
  │  Week of Feb 3                          │
  │  ├ Mon 3  · energy: 6  · "Started..."  │
  │  ├ Tue 4  · energy: 5  · "Rough day.." │
  │  ├ Wed 5  · energy: 7  · "Interview.." │
  │  ├ Thu 6  · energy: 4  · "Rejection.." │
  │  ├ Fri 7  · energy: 8  · "Call with.." │
  │  └ Sat 8  · energy: 7  · "Good run.."  │
  │                                         │
  │  ► Weekly Review: Feb 3-8               │
  │    "The biggest insight this week was.." │
  │                                         │
  │  January ──────────────────────         │
  │  [collapsed — tap to expand]            │
  │                                         │
  └─────────────────────────────────────────┘
```

**Design details:**
- Grouped by week, inside months, inside years
- Each daily entry shows a one-line preview (first 40 chars of their "win")
- Weekly reviews are highlighted with a slightly different card style
- Quarterly and annual reviews are prominent landmarks in the timeline
- The energy chart at top is the primary visualization — giving the CEO a 90-day emotional weather map at a glance

---

### Memory Page: The Living Mirror

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  Memory                                          │
│                                                  │
│  ┌──────────────────────────────────────────┐    │
│  │  + ADD AN INSIGHT                        │    │
│  │                                          │    │
│  │  Source: [ Weekly Review ▾ ]              │    │
│  │                                          │    │
│  │  ┌──────────────────────────────────┐    │    │
│  │  │  _                                │    │    │
│  │  └──────────────────────────────────┘    │    │
│  │                                          │    │
│  │                        [ Save Insight ]  │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│                                                  │
│  PATTERNS                                        │
│                                                  │
│  ┌────────────────┐  ┌────────────────┐          │
│  │  Energy        │  │  Decisions     │          │
│  │                │  │                │          │
│  │  Gives: ...    │  │  Good at: ...  │          │
│  │  Drains: ...   │  │  Avoids: ...   │          │
│  │  Best: AM      │  │  Under         │          │
│  │  Worst: 3pm    │  │  stress: ...   │          │
│  │  [ edit ]      │  │  [ edit ]      │          │
│  └────────────────┘  └────────────────┘          │
│                                                  │
│  ┌────────────────┐  ┌────────────────┐          │
│  │  Relationships │  │  Career        │          │
│  │  ...           │  │  ...           │          │
│  └────────────────┘  └────────────────┘          │
│                                                  │
│                                                  │
│  INSIGHTS OVER TIME                              │
│                                                  │
│  2026-02-08 · System Setup                       │
│  System initialized with priorities...           │
│                                                  │
└──────────────────────────────────────────────────┘
```

The pattern cards are **inline-editable**. Tap "edit," the text becomes editable, tap "save." No page navigation. The memory grows in place.

---

## Emotional Design Details

### What Happens When You Miss Days

Nothing. Literally nothing. No "You haven't checked in for 3 days" banner. No broken streak counter. No red badges.

When the CEO returns after a gap, the home screen simply says:

```
  Good morning.
  Wednesday, February 12, 2026

  [North Star quote]

  [ Start Today's Check-In → ]
```

Exactly the same as every other day. The check-in dots for the week will show the gap — unfilled circles — but without commentary. The system doesn't guilt. It waits.

### What Happens on Completion of a Quarterly Review

After the final "Save" on a quarterly review:

```


  Q1 2026 review saved.

  You've been doing this for 87 days.

  Key insight from this quarter:
  "I'm applying to jobs out of anxiety,
  not alignment. I need to slow down."

  This has been added to your memory.


  [ Return home ]

```

A quiet moment of acknowledgment. Their own words reflected back. Then home.

### What Happens on Annual Review Day

The annual review is a half-day event. The app acknowledges this:

```
  Annual Review — 2026

  Set aside 2-4 hours.
  This is the most important meeting
  you'll have this year.

  You've completed:
  ✓  312 daily check-ins
  ✓  48 weekly reviews
  ✓  4 quarterly reviews
  ✓  2 interviews
  ✓  3 framework exercises

  Today, we pull it all together.

  [ Begin → ]
```

The count of past entries is not gamification — it's **evidence of investment.** "You've done the work. Now let's make sense of it."

---

## Visual Language Summary

| Element | Treatment |
|---------|-----------|
| Background | `#FAFAF8` warm off-white |
| Text | `#2D2D2D` warm near-black |
| Accent | `#4A6741` muted sage green |
| Borders | `#E8E5E0` warm light gray |
| Secondary | `#8B7355` warm brown |
| Headings | Lora or Merriweather (serif), 20-28px |
| Body | Inter, 16-18px, line-height 1.7 |
| Questions | 20-24px, serif, medium weight |
| Hints | 14px, italic, `#8B8B8B` |
| Max width | 640px content column |
| Spacing | 48px page padding, 32px between sections |
| Cards | White, 1px border, 12px radius, 24px padding |
| Buttons | Sage green fill, white text, 8px radius, 12px/24px padding |
| Transitions | 200-250ms ease-out, horizontal slide between steps |
| Rating circles | 32px diameter, 2px border, fill on select |
| Charts | Minimal. No gridlines. No axes unless necessary. Muted palette. |

---

## The Principle That Ties It Together

**Show less to reveal more.**

Every screen in this app should pass the test: "If a stressed, tired CEO opened this at 9pm after a hard day, would they feel relief or dread?"

If the answer is dread — too many elements, too much information, too many demands — remove things until the answer is relief.

The best UX for this system is the one that disappears. The CEO shouldn't think about the app. They should think about their life. The app is the glass; their reflection is the content.
