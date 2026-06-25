# Software Guide — Thesaurus Payroll / Sage Payroll

> Note: Exact menu names vary by version. These instructions apply generally to **Thesaurus Payroll** and **Sage Payroll**.

---

## 1. Setting Up a New Company

### Thesaurus Payroll
1. File → New Company
2. Enter: Company name, Address, Employer Registered Number
3. Set Tax Year (e.g., 2026)
4. Select payroll frequency (Weekly / Fortnightly / Monthly)
5. Set PRSI Class defaults

### Sage Payroll
1. File → New Company
2. Enter company details and tax year
3. Choose pay period frequency
4. Set up bank details for BACS / electronic payment

---

## 2. Adding Employees

### Thesaurus Payroll
1. Employees → New Employee
2. Enter:
   - Name, Address, PPS Number
   - Date of Birth, Start Date
   - Pay Rate (Annual / Hourly / Weekly)
   - Tax Credits and SRCOP (from RPN)
   - PRSI Class (usually A)
3. Revenue Payroll Notification (RPN): **Employees → Import RPN** (or enter manually)

### Sage Payroll
1. Employees → Add Employee
2. Enter personal details, PPS number
3. Enter pay details (salary/hourly rate)
4. Enter tax details from RPN
5. Set PRSI class and USC settings

---

## 3. Importing RPN (Revenue Payroll Notification)

RPNs are provided by Revenue automatically when you register a new employee.

### Thesaurus Payroll
1. Revenue → Get RPN (requires ROS login configured)
2. Select the employee
3. Download and apply the RPN
4. System updates: Tax Credits, SRCOP, PRSI class, USC basis

### Sage Payroll
1. Revenue Commissions → Get RPN
2. Select employee(s)
3. Apply changes

### Manual Entry (if RPN not available)
Enter tax credits and SRCOP manually from:
- P45 (from previous employer)
- Revenue myAccount statement
- Revenue correspondence

---

## 4. Processing Payroll

### Thesaurus Payroll
1. Payroll → New Payroll Run
2. Select pay period (Week 1, Month 1, etc.)
3. For each employee, enter:
   - Basic hours / amount
   - Overtime hours + rate
   - Bonuses / commissions
   - Holiday pay days
   - Sick pay days
   - Unpaid leave days
4. Click **Calculate** — software computes PAYE, PRSI, USC
5. Review each payslip
6. Click **Post / Finalise** — commits payroll to records

### Sage Payroll
1. Payroll → Process Payroll
2. Select pay date and period
3. Enter the following for each employee:
   - Basic pay (or hours × rate)
   - Overtime, bonuses, commissions
   - Absences (holiday, sick, unpaid leave)
4. Calculate
5. Review deductions
6. Accept and post

---

## 5. Handling Emergency Tax

### Thesaurus Payroll
When an employee has no RPN:
1. Enter the employee without tax details
2. Software automatically applies **Emergency Tax**:
   - 40% tax rate, no credits applied
   - PRSI and USC calculated normally
3. When RPN arrives:
   - Import RPN
   - Software **automatically switches to Cumulative**
   - Refund calculated in next pay period

### Sage Payroll
1. Set tax basis to **Week 1** (emergency)
2. Enter zero for tax credits
3. Software applies 40% rate
4. When RPN arrives, change basis to **Cumulative**
5. System recalculates and applies refund

---

## 6. Handling Starters and Leavers

### Starters
Thesaurus: Enter start date → system allocates credits proportionally
Sage: Enter start date → date-based credit allocation

### Leavers (P45)
**Thesaurus:**
1. Employees → Leaver
2. Select employee and leaving date
3. Run final payroll
4. Generate P45:
   - Copy A (to Revenue)
   - Copy B (to employee for next employer)
   - Copy C (employee copy)

**Sage:**
1. Employees → Leaving Details
2. Enter leaving date and reason
3. Payroll → P45 → Generate

---

## 7. Payslips

### Thesaurus Payroll
1. Reports → Payslips
2. Select employee(s) and period
3. Preview → Print / Email / Export as PDF

### Sage Payroll
1. Reports → Employee → Payslip
2. Select employee and pay date
3. Print or email

---

## 8. Revenue Returns

### P30 (Monthly)
**Thesaurus:**
1. Revenue → P30
2. Select month
3. Review totals: Gross, PAYE, PRSI (EE+ER), USC
4. Print summary
5. Export for ROS submission

**Sage:**
1. Returns → P30
2. Generate report
3. Export to ROS or print

### P35 (Annual)
**Thesaurus:**
1. Revenue → P35
2. Select tax year
3. Generate
4. Review per-employee breakdown
5. Export XML for ROS submission

**Sage:**
1. Returns → End of Year → P35
2. Generate and review
3. Submit via ROS

---

## 9. Backing Up

### Thesaurus Payroll
1. File → Backup
2. Select destination: USB / Cloud / Network
3. Name the file: `[Company]_Payroll_Backup_[Date]`
4. Verify file was created

### Sage Payroll
1. File → Backup
2. Choose location
3. Confirm backup

---

## 10. Common Payroll Scenarios

| Scenario | Steps |
|----------|-------|
| Employee starts mid-week | Enter start date → system calculates pro-rata pay |
| Employee goes on unpaid leave | Enter unpaid leave days → gross pay reduced → tax credits still accumulate |
| Bonus payment | Enter bonus as separate pay element → fully taxable |
| Overtime | Enter overtime hours with rate multiplier (1.5x, 2x) |
| Holiday pay | Enter holiday days taken → paid at normal rate |
| Emergency to cumulative switch | Import RPN → system recalculates → refund in next pay |
| Employee overpaid | Contact Revenue for guidance; process negative pay adjustment |
