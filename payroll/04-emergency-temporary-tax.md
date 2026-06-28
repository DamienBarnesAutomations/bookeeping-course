# Learning Outcome 4 — Emergency & Temporary Tax

**Objective:** Process the payroll for employee(s), under the emergency and temporary tax systems and subsequent transfer to the cumulative tax system.

---

## When Emergency Tax Applies

Emergency tax is used when the employer does not have the employee's tax credit certificate (TCC). This happens when:

1. New employee starts without a PPS number or Revenue Payroll Notification (RPN)
2. Employee does not provide Revenue payroll notification (RPN)
3. Employee has been on Week 1/Month 1 basis and hasn't updated details
4. No record of employment exists on Revenue's system

---

## Emergency Tax Rates

| Period | Rate | Tax Credits |
|--------|------|------------|
| Week 1 | 40% (no credits) | €0 |
| Week 2 onwards (if no RPN) | 40% (no credits) | €0 |
| Week 5+ (if still no PPS provided) | 40% (no credits) | €0 |

### Emergency Basis (Week 1/Month 1)
- Tax is calculated on each period **in isolation**
- **No cumulative basis** — each week/month stands alone
- Tax credits are **not applied**
- Results in higher tax deduction

### Example: Emergency Tax (Week 1)

| | Cumulative (Normal) | Emergency (Week 1) |
|---|---|---|
| Gross Pay | €800 | €800 |
| Tax @ 20% (first €807.69) | €160 | €0 |
| Tax @ 40% | €0 | €320 |
| Tax Credit | (€72.12) | €0 |
| **PAYE Due** | **€87.88** | **€320.00** |

The employee pays significantly more tax under emergency basis.

---

## Temporary Tax System (Week 1 / Month 1)

### Week 1 Basis
Each week is treated separately for tax calculations. No cumulative carry-over.

**Formula (each week):**
```
Tax = (Current Week Gross × 40%) − (Weekly Tax Credit)
```

If weekly gross = €800, tax = €320 − €0 = €320 (if no RPN yet)

### Month 1 Basis
Same as Week 1 but calculated monthly instead.

---

## Transferring Back to Cumulative

### Step 1: Employee provides details
Employee gives:
- PPS number

The employer then fetches the Revenue Payroll Notification (RPN) from Revenue via ROS or payroll software. Under PAYE Modernisation (2019), the old P45 leaver form is no longer issued; prior employment data comes directly from Revenue.

### Step 2: Update payroll
1. Enter PPS number and RPN in software
2. System applies correct tax credits and cut-off point
3. Switch from Week 1/Month 1 to Cumulative

### Step 3: Processing the change

**Scenario**: Employee was on emergency tax for Weeks 1-3. In Week 4, RPN arrives.

- **Weeks 1-3**: Already paid at emergency rate (overpaid tax)
- **Week 4 onwards**: Cumulative system applied
- **Refund via payroll**: The cumulative system automatically refunds overpaid tax by applying unused credits from earlier weeks

### Example: Transfer at Week 4

| | Week 1 | Week 2 | Week 3 | Week 4 |
|---|---|---|---|---|
| Gross | €800 | €800 | €800 | €800 |
| Cum. Gross | €800 | €1,600 | €2,400 | €3,200 |
| Cum. Tax @ 20% | — | — | — | €640.00 |
| Cum. Credits (€72.12 × 4) | — | — | — | (€288.48) |
| Cum. PAYE Due | — | — | — | €351.52 |
| PAYE Already Paid | €320 | €320 | €320 | €960.00 |
| **PAYE This Week** | €320 | €320 | €320 | **(€608.48)** |

In Week 4, the employee gets a **negative PAYE** (refund) of €608.48 to compensate for the overpaid €960 in weeks 1-3, meaning a net refund is applied.

---

## Computerised Handling

In any payroll software:
1. New employee entered without RPN → **automatically set to Emergency**
2. Employee provides PPS → enter PPS in system
3. Fetch RPN from Revenue (if software is connected)
4. Software recalculates and **automatically switches to Cumulative**
5. Refund is computed and applied in the next payroll run

---

## Avoiding Emergency Tax

- Employees should provide their PPS number on day one; the employer then fetches the RPN from Revenue
- Employers should register new employees with Revenue immediately
- Employees should check their RPN via Revenue's myAccount

| Action | Who | When |
|--------|-----|------|
| Provide PPS number | Employee | Day 1 |
| Register new employee with Revenue via ROS | Employer | Before first pay |
| Fetch RPN from Revenue in payroll software | Employer | Before first pay |
| Check RPN in software for each employee | Employer | Before each payroll run |


---

## Worked Examples & Deep Dive

### When Does Emergency Tax End?

Emergency tax continues until the employee provides:
1. Their PPS number AND
2. Revenue sends their RPN to the employer

If the employee has a PPS number but no RPN:
- Employer should request the RPN via ROS
- If still not received, emergency tax continues

### The Emergency Tax Rule

| Period | Rate |
|--------|------|
| Weeks 1 onwards (no RPN) | 40% with no credits |

Emergency tax at 40% continues until the employer receives the employee's RPN from Revenue. There is no higher "50%" rate in the current PAYE system.

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
3. Employer recovers the overpaid tax from Revenue through P30 submissions

### Common Exam Question

Q: An employee has been on emergency tax for 3 weeks. Her RPN arrives in Week 4. Explain the refund.

A: Under the cumulative system, the software calculates total tax due on cumulative earnings to Week 4 using her actual credits and SRCOP. It subtracts tax already paid under emergency. If cumulative tax due is less than what was paid, the difference is refunded as negative PAYE in Week 4.
