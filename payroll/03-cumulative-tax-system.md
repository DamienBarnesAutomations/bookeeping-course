# Learning Outcome 3 — Cumulative Tax System

**Objective:** Process the payroll for employee(s), using manual and computerised systems, under the cumulative tax system, including various elements of gross pay, holidays, unpaid leave, cut-off points, credits, and all statutory and non-statutory deductions.

---

## How the Cumulative System Works

Under the cumulative system, each pay period's tax is based on **cumulative earnings to date** in the tax year.

### Formula (Each Pay Period)

```
Cumulative Gross Pay to Date × Tax Rate = Cumulative Tax
Cumulative Tax − Tax Paid in Previous Periods = Tax Due This Period
```

### Advantages
- Overpayments and underpayments even out across the year
- Tax credits and cut-off are spread across the year
- Changes in employment mid-year are handled smoothly

---

## Sample Payroll Calculation

### Employee Details
- **Name**: John Murphy, **PPS**: 1234567A
- **Gross Pay**: €800 per week
- **Tax Credits**: €3,750 p.a. (€72.12 per week)
- **Standard Rate Cut-Off**: €42,000 p.a. (€807.69 per week)
- **PRSI**: 4% (employee)
- **USC**: 0.5% on first €12,012, then 2% etc.

### Week 1 Payroll

| Calculation | Amount |
|-------------|--------|
| Gross Pay | €800.00 |
| Cumulative Gross to Date | €800.00 |
| Tax @ 20% (on €800) | €160.00 |
| Less Weekly Tax Credit | (€72.12) |
| **PAYE Due** | **€87.88** |
| PRSI @ 4% | €32.00 |
| USC (€800 × 0.5%) | €4.00 |
| **Total Deductions** | **€123.88** |
| **Net Pay** | **€676.12** |

### Week 2 Payroll

| Calculation | Amount |
|-------------|--------|
| Gross Pay (Week 2) | €800.00 |
| Cumulative Gross (Weeks 1-2) | €1,600.00 |
| Tax @ 20% on €1,600 | €320.00 |
| Less Cumulative Tax Credit (€72.12 × 2) | (€144.24) |
| Cumulative PAYE Due | €175.76 |
| Less PAYE Paid Week 1 | (€87.88) |
| **PAYE Due Week 2** | **€87.88** |
| PRSI Week 2 | €32.00 |
| USC Week 2 | €4.00 |
| **Net Pay Week 2** | **€676.12** |

---

## Elements of Gross Pay

| Element | Description | Taxable? |
|---------|-------------|----------|
| Basic Pay | Contracted hours | Yes |
| Overtime | Hours above normal | Yes |
| Shift Premium | Extra for shift work | Yes |
| Bonus | Performance payment | Yes |
| Commission | Sales-based payment | Yes |
| **Holiday Pay** | Paid annual leave | Yes |
| Sick Pay | Company sick benefit | Yes (after certain period) |
| Benefit-in-Kind (BIK) | Car, health insurance | Yes |

### Holiday Pay Calculation
```
Holiday Pay = Normal Weekly Pay × (AL Entitlement / 52 weeks)
```
For an employee earning €800/week with 20 days AL:
- Holiday pay per day = €800 / 5 = €160
- If employee takes 1 week holiday: Holiday Pay = €800

### Unpaid Leave
When an employee takes unpaid leave:
- Gross pay is reduced
- Tax credits and cut-off are still allocated on a cumulative basis
- Less tax may be deducted in the period due to reduced cumulative earnings

---

## Statutory Deductions

### PAYE (Income Tax)
| Band | Rate | 2025 Approx Cut-Off |
|------|------|---------------------|
| Standard | 20% | First €42,000 (single) |
| Higher | 40% | Above €42,000 |

### PRSI (Pay Related Social Insurance)
| Type | Employee Rate | Employer Rate |
|------|--------------|--------------|
| Class A (most employees) | 4% | 11.05% |
| Subclass (lower earnings) | 0% | 8.5% |

**PRSI exemption**: Earnings below €352 per week (Class A)

### USC (Universal Social Charge)
| Income Band | Rate |
|-------------|------|
| Up to €12,012 | 0.5% |
| €12,013 - €25,760 | 2% |
| €25,761 - €70,044 | 4.5% |
| €70,045+ | 8% |

### Non-Statutory Deductions
| Deduction | Treatment |
|-----------|-----------|
| Pension (employee) | Deducted after tax (relief at source) |
| Union Dues | Deducted from net pay |
| Health Insurance | Deducted from net pay |
| Court Orders | Deducted from net pay |
| AVCs (Additional Voluntary Contributions) | Deducted after tax |

---

## Computerised Processing

1. Enter employee details: PPS, tax credits, cut-off, PRSI class
2. Revenue uploads tax credit certificate (TCC) via RPN (Revenue Payroll Notification)
3. Enter hours/amounts for each pay element
4. Software calculates PAYE/PRSI/USC automatically
5. Generates payslip and payroll summary
6. Processes payment (bank file or cheque)


---

## Worked Examples & Deep Dive

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
