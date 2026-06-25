# Learning Outcome 10 — Payroll Reports & Backup

**Objective:** Print a selection of reports after backing up computerised data on a suitable medium.

---

## Key Payroll Reports

### 1. Payroll Summary Report
Shows total gross pay, deductions, and net pay for all employees in a pay period.

```
PAYROLL SUMMARY — Week Ending 31/01/2026

Employee       Gross     PAYE     PRSI     USC     Pension    Net Pay
John Murphy    800.00   87.88    32.00    4.00     40.00      636.12
Mary Murphy    800.00   87.88    32.00    4.00      0.00      676.12
...

Totals:       €16,400  €1,757  €640     €80      €400      €13,523
```

### 2. Payslip (Individual Employee)

```
PAYSLIP — John Murphy
Period: Month 1, 2026

Gross Pay
  Basic Pay                        €2,800.00
  Overtime                         €200.00
  Total Gross                      €3,000.00

Deductions
  PAYE                             €330.00
  PRSI                             €120.00
  USC                              €45.00
  Pension                           €150.00
  Total Deductions                  €645.00

Net Pay                           €2,355.00

Year to Date
  Gross                            €3,000.00
  PAYE                             €330.00
  PRSI                             €120.00
  USC                              €45.00
```

### 3. P30 (Monthly Return)
Already covered in Outcome 7 — summary of monthly payroll taxes.

### 4. P35 Annual Return
Already covered in Outcome 7 — annual summary of all payroll.

### 5. P45 / P60
Already covered in Outcome 6 — employee-specific year-end forms.

### 6. Labour Cost Report

```
LABOUR COST ANALYSIS — January 2026

Department     Gross     Employer PRSI   Total Cost
Sales          €20,000     €2,210        €22,210
Admin          €12,000     €1,326        €13,326
Warehouse      €8,000      €884          €8,884
              --------    -------       --------
Total          €40,000     €4,420        €44,420
```

### 7. Employee Register
Full list of all current employees with PPS numbers, start dates, pay rates.

### 8. Audit Trail Report

```
AUDIT TRAIL — January 2026

Date       User     Action               Employee      Old Value   New Value
05/01/26   Admin    New Employee         John Murphy   —           €800 pw
10/01/26   Admin    Edit Pay Rate        Jane Doe      €700        €750 pw
15/01/26   Admin    Process Payroll      All           —           Period 1
20/01/26   Admin    P45 Issued           Tom Smith     Active      Left 20/01
```

---

## Report Selection by Purpose

| Purpose | Reports |
|---------|---------|
| Daily/Weekly payroll run | Payroll Summary, Payslips |
| Monthly compliance | P30, Bank Payment File |
| Cost management | Labour Cost Report, Department Analysis |
| Year-end | P35, P60, Annual Summary |
| Audit | Audit Trail, Backups, Changes Log |
| Employee management | Employee Register, Hours Worked |

---

## Backing Up Payroll Data

### Why Backup?

| Reason | Detail |
|--------|--------|
| Compliance | Revenue requires 6+ years of records |
| Employee rights | Employees may query past payslips |
| Data recovery | System failure, ransomware, theft |
| Audit | Revenue audit requires complete records |
| Business continuity | Payroll must run regardless of circumstances |

### Backup Methods

| Method | Medium | Frequency | Suitability |
|--------|--------|-----------|-------------|
| Cloud Backup | Online | Automatic (daily/real-time) | Best — off-site, automatic |
| External Hard Drive | USB/HDD | Weekly | Good — portable, large capacity |
| Network Server | Local server | Daily | Good — centralised |
| USB Key | Flash drive | Per pay period | OK — small, but easily lost |
| CD/DVD | Optical | Monthly | Poor — small, slow, unreliable |

### 3-2-1 Rule
- **3** copies of data
- **2** different types of media
- **1** copy stored off-site

---

## Backup Procedure

### Step 1: Backup Payroll Database
```
Payroll Software → File → Backup
Choose Destination: External Drive / Cloud / Network
```

### Step 2: Export Payroll Reports (PDF)
Export/print the following to PDF as a permanent record:
- Payroll summary (each pay period)
- P30 (each month)
- P35 (year-end)
- Employee register (current)

### Step 3: Verify Backup
- Check file size matches expected range
- Try to open the backup file on a different computer
- Confirm cloud backup sync is complete

### Step 4: Label Backup
```
[Company] — Payroll Backup — [Date Range]
ABC Ltd — Payroll Backup — Jan-Dec 2026
```

### Step 5: Store Securely
- Cloud: password-protected, encrypted
- Physical: fireproof safe, locked cabinet
- Off-site: separate location from office

### Step 6: Document Backup Log

```
BACKUP LOG — 2026

Date       Type     Location         Verified   By
05/01/26   Weekly   Cloud + HDD       Yes       Admin
12/01/26   Weekly   Cloud + HDD       Yes       Admin
31/01/26   Monthly  Cloud + HDD + USB Yes       Admin
```

---

## Payroll Backup Checklist (Each Pay Period)

| Action | Done |
|--------|------|
| Payroll reports printed/saved as PDF | |
| Software backup created | |
| Backup saved to cloud | |
| Backup saved to external device | |
| Backup verified (file opened, size checked) | |
| Backup logged and labelled | |
| Physical media stored securely | |
| Off-site copy updated (e.g., weekly) | |

---

## Data Retention (Irish Revenue)

| Record | Retention Period |
|--------|-----------------|
| Payroll records | 6 years after end of tax year |
| Employee details | 6 years after employment ends |
| P30/P35 records | 6 years |
| P45/P60 copies | 6 years |
| Time sheets/attendance | 6 years |
| Backups | Until overwritten by next year's data |

---

## Consequences of Data Loss

| Scenario | Impact |
|----------|--------|
| Lost payroll data before P35 | Cannot file annual return |
| Lost backup | Revenue penalties for non-compliance |
| Employee dispute | Cannot prove payments made |
| Revenue audit | Cannot provide records → penalties |
| GDPR breach | Employee data compromised |
