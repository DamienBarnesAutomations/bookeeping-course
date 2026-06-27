# Learning Outcome 7 — Revenue Returns

**Objective:** Extract information from completed records to prepare all necessary end-of-period and year-end returns and tax forms for the Revenue Commissioners.

---

## Monthly and Annual Returns

### P30 — Monthly PAYE/PRSI/USC Return
Filed each month with Revenue via ROS.

**Contents:**
- Total gross pay for month
- Total PAYE deducted
- Total PRSI deducted (employee + employer)
- Total USC deducted
- Total amount payable to Revenue

**Due date:** 23rd of the following month

### P35 — Annual Employer Return
Filed once per year summarising all payroll for the tax year.

**Contents:**
- Total gross pay for all employees
- Total PAYE, PRSI, USC deducted
- Breakdown per employee
- Employer PRSI contributions
- Summary of all payments to Revenue

**Due date:** 23 February following year-end

---

## Preparing a P30 (Monthly)

### Data Required

| Item | Source |
|------|--------|
| Total gross pay (month) | Payroll summary report |
| Total PAYE deducted | Payroll summary report |
| Total employee PRSI | Payroll summary report |
| Total employer PRSI | Payroll summary report |
| Total USC deducted | Payroll summary report |
| Total LPT deducted (if applicable) | Payroll summary report |

### Completed P30 Example

```
P30 — MONTHLY PAYROLL RETURN
Month: January 2026
Return Date: 23 February 2026

Employer: ABC Ltd
Reg Number: 12345A

Monthly Totals:
  Gross Pay                    €32,000.00
  PAYE Deducted                €5,120.00
  Employee PRSI                €1,280.00
  Employer PRSI                €3,536.00
  USC Deducted                 €680.00
                               ----------
  Total Payable to Revenue     €10,616.00
```

---

## Preparing a P35 (Annual)

### Data Required

| Item | Source |
|------|--------|
| Per-employee pay totals | Annual payroll summary |
| Per-employee deductions | Annual payroll summary |
| Employer PRSI totals | Payroll reports |
| Total payments to Revenue | P30 records / bank records |
| Period covered | Tax year |

### P35 Summary Section

```
P35 — ANNUAL EMPLOYER RETURN
Tax Year: 2026
Employer: ABC Ltd
Reg Number: 12345A

Summary:
Total Employees:         8
Total Gross Pay:        €384,000.00
Total PAYE:             €61,440.00
Total Employee PRSI:    €15,360.00
Total Employer PRSI:    €42,432.00
Total USC:              €8,160.00
Total LPT:              €0.00
                        ----------
Total Due:              €127,392.00

Less Payments Made (via P30):  €127,392.00
Balance Owing/(Refund):        €0.00
```

### Per-Employee Section

```
Employee 1: John Murphy
  PPS: 1234567J
  Gross Pay:          €42,000.00
  PAYE:               €6,140.00
  PRSI (EE):          €1,680.00
  PRSI (ER):          €4,641.00
  USC:                €1,130.00

Employee 2: Mary Murphy
  ... (similar layout for each employee)
```

---

## Revenue Online Service (ROS)

### Filing Process

1. **Log in** to ROS
2. Select **Payroll Taxes**
3. Upload or enter P30/P35 data
4. Review and submit
5. Pay any balance due

### Payment Methods
- **Direct Debit** (mandated)
- **Online Payment** (debit/credit card)
- **Electronic Funds Transfer** (EFT)

### Deadlines
| Return | Deadline | Frequency |
|--------|----------|-----------|
| P30 | 23rd of next month | Monthly/Quarterly |
| P35 | 23 February | Annual |
| Payment | Same as return due date | — |

---

## Computerised Preparation

Most payroll software:
1. Tracks monthly totals automatically
2. Generates P30 with one click
3. Generates P35 after year-end close
4. Exports data in ROS-compatible XML format
5. May submit directly to ROS (integrated software)

### Software to ROS Workflow

```
Payroll Software → Generate P30/P35 → Export XML
                                          ↓
                                    ROS Import
                                          ↓
                                    Review & Submit
                                          ↓
                                    Payment via ROS
```

---

## Penalties for Late Filing

| Return | Late Penalty |
|--------|-------------|
| P30 (monthly) | Interest on late payments + surcharges |
| P35 (annual) | 5% surcharge (up to €12,695) |
| Payment overdue | Interest charged from due date |

---

## Reconciliation

After filing P35:
1. Compare total PAYE/PRSI/USC paid via P30s against P35 total
2. Reconcile to zero — any difference is overpayment/underpayment
3. Request refund if overpaid, or pay difference if underpaid

| | Total Paid (P30s) | Total Due (P35) | Difference |
|---|---|---|---|
| PAYE | €61,440 | €61,440 | €0 |
| PRSI | €57,792 | €57,792 | €0 |
| USC | €8,160 | €8,160 | €0 |


---

## Worked Examples & Deep Dive

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
