# Learning Outcome 6 — Year-End Forms for Employees

**Objective:** Extract information from completed records to prepare all necessary mid-year and year-end tax forms for employees.

---

## Key Employee Forms

### P45 — Leaver Process (PAYE Modernisation 2019)

> **PAYE Modernisation (effective 1 January 2019):** The traditional paper P45 (Copies A/B/C) was abolished. The leaver process is now fully electronic.

**When an employee leaves:**
1. Employer records the leaving date in payroll software
2. A final payroll submission (including the leaving date) is sent to Revenue via ROS on or before the last pay date
3. Revenue updates the employee's record automatically

**Employee access:** The employee can log in to Revenue's **myAccount** to view their pay and tax details for the year.

**New employer:** Instead of receiving a paper P45 from the employee, the new employer fetches a **Revenue Payroll Notification (RPN)** electronically from Revenue. The RPN contains the cumulative pay and tax figures from all employment in the current year, enabling the cumulative tax calculation to continue correctly.

**What the old P45 contained (for exam reference):**
- Employee name and PPS number
- Date of leaving
- Gross pay to date in current employment
- Tax deducted to date
- Cumulative basis indicator

### P60 — Annual Certificate
Issued **after year-end** (January) to all employees employed on 31 December.

**Contents:**
- Gross pay for the full tax year
- Total PAYE deducted
- Total PRSI deducted
- Total USC deducted
- Employer's details
- Employee's PPS number

**Deadline:** Give to employee by **mid-February** following tax year.

---

## Processing a Leaver (Under PAYE Modernisation)

### Data Required

| Data Point | Source |
|-----------|--------|
| Gross pay to date | Payroll summary (cumulative) |
| Tax deducted to date | Payroll summary (cumulative) |
| PRSI deducted to date | Payroll summary |
| USC deducted to date | Payroll summary |
| Date of leaving | HR records |
| Basis of taxation | Employee's tax basis (Cumulative or Week 1) |

### What Happens in the Software

1. Select the employee → mark as leaver → enter leaving date
2. Process the final payroll run as normal
3. Software includes leaving date in the payroll submission sent to Revenue via ROS
4. Revenue notifies the employee via myAccount; new employer fetches RPN

### Leaver Record (replaces old P45)

```
PAYROLL LEAVER RECORD — submitted to Revenue via ROS

Employee Name:       Mary Murphy
PPS Number:          1234567M
Date of Leaving:     30 June 2026

Income Tax Details (Year to Date):
Gross Pay to Date:   €18,000.00
Tax Deducted:        €2,180.00
PRSI Deducted:       €720.00
USC Deducted:        €210.00

Tax Basis:           Cumulative
Employer Reg No:     12345A
```

---

## Preparing a P60 (Year-End)

### Data Required

| Data Point | Source |
|-----------|--------|
| Total gross pay for year | Payroll annual summary |
| Total PAYE deducted | Payroll annual summary |
| Total PRSI deducted | Payroll annual summary |
| Total USC deducted | Payroll annual summary |
| Dates employed | HR records |
| Employer details | Company records |

### Completed P60 Example

```
P60 — ANNUAL CERTIFICATE OF PAY, TAX, PRSI, USC

Tax Year: 2026

Employee:             John Murphy
PPS Number:           7654321J

Pay and Deductions:
Gross Pay:            €28,000.00
PAYE Deducted:        €4,120.00
PRSI Deducted:        €1,120.00
USC Deducted:         €480.00

Total Net Pay:        €22,280.00

Employer:             ABC Ltd
Employer Reg:         12345A

Date Issued:          31 January 2027
```

---

## Leaver Process Lifecycle (PAYE Modernisation)

```
Employee Leaves → Enter leaving date in payroll software
                         ↓
              Process final payroll run
                         ↓
              Payroll submission (with leaving date) → ROS → Revenue
                         ↓
              Employee views record via myAccount
                         ↓
              New employer fetches RPN from Revenue
```

---

## Computerised Generation

In payroll software:
1. **Leaver** — Select employee → Leaver option → Set leaving date → Process payroll → Submit to ROS
2. **P60** — End of year → Run P60 report → Print/email to all employees

P60 can be:
- Printed on official stationery
- Emailed as PDF (Revenue accepts digital)

---

## Common Errors

| Error | Consequence |
|-------|-------------|
| Wrong PPS number | Employee can't access records |
| Incorrect gross pay | Tax calculation error for new employer |
| Wrong leaving date | Wrong RPN for new employer |
| P60 not issued by deadline | Revenue penalty risk |
| Incorrect tax basis submitted to Revenue | New employer's RPN may carry wrong basis |


---

## Worked Examples & Deep Dive

### Leaver Process — Detailed Walkthrough (PAYE Modernisation)

**When it applies:** Employee leaves, dies, or reaches State Pension age.

**Steps in payroll software:**

1. Select the employee → choose "Leaver" or "Cessation"
2. Enter the date of leaving
3. Process any final payments (salary, holiday pay, etc.)
4. Process the payroll run — software includes leaving date in the submission to Revenue
5. Revenue updates the employee's record; employee sees it in myAccount
6. New employer fetches RPN from Revenue — it includes the cumulative pay/tax from all jobs

**Leaver submission data sent to Revenue:**
```
PAYROLL LEAVER SUBMISSION — via ROS
Employee Name:     Thomas Murphy
PPS Number:        1234567T
Date of Leaving:   30/06/2026
Tax Basis:         Cumulative

INCOME TAX DETAILS (Year to Date)
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

### Common Leaver/P60 Errors

| Error | Who It Affects | Fix |
|-------|---------------|-----|
| Wrong PPS number submitted | Employee's Revenue record is incorrect | Submit correction via ROS |
| Wrong gross pay submitted | New employer's RPN carries wrong cumulative figures | Submit amended payroll submission |
| Wrong leaving date | Wrong tax treatment | Submit correction to Revenue |
| Leaving not notified to Revenue | Employee taxed on emergency basis at new employer | Submit the payroll submission immediately |
| P60 not issued by 15 Feb deadline | Revenue penalty risk | Issue and notify Revenue |

### Practice

Employee leaves on 30 September (Week 39). Their records show:
- Cum. Gross: €31,200
- Cum. PAYE: €4,680
- Cum. PRSI: €1,248
- Cum. USC: €364

What figures would be submitted to Revenue in the leaver payroll submission?
