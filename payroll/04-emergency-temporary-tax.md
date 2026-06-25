# Learning Outcome 4 — Emergency & Temporary Tax

**Objective:** Process the payroll for employee(s), under the emergency and temporary tax systems and subsequent transfer to the cumulative tax system.

---

## When Emergency Tax Applies

Emergency tax is used when the employer does not have the employee's tax credit certificate (TCC). This happens when:

1. New employee starts without a PPS number or P45
2. Employee does not provide Revenue payroll notification (RPN)
3. Employee has been on Week 1/Month 1 basis and hasn't updated details
4. No record of employment exists on Revenue's system

---

## Emergency Tax Rates

| Period | Rate | Tax Credits |
|--------|------|------------|
| Week 1 | 40% (no credits) | €0 |
| Week 2 onwards (if no RPN) | 40% (no credits) | €0 |
| After 4 weeks (if no PPS) | 50% (if no PPS provided within 4 weeks) | €0 |

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
- P45 from previous employer
- Revenue Payroll Notification (RPN)

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

- Employees should provide PPS number and P45 on day one
- Employers should register new employees with Revenue immediately
- Employees should check their RPN via Revenue's myAccount

| Action | Who | When |
|--------|-----|------|
| Provide PPS number | Employee | Day 1 |
| Provide P45 | Employee | Day 1 |
| Submit new employee to Revenue | Employer | Before first pay |
| Check RPN in software | Employer | Before each payroll run |
