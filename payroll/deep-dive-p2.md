# Payroll Deep Dive — Extra Meat (Part 2: LOs 6-10)

---

## LO6: Year-End Employee Forms Deep Dive

### P45 — Detailed Walkthrough

**When to issue:** Employee leaves, dies, or reaches State Pension age.

**P45 Copies:**

```
Copy A: Employer submits to Revenue
Copy B: Employee gives to new employer
Copy C: Employee keeps for records
```

**P45 Layout:**
```
P45 — LEAVE CERTIFICATE
Employee Name:     Thomas Murphy
PPS Number:        1234567T
Date of Leaving:   30/06/2026
Tax Basis:         Cumulative

INCOME TAX DETAILS
Gross Pay to Date:         €20,800.00
Tax Deducted to Date:      €2,860.00

EMPLOYER DETAILS
Reg Number:    12345A
Name:          ABC Ltd
```

### P60 — Detailed Walkthrough

**When to issue:** After year-end (by mid-February) to employees employed on 31 December.

**P60 Layout:**
```
P60 — CERTIFICATE OF PAY
Tax Year 2026

Employee:     Sarah Murphy
PPS Number:   2345678S

Gross Pay:                 €32,000.00
PAYE:                      €4,200.00
PRSI (Employee):           €1,280.00
USC:                       €460.00
Total Deductions:          €5,940.00
Net Pay:                   €26,060.00
Employer PRSI:             €3,536.00

Date Issued: 31/01/2027
```

### Digital P60s

Many employers issue digital P60s (PDF via email or self-service portal). These are legally equivalent to paper.

### Common P45/P60 Errors

| Error | Who It Affects | Fix |
|-------|---------------|-----|
| Wrong PPS number | Employee cannot use for returns | Issue corrected form |
| Wrong gross pay | Next employer uses wrong data | Recalculate, reissue |
| Wrong leaving date | Wrong tax treatment | Check HR records |
| P45 not issued within 2 weeks | Revenue penalty | Issue immediately |
| P60 not issued by Feb deadline | Revenue penalty | Issue and notify Revenue |

### Practice

Employee leaves on 30 September (Week 39). Their records show:
- Cum. Gross: €31,200
- Cum. PAYE: €4,680
- Cum. PRSI: €1,248
- Cum. USC: €364

Draft their P45 figures.

---

## LO7: Revenue Returns Deep Dive

### P30 — Completed Monthly Example

**Month: January 2026 — 4 employees**

| Employee | Gross | PAYE | PRSI(EE) | PRSI(ER) | USC |
|----------|-------|------|----------|----------|-----|
| John | €3,200 | €480 | €128 | €353.60 | €16 |
| Sarah | €2,400 | €288 | €96 | €265.20 | €12 |
| Mike | €2,000 | €200 | €80 | €221.00 | €10 |
| Emma | €1,600 | €320* | €64 | €176.80 | €8 |
| **Total** | **€9,200** | **€1,288** | **€368** | **€1,016.60** | **€46** |

*Emma on emergency tax

**P30 Summary:**
| Item | Amount (€) |
|------|-----------|
| Gross Pay | 9,200.00 |
| PAYE | 1,288.00 |
| Employee PRSI | 368.00 |
| Employer PRSI | 1,016.60 |
| USC | 46.00 |
| **Total Due** | **2,718.60** |

### P35 — Annual Example

```
P35 — ANNUAL EMPLOYER RETURN
Tax Year: 2026
Employer: ABC Ltd  Reg: 12345A

TOTAL GROSS PAY:                        €380,000.00
TOTAL PAYE:                             €57,000.00
TOTAL EMPLOYEE PRSI:                    €15,200.00
TOTAL EMPLOYER PRSI:                    €41,990.00
TOTAL USC:                              €8,740.00
TOTAL DUE:                              €122,930.00

LESS PAYMENTS MADE (P30s):              €122,930.00
BALANCE:                                €0.00
```

Per-employee section:
```
John Kelly (1234567J)
  Gross: €41,600  PAYE: €6,240  PRSI: €1,664  USC: €624

Sarah Doyle (2345678S)
  Gross: €31,200  PAYE: €4,680  PRSI: €1,248  USC: €468
  (etc.)
```

### How P30 and P35 Link

```
P30 (Jan): €2,718.60 paid    P30 (Feb): €2,650.00
P30 (Mar): €2,800.00         ... (every month)
P30 (Dec): €2,900.00
                            Total P30 payments: €35,000.00

P35 filed in February:
  Total due:    €35,000.00
  Less P30s:   (€35,000.00)
  Balance:      €0.00
```

If total P30 payments = €34,800 but P35 shows €35,000 due:
- **Underpayment:** €200 — pay with P35 filing
- Interest runs from the due date of the underpaid P30

### Common P30/P35 Errors

| Error | Consequence |
|-------|-------------|
| P30 filed late | Late filing surcharge |
| Wrong gross figure | All deductions misstated |
| Missing employee in P35 | Revenue queries |
| Wrong employer PRSI | Overpayment or underpayment |

### ROS Filing Steps

1. Log into ROS with digital certificate
2. Select "Payroll Taxes"
3. Select return type (P30 or P35)
4. Upload XML file from payroll software
5. Review figures
6. Submit
7. Make payment

### Practice

Monthly P30 totals:
- Jan: €3,100  Feb: €2,950  Mar: €3,200  Apr: €3,050
- May: €3,100  Jun: €2,980  Jul: €3,150  Aug: €3,000
- Sep: €3,100  Oct: €3,050  Nov: €2,950  Dec: €3,200

Calculate total P30 payments. If P35 shows €36,800 due, is there a balance?

---

## LO8: Married Couples Assessment Deep Dive

### Scenario A: Single earner, €70,000

| | Single | Joint (Married) |
|---|--------|-----------------|
| SRCOP | €42,000 | €51,000 |
| Tax @ 20% | €8,400 | €10,200 |
| Tax @ 40% | €11,200 | €7,600 |
| Less Credits | (€1,875) | (€3,750+1,875+1,875) |
| **Total Tax** | **€17,725** | **€11,200** |

**Savings under Joint:** €6,525

### Scenario B: Significantly different incomes

Spouse 1: €65,000 | Spouse 2: €10,000 | Total: €75,000

Joint SRCOP: €51,000 + €33,000 = €84,000
Total €75,000 < €84,000, all taxed at 20%.

| Method | Tax |
|--------|-----|
| Joint | €15,000 - €7,500 = **€7,500** |
| Separate | S1: €15,950 + S2: €0 = **€15,950** |

**Savings:** €8,450

### Scenario C: Two high incomes

Spouse 1: €80,000 | Spouse 2: €70,000 | Total: €150,000

Joint SRCOP: €51,000 + €33,000 = €84,000

Joint: (84k@20% + 66k@40%) - credits = **€35,700**
Separate: S1(42k@20%+38k@40%)-3,750 + S2(42k@20%+28k@40%)-3,750 = **€35,700**

With two high earners, the difference between joint and separate narrows because the SRCOP equalisation benefit is less significant.

### Home Carer Tax Credit

| Carer's Income | Credit |
|----------------|--------|
| Up to €7,200 | Full (~€1,800) |
| €7,200 - €10,200 | Reduced |
| Over €10,200 | None |

Qualifying: caring for child under 18, dependent aged 65+, or incapacitated person.

### Practice

Calculate total tax for married couple:
- Spouse 1: €55,000  |  Spouse 2: €25,000
- One spouse earns €8,000, qualifies for home carer credit (€1,800)

Calculate Joint, Separate, and Joint + Home Carer.

---

## LO9: Legislation Impact Deep Dive

### Full Year Comparison — Detailed

**2025 vs 2026 Budget Changes**

Employee earning €35,000.

### Year 1 (2025)

| Item | Calculation | Amount |
|------|------------|--------|
| Tax @ 20% (within €40,000 SRCOP) | 35,000 x 20% | €7,000.00 |
| Less Personal Credit | | (€1,700.00) |
| Less PAYE Credit | | (€1,700.00) |
| **PAYE** | | **€3,600.00** |
| PRSI @ 4% | 35,000 x 4% | €1,400.00 |
| USC @ 0.5% (0-12,012) | 12,012 x 0.5% | €60.06 |
| USC @ 2% (12,013-22,920) | 10,908 x 2% | €218.16 |
| USC @ 4.5% (22,921-35,000) | 12,079 x 4.5% | €543.56 |
| Total USC | | **€821.78** |
| **Total Deductions** | | **€5,821.78** |
| **Net Pay** | | **€29,178.22** |

### Year 2 (2026)

| Item | Calculation | Amount |
|------|------------|--------|
| Tax @ 20% (within €42,000 SRCOP) | 35,000 x 20% | €7,000.00 |
| Less Personal Credit | | (€1,875.00) |
| Less PAYE Credit | | (€1,875.00) |
| **PAYE** | | **€3,250.00** |
| PRSI @ 4% | 35,000 x 4% | €1,400.00 |
| USC @ 0.5% (0-13,000) | 13,000 x 0.5% | €65.00 |
| USC @ 2% (13,001-25,760) | 12,760 x 2% | €255.20 |
| USC @ 4.5% (25,761-35,000) | 9,240 x 4.5% | €415.80 |
| Total USC | | **€736.00** |
| **Total Deductions** | | **€5,386.00** |
| **Net Pay** | | **€29,614.00** |

### Comparison

| | Year 1 | Year 2 | Change |
|---|--------|--------|--------|
| Gross Pay | €35,000 | €35,000 | €0 |
| PAYE | €3,600 | €3,250 | -€350 |
| PRSI | €1,400 | €1,400 | €0 |
| USC | €822 | €736 | -€86 |
| **Net Pay** | **€29,178** | **€29,614** | **+€436** |

**Analysis:** The employee is €436 better off due to:
1. Increased tax credits (+€50 each for personal and PAYE = +€100 total)
2. Wait, the credit increase saved €350 (€3,600 - €3,250). That's because personal went from €1,700 to €1,875 (+€175) and PAYE credit from €1,700 to €1,875 (+€175) = +€350 total.
3. Wider USC bands reduced USC by €86.

### Minimum Wage Impact

Minimum wage increase from €13.30 to €13.70:

| | 2025 | 2026 | Change |
|---|------|------|--------|
| Hourly | €13.30 | €13.70 | +€0.40 |
| Weekly (39 hrs) | €518.70 | €534.30 | +€15.60 |
| Annual | €26,972 | €27,784 | +€812 |
| Net pay impact | ~€22,280 | ~€22,960 | +€680 |

### How to Analyse Budget Changes: 5 Steps

1. IDENTIFY changes — rates, credits, bands that changed
2. CALCULATE old liability — previous year's figures
3. CALCULATE new liability — current year's figures
4. COMPARE difference — how much does the employee gain/lose?
5. EXPLAIN impact — which specific change caused the difference

### Practice

Compare take-home pay for employee earning €40,000:

**Year A:** SRCOP €42,000, Personal Credit €1,875, PAYE Credit €1,875,
USC: 0.5% (0-12k), 2% (12k-23k), 4.5% (23k+)

**Year B:** SRCOP €44,000, Personal Credit €2,000, PAYE Credit €2,000,
USC: 0.5% (0-13k), 2% (13k-26k), 4.5% (26k+)

---

## LO10: Reports & Backup Deep Dive

### Key Reports in Payroll Software

**1. Payroll Summary Report**
Shows each employee's gross, deductions, net, and YTD figures for the period.
Essential for: verifying the payroll run, management reporting.

**2. Payslip**
Individual employee breakdown. Must include:
- Gross pay broken down by element
- Each deduction separately (PAYE, PRSI, USC, pension, etc.)
- Net pay
- Year-to-date totals
- Employer PRSI (not deducted from employee, but shown for transparency)

**3. P30 Monthly Return**
Generated from each month's payroll data. Shows totals for Revenue.

**4. P35 Annual Return**
Generated after year-end close. Must reconcile to total P30 payments.

**5. Labour Cost Report**
Shows total cost per employee (gross + employer PRSI + pension contributions).
Essential for: budgeting, department cost analysis, pricing decisions.

### Backup Strategy for Payroll

| Backup | Frequency | Medium | Location |
|--------|-----------|--------|----------|
| Daily | Every payroll run | Cloud | Off-site |
| Weekly | Friday | External HDD | Office safe |
| Monthly | Month-end | USB | Bank safe deposit |
| Year-end | After P35 filed | DVD + Cloud | Off-site |

### Data Retention (Irish Revenue)

| Record | Retention |
|--------|-----------|
| Payroll records | 6 years after end of tax year |
| Employee details | 6 years after employment ends |
| P30/P35 records | 6 years |
| P45/P60 copies | 6 years |
| Time sheets | 6 years |

### Backup Verification Checklist

- [ ] Backup file can be opened
- [ ] File size is consistent with expected data
- [ ] Test restore works on a different computer
- [ ] Backup is date-stamped and labelled
- [ ] Off-site copy is updated
- [ ] Backup is password-protected

### Common Backup Mistakes

| Mistake | Risk |
|---------|------|
| Only one backup copy | Single point of failure |
| Same location as computer | Fire/theft destroys both |
| No verification backup is corrupt | Discovered too late when needed |
| No off-site copy | Local disaster destroys all data |
| Not testing restore | Backup may be unusable |

### Practice

Design a backup schedule for a business with 20 employees that processes payroll fortnightly. Include medium, frequency, and storage location for each backup type.
