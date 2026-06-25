# Payroll Exercises — Solutions

---

## Exercise 1: Payroll Terminology

1. **PAYE** — Pay As You Earn. Income tax deducted at source by employer from employee's wages.
2. **PRSI** — Pay Related Social Insurance. Social insurance contribution paid by both employee and employer.
3. **USC** — Universal Social Charge. A tax on gross income collected alongside PAYE.
4. **Cumulative tax system** — Tax calculated on total earnings from start of tax year to date, applying credits proportionally.
5. **Week 1 (Emergency) basis** — Tax calculated on each week in isolation with no credits or cut-off applied.
6. **Tax credit** — Amount deducted from tax owed, reducing the tax payable.
7. **Standard rate cut-off point** — Maximum income taxed at 20% before higher 40% rate applies.
8. **Net pay** — Take-home pay after all deductions (PAYE, PRSI, USC, etc.).
9. **P45** — Certificate given to employee when leaving employment, showing pay and tax to date.
10. **P60** — Annual certificate given after year-end showing total pay, PAYE, PRSI, and USC for the year.

---

## Exercise 2: Manual Payroll Calculation (Cumulative)

**Employee:** Sarah Murphy
**Weekly Gross:** €850
**Tax Credits:** €72.12/week
**SRCOP:** €807.69/week
**PRSI:** 4% (above €352)
**USC:** 0.5% on first €12,012 p.a. (€230.77/week)

### Week 1

| | Amount |
|---|--------|
| Gross Pay | €850.00 |
| Cumulative Gross | €850.00 |
| Tax @ 20% on €807.69 | €161.54 |
| Tax @ 40% on €42.31 (€850 − €807.69) | €16.92 |
| Total Gross Tax | €178.46 |
| Less Tax Credit | (€72.12) |
| **PAYE** | **€106.34** |
| PRSI @ 4% (€850 × 4%) | €34.00 |
| USC (€850 × 0.5%) | €4.25 |
| **Total Deductions** | **€144.59** |
| **Net Pay** | **€705.41** |

### Week 2

| | Amount |
|---|--------|
| Gross Pay | €850.00 |
| Cumulative Gross (Weeks 1-2) | €1,700.00 |
| Tax @ 20% on first €1,615.38 (€807.69 × 2) | €323.08 |
| Tax @ 40% on €84.62 (€1,700 − €1,615.38) | €33.85 |
| Total Gross Tax | €356.93 |
| Less Cumulative Credits (€72.12 × 2) | (€144.24) |
| Cumulative PAYE Due | €212.69 |
| Less PAYE Paid Week 1 | (€106.34) |
| **PAYE Week 2** | **€106.35** |
| PRSI (€850 × 4%) | €34.00 |
| USC (€850 × 0.5%) | €4.25 |
| **Net Pay Week 2** | **€705.40** |

### Week 10

| | Amount |
|---|--------|
| Cumulative Gross (Weeks 1-10) | €8,500.00 |
| Tax @ 20% on first €8,076.90 (€807.69 × 10) | €1,615.38 |
| Tax @ 40% on €423.10 (€8,500 − €8,076.90) | €169.24 |
| Total Gross Tax | €1,784.62 |
| Less Cumulative Credits (€72.12 × 10) | (€721.20) |
| Cumulative PAYE Due | €1,063.42 |
| Less PAYE Paid Weeks 1-9 (€106.34 × 9) | (€957.06) |
| **PAYE Week 10** | **€106.36** |
| PRSI (€850 × 4%) | €34.00 |
| USC (€850 × 0.5%) | €4.25 |
| **Net Pay Week 10** | **€705.39** |

---

## Exercise 3: Emergency Tax

### Week 1 (Emergency — no RPN)

| | Amount |
|---|--------|
| Gross Pay | €850.00 |
| Tax @ 40% (no credits applied) | €340.00 |
| PRSI @ 4% | €34.00 |
| USC (€850 × 0.5%) | €4.25 |
| **Total Deductions** | **€378.25** |
| **Net Pay** | **€471.75** |

Compare to normal: €705.41 vs €471.75 — Sarah pays **€233.66 more tax** under emergency.

### Week 4 (RPN arrives — switch to cumulative)

**Position:**
- Weeks 1-3 paid under emergency: €340 × 3 = €1,020 PAYE paid
- Should have been: €106.34 × 3 = €319.02 PAYE
- Overpaid: €1,020 − €319.02 = **€700.98**

**Week 4 (Cumulative catch-up):**

| | Amount |
|---|--------|
| Gross Pay | €850.00 |
| Cumulative Gross (4 weeks) | €3,400.00 |
| Tax @ 20% on €3,230.76 | €646.15 |
| Tax @ 40% on €169.24 | €67.70 |
| Total Gross Tax | €713.85 |
| Less Cumulative Credits (€72.12 × 4) | (€288.48) |
| Cumulative PAYE Due | €425.37 |
| Less PAYE Already Paid (Weeks 1-3) | (€1,020.00) |
| **PAYE Week 4** | **(€594.63)** |

Sarah gets a **negative PAYE (refund) of €594.63** in Week 4.

**Week 4 Net:**

| | Amount |
|---|--------|
| Gross Pay | €850.00 |
| PAYE Refund | +€594.63 (negative deduction) |
| PRSI | (€34.00) |
| USC | (€4.25) |
| **Net Pay** | **€1,406.38** |

The refund compensates for the overpayment in Weeks 1-3.

---

## Exercise 4: Gross Pay Elements

### Gross Pay Calculation

| Element | Calculation | Amount (€) |
|---------|------------|-----------|
| Basic Pay | 35 hrs × €20 | 700.00 |
| Overtime (time + 1/2) | 5 hrs × (€20 × 1.5) | 150.00 |
| Shift Premium | | 50.00 |
| Bonus | | 200.00 |
| Holiday Pay | 3 days × €140 | 420.00 |
| **Total Gross** | | **€1,520.00** |

### Deductions

**PAYE:**
- SRCOP: €807.69/week
- Taxable at 20%: €807.69 → €161.54
- Taxable at 40%: €1,520 − €807.69 = €712.31 → €284.92
- Gross Tax: €446.46
- Less Tax Credit: (€1,875/52 = €36.06)
- **PAYE = €410.40**

**PRSI:** €1,520 × 4% = **€60.80**

**USC:**
- €1,520 × 0.5% = **€7.60** (assuming still within first band)

### Summary

| | Amount (€) |
|---|-----------|
| Gross Pay | 1,520.00 |
| PAYE | (410.40) |
| PRSI | (60.80) |
| USC | (7.60) |
| **Net Pay** | **€1,041.20** |

---

## Exercise 5: Change of Employment

### P45 Figures (Thomas — Leaves Week 26)

| Item | Amount (€) |
|------|-----------|
| Gross Pay to Date | 22,100.00 |
| Tax Deducted to Date | 3,120.00 |
| Tax Credits Used (26/52 of €3,750) | 1,875.00 |
| Basis | Cumulative |

### New Job — Week 30

**Using P45 to continue cumulative:**

Cumulative Gross brought forward: €22,100
Cumulative Tax paid brought forward: €3,120

**Week 30:**
Gross Pay this week: €900
Cumulative Gross: €22,100 + €900 = €23,000

But we need to consider the full year's credits:
- Weeks worked cumulatively so far: 30 (26 at old job + 4 at new job)
- Cumulative SRCOP: 30 × €807.69 = €24,230.70
- Cumulative Tax Credits: 30 × €36.06 = €1,081.80

Wait — we need to be more careful. The SRCOP and credits accumulate across both jobs in the cumulative system.

Actually, when Thomas starts his new job in Week 30 with his P45:
- His previous employer already used Weeks 1-26 of his SRCOP and credits
- The new employer continues from Week 27 onwards

Let me recalculate with 26 weeks used at old job:

**Old Job (Weeks 1-26):**
- Cumulative SRCOP used: 26 × €807.69 = €21,000 (approximately)
- Actually, €42,000/52 × 26 = €21,000
- Cumulative credits used: 26 × (€3,750/52) = 26 × €72.12 = €1,875

**New Job starts Week 27, through Week 30 (this is 4 weeks plus the 26 from old = 30 total):**

**Week 30:**
Gross this week: €900
Cumulative Gross (old + new): €22,100 + (€900 × 4 weeks) = €22,100 + €3,600 = €25,700
Wait — he starts in Week 30 (the exercise says starts in Week 30).

**Week 30 only (first week at new job):**
Cumulative Gross: €22,100 (old) + €900 (this week) = €23,000
Cumulative SRCOP: 30/52 × €42,000 = €24,230.77
All income within SRCOP, so tax @ 20%.

Cumulative Tax: €23,000 × 20% = €4,600
Cumulative Credits: 30/52 × €3,750 = €2,163.46
Cumulative PAYE: €4,600 − €2,163.46 = €2,436.54
Less PAYE already paid: (€3,120)
**PAYE This Week: Negative — refund of €683.46**

This makes sense because Thomas was overpaying slightly at his old job (the cumulative calculation shows he'd overpaid).

---

## Exercise 6: Married Couple Assessment

**Husband:** €60,000 | **Wife:** €15,000 | **Total:** €75,000

### Joint Assessment

Married SRCOP: €51,000 + €33,000 transferable = €84,000
Total income (€75,000) is within €84,000 → all taxed at 20%.

| | Amount (€) |
|---|-----------|
| Tax @ 20% on €75,000 | 15,000.00 |
| Less: Married Personal Credit | (3,750.00) |
| Less: PAYE Credit (Spouse 1) | (1,875.00) |
| Less: PAYE Credit (Spouse 2) | (1,875.00) |
| **Total Tax** | **€7,500.00** |

### Separate Assessment

**Spouse 1 (€60,000):**
- First €42,000 @ 20% = €8,400
- Next €18,000 @ 40% = €7,200
- Gross Tax = €15,600
- Less Personal Credit = (€1,875)
- Less PAYE Credit = (€1,875)
- **Tax = €11,850**

**Spouse 2 (€15,000):**
- €15,000 @ 20% = €3,000
- Less Personal Credit = (€1,875)
- Less PAYE Credit = (€1,875)
- **Tax = −€750 → €0 (credits exceed tax)**

Note: Tax credits are non-refundable. The unused €750 cannot be refunded or transferred under Separate Assessment.

**Total (Separate):** €11,850 + €0 = **€11,850**

### Comparison

| Method | Total Tax (€) |
|--------|--------------|
| Joint Assessment | 7,500 |
| Separate Assessment | 11,850 |

**Joint is better by €4,350.**

---

## Exercise 7: Legislative Change Impact

**Employee:** €35,000 gross

### Year 1

| | Amount (€) |
|---|-----------|
| Tax @ 20% (within €40,000 SRCOP) | €7,000.00 |
| Less Personal Credit | (€1,700.00) |
| Less PAYE Credit | (€1,700.00) |
| **PAYE** | **€3,600.00** |
| PRSI @ 4% | €1,400.00 |
| USC: 0.5% on €12,012 | €60.06 |
| USC: 2% on €10,908 (€22,920 − €12,012) | €218.16 |
| USC: 4.5% on €2,080 (€35,000 − €22,920) | €93.60 |
| **Total USC** | **€371.82** |
| **Total Deductions** | **€5,371.82** |
| **Net Pay** | **€29,628.18** |

### Year 2

| | Amount (€) |
|---|-----------|
| Tax @ 20% (within €42,000 SRCOP) | €7,000.00 |
| Less Personal Credit | (€1,875.00) |
| Less PAYE Credit | (€1,875.00) |
| **PAYE** | **€3,250.00** |
| PRSI @ 4% | €1,400.00 |
| USC: 0.5% on €13,000 | €65.00 |
| USC: 2% on €12,760 (€25,760 − €13,000) | €255.20 |
| USC: 4.5% on €9,240 (€35,000 − €25,760) | €415.80 |
| **Total USC** | **€736.00** |
| **Total Deductions** | **€5,386.00** |
| **Net Pay** | **€29,614.00** |

Wait — the Year 2 USC looks higher. Let me re-check with the rates given.

Year 1 USC rates: 0.5% (€0-€12,012), 2% (€12,013-€22,920)
Year 2 USC rates: 0.5% (€0-€13,000), 2% (€13,001-€25,760)

The Year 2 bands are wider, which should reduce USC for a €35,000 earner.

Actually, let me redo Year 2 more carefully.

Year 2: The 4.5% rate applies above €25,760. So:
- 0-€13,000 @ 0.5% = €65
- €13,001-€25,760 @ 2% = €255.20
- €25,761-€35,000 @ 4.5% = €9,239 × 4.5% = €415.76

Total USC Year 2: €65 + €255.20 + €415.76 = **€735.96**

Year 1: 
- 0-€12,012 @ 0.5% = €60.06
- €12,013-€22,920 @ 2% = €218.16
- €22,921-€35,000 @ 4.5% = €12,079 × 4.5% = €543.56

Total USC Year 1: €60.06 + €218.16 + €543.56 = **€821.78**

Hmm, the USC actually decreased in Year 2 due to the wider bands. Let me redo.

### Year 1 (Corrected)

| | Amount (€) |
|---|-----------|
| PAYE | €3,600.00 |
| PRSI | €1,400.00 |
| USC | €821.78 |
| **Total Deductions** | **€5,821.78** |
| **Net Pay** | **€29,178.22** |

### Year 2 (Corrected)

| | Amount (€) |
|---|-----------|
| PAYE | €3,250.00 |
| PRSI | €1,400.00 |
| USC | €735.96 |
| **Total Deductions** | **€5,385.96** |
| **Net Pay** | **€29,614.04** |

### Comparison

| | Year 1 (€) | Year 2 (€) | Change (€) |
|---|-----------|-----------|-----------|
| Gross Pay | 35,000.00 | 35,000.00 | 0 |
| PAYE | 3,600.00 | 3,250.00 | −350.00 |
| PRSI | 1,400.00 | 1,400.00 | 0 |
| USC | 821.78 | 735.96 | −85.82 |
| **Net Pay** | **29,178.22** | **29,614.04** | **+435.82** |

**Analysis:** The employee is **€435.82 better off per year** due to:
1. Increased tax credits (Personal + PAYE) saving €350
2. Wider USC bands reducing USC by €85.82
