# Payroll Deep Dive — Extra Meat (Part 1: LOs 1-5)

Use alongside the main lesson files. Each section adds worked examples, edge cases, common mistakes, and exam-style questions.

---

## LO1: Payroll Terminology Deep Dive

### How PAYE Actually Works

Revenue gives each employee:
- A **tax credit** (e.g., €3,750/year) — a deduction from tax owed, NOT from income
- A **standard rate cut-off point** (SRCOP) (e.g., €42,000/year) — income taxed at 20% up to this amount

**Example:** Employee earning €45,000 with €3,750 credits and €42,000 SRCOP.

```
Tax calculation:
  First €42,000 @ 20%        = €8,400.00
  Remaining €3,000 @ 40%     = €1,200.00
  Total gross tax             = €9,600.00
  Less tax credits           (€3,750.00)
  PAYE due                    = €5,850.00
```

The €3,750 tax credit reduces the tax from €9,600 to €5,850. It is NOT a deduction from the €45,000 salary.

### Common Misconception

"I earn €45,000 and have a €42,000 cut-off and €3,750 credit"

Wrong: "I pay tax on €45,000 minus €42,000 = €3,000 at 40%, and €42,000 at 20%, less €3,750."
Right: "I pay 20% on first €42,000 = €8,400, 40% on remaining €3,000 = €1,200. Total tax €9,600 less €3,750 credits = €5,850."

### Revenue Payroll Notification (RPN) Explained

The RPN is the modern replacement for the old Tax Credit Certificate (TCC).

Flow:
```
Revenue -> (electronically) -> Employer's Payroll Software -> Applied to employee
```

What an RPN contains:
- Employee's tax credits (e.g., €72.12/week)
- Employee's SRCOP (e.g., €807.69/week)
- Tax basis (Cumulative or Week 1)
- PRSI class
- USC rate bands
- Any Revenue-ordered adjustments

Without an RPN, the employer MUST use emergency tax. The employee ends up overtaxed and waits for a refund.

### Practice

Calculate PAYE for: Gross €38,000, SRCOP €42,000, Credits €3,750.

Since €38,000 < €42,000, all taxed at 20%:
Tax = €38,000 x 20% = €7,600
Less credits = €7,600 - €3,750 = **€3,850 PAYE**

---

## LO2: Manual vs Computerised Payroll Deep Dive

### Real Cost Comparison

| Cost Factor | Manual Payroll | Computerised Payroll |
|-------------|---------------|---------------------|
| Software license | €0 | €200-€1,000/year |
| Time per weekly run (5 employees) | 4 hours | 30 minutes |
| Time per weekly run (50 employees) | Not feasible | 2 hours |
| Training | None | 1-2 days initially |
| Year-end filing time | 2-3 days | 1-2 hours |
| Revenue penalty risk | Higher | Lower |

### When Manual Payroll Is the Only Option

1. Power outage or IT system failure
2. Software updating during payroll week
3. Employer in a remote location with no internet
4. Verifying software calculations

### The Cost of Error in Payroll

| Error | Consequence |
|-------|-------------|
| Underpaid employee by €100 | Employee distress, must pay immediately |
| Overpaid employee by €100 | Difficult to recover |
| Incorrect PAYE paid to Revenue | Interest + penalties |
| P45 issued with wrong figures | Next employer uses wrong data |
| Late P30 filing | 5% surcharge up to €12,695 |

### Exam Point

The examiner wants to see that you understand BOTH systems:
- Manual: understand the calculation
- Computerised: efficiency and accuracy
- Both: manual should always be verified against computerised

---

## LO3: Cumulative Tax System Deep Dive

### Full Weekly Payroll — 13 Week Progression

**Employee:** John, €52,000/year = €1,000/week
**SRCOP:** €42,000/year = €807.69/week
**Credits:** €3,750/year = €72.12/week
**PRSI:** 4% (above €352/week)
**USC:** 0.5% on first €12,012/year

### Week 1

| Calculation | Amount |
|-------------|--------|
| Gross | €1,000.00 |
| Tax @ 20% on €807.69 | €161.54 |
| Tax @ 40% on €192.31 | €76.92 |
| Gross Tax | €238.46 |
| Less Weekly Credit | (€72.12) |
| **PAYE** | **€166.34** |
| PRSI @ 4% | €40.00 |
| USC @ 0.5% | €5.00 |
| **Net Pay** | **€788.66** |

### Week 2

| Calculation | Amount |
|-------------|--------|
| Cum. Gross (1,000 x 2) | €2,000.00 |
| Cum. SRCOP (807.69 x 2) | €1,615.38 |
| Tax @ 20% on 1,615.38 | €323.08 |
| Tax @ 40% on 384.62 | €153.85 |
| Cum. Gross Tax | €476.93 |
| Cum. Credits (72.12 x 2) | (€144.24) |
| Cum. PAYE | €332.69 |
| Less PAYE Paid Week 1 | (€166.34) |
| **PAYE Week 2** | **€166.35** |

### Week 13 — Half-Year

| Calculation | Amount |
|-------------|--------|
| Cum. Gross (1,000 x 13) | €13,000.00 |
| Cum. SRCOP (807.69 x 13) | €10,500.00 |
| Tax @ 20% on 10,500 | €2,100.00 |
| Tax @ 40% on 2,500 | €1,000.00 |
| Cum. Gross Tax | €3,100.00 |
| Cum. Credits (72.12 x 13) | (€937.56) |
| Cum. PAYE | €2,162.44 |
| Less PAYE Paid Wks 1-12 (166.34 x 12) | (€1,996.08) |
| **PAYE Week 13** | **€166.36** |

PAYE is stable at ~€166/week because earnings consistently exceed the SRCOP.

### Pay Rise Mid-Year

John gets a raise to €1,100/week in Week 14.

**Week 14:**
Cum. Gross: €13,000 + €1,100 = €14,100
Cum. SRCOP: 14 x €807.69 = €11,307.66

| | Amount |
|---|--------|
| Tax @ 20% on 11,307.66 | €2,261.53 |
| Tax @ 40% on 2,792.34 | €1,116.94 |
| Cum. Gross Tax | €3,378.47 |
| Cum. Credits (14 x 72.12) | (€1,009.68) |
| Cum. PAYE | €2,368.79 |
| Less PAYE Paid (13 weeks) | (€2,162.44) |
| **PAYE Week 14** | **€206.35** |

PAYE increases from ~€166 to ~€206 due to more income in the 40% bracket.

### Unpaid Leave — Refund Effect

John takes Week 8 unpaid. Gross = €0.

| | Amount |
|---|--------|
| Cum. Gross (1,000 x 7) | €7,000.00 |
| Cum. SRCOP (807.69 x 8) | €6,461.52 |
| Tax @ 20% on 6,461.52 | €1,292.30 |
| Tax @ 40% on 538.48 | €215.39 |
| Cum. Gross Tax | €1,507.69 |
| Cum. Credits (72.12 x 8) | (€576.96) |
| Cum. PAYE | €930.73 |
| Less PAYE Paid Wks 1-7 (166.34 x 7) | (€1,164.38) |
| **PAYE Week 8** | **(€233.65) — refund!** |

John gets a PAYE refund of €233.65 in Week 8 because his cumulative tax position shows he has overpaid relative to what he should have paid on €7,000.

### Common Cumulative Mistakes

| Mistake | Result |
|---------|--------|
| Forgetting cumulative basis | Employee overtaxed |
| Not including P45 from previous job | Starts at €0 cumulative, overtaxed |
| Applying credits as income deduction | Credits over-applied |
| Incorrect SRCOP | Wrong split between 20% and 40% |

---

## LO4: Emergency & Temporary Tax Deep Dive

### When Does Emergency Tax End?

Emergency tax continues until the employee provides:
1. Their PPS number AND
2. Revenue sends their RPN to the employer

If the employee has a PPS number but no RPN:
- Employer should request the RPN via ROS
- If still not received, emergency tax continues

### The 4-Week Rule

| Period | Rate |
|--------|------|
| Weeks 1-4 | 40% with no credits |
| Week 5+ (if still no PPS) | 50% |

### Emergency to Cumulative — Full Example

Emma starts in Week 1, no PPS provided.

**Weeks 1-3 (Emergency):**
- Weekly gross: €500
- Tax @ 40%: €200 (no credits)
- PRSI @ 4%: €20
- USC: €2.50
- Net pay: €277.50

**Week 4: Emma provides PPS, RPN fetched.**

RPN shows: Credits €3,750/year, SRCOP €42,000.

Software retrospectively calculates cumulative position:

Cum. Gross: (500 x 3) + 500 = €2,000
Cum. SRCOP: 4 x 807.69 = €3,230.76
Cum. Tax at 20% (within SRCOP): €2,000 x 20% = €400
Cum. Credits: 4 x 72.12 = €288.48
Cum. PAYE: €400 - €288.48 = **€111.52**
PAYE already paid (emergency): 200 x 3 = **€600**
**PAYE refund Week 4:** €111.52 - €600 = **-€488.48**

**Week 4 payslip:**
| | Amount |
|---|--------|
| Gross | €500.00 |
| PAYE | (€488.48) — negative = refund |
| PRSI | (€20.00) |
| USC | (€2.50) |
| **Net** | **€966.02** |

### Important: Refund Mechanism

The refund comes from the EMPLOYER's payroll system:
1. Employer deducts less PAYE (or negative PAYE) in the current period
2. Employer pays Emma more this week
3. Employer recovers the overpaid tax from Revenue through P30/P35

### Common Exam Question

Q: An employee has been on emergency tax for 3 weeks. Her RPN arrives in Week 4. Explain the refund.

A: Under the cumulative system, the software calculates total tax due on cumulative earnings to Week 4 using her actual credits and SRCOP. It subtracts tax already paid under emergency. If cumulative tax due is less than what was paid, the difference is refunded as negative PAYE in Week 4.

---

## LO5: Changes in Personal Tax Deep Dive

### Mid-Year Commencement

Aoife starts work on 1 July (Week 27). Unemployed since January.

**Details:** Weekly wage €700, annual credits €3,750, annual SRCOP €42,000.

Even though Aoife earned nothing in Weeks 1-26, she gets full credits and SRCOP from Week 27 onwards.

**Week 27 — first pay:**
| | Amount |
|---|--------|
| Gross | €700.00 |
| Cum. Gross | €700.00 |
| Within SRCOP, all @ 20% | €140.00 |
| Cum. Credits (€72.12) | (€72.12) |
| **PAYE** | **€67.88** |
| Net | €600.62 |

Aoife gets her full year's credits spread over remaining weeks. She does not lose credits from weeks she was not working.

### Mid-Year Leaving

Tom leaves on 30 June (Week 26).

**Payroll to date:** Cum. Gross €20,800, Cum. PAYE €2,860.

**P45 shows:** Gross €20,800, Tax €2,860, Basis: Cumulative, Week 26.

Tom starts new job in Week 32 earning €900/week.

New employer enters P45 data. Cum. Gross b/f: €20,800, Cum. Tax b/f: €2,860.

**Week 32:**
| | Amount |
|---|--------|
| Gross this week | €900.00 |
| Cum. Gross (20,800 + 900) | €21,700.00 |
| Cum. SRCOP (32 x 807.69) | €25,846.08 |
| Within SRCOP, all @ 20% | €4,340.00 |
| Cum. Credits (32 x 72.12) | (€2,307.84) |
| Cum. PAYE | €2,032.16 |
| Less PAYE already paid (old job) | (€2,860.00) |
| **PAYE Week 32** | **-€827.84 — refund!** |

Tom gets a refund because new cumulative calculation shows he overpaid tax at old job relative to combined earnings.

### Change in Credits

Mary gets married in Week 20. Credits change from single (€1,875) to married (€3,750).

**Before (Weeks 1-19):** Weekly credit €36.06, total used: €685.14

**After (Week 20+):** New weekly credit €72.12, but cumulative catch-up backdates to January.

Cum. credits available by Week 20: 20 x 72.12 = €1,442.40
Already used: €685.14
Credits available this week: €1,442.40 - €685.14 = **€757.26**

**Week 20 PAYE (€800 gross):**
| | Amount |
|---|--------|
| Cum. Gross (800 x 20) | €16,000.00 |
| Tax @ 20% | €3,200.00 |
| Cum. Credits avail | (€1,442.40) |
| Cum. PAYE | €1,757.60 |
| Less PAYE paid wks 1-19 | (€2,480.00) |
| **PAYE Week 20** | **-€722.40 — refund!** |

Massive refund because extra credits are backdated.

### Practice

An employee starts a second job in Week 16 earning €500/week. She has used €1,200 of her €3,750 credits in her main job. Explain how the credits are allocated.
