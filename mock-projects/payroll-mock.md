# Mock Project — Payroll (5N1546)

## Business: TechSales Ltd

TechSales Ltd has 4 employees. They process payroll weekly. The tax year is 2026.

### Employee Details

| Employee | PPS No. | Annual Gross | Pay Frequency | Tax Credits (Annual) | SRCOP (Annual) | PRSI Class | Start Date |
|----------|---------|-------------|---------------|---------------------|----------------|------------|------------|
| John Kelly | 1234567J | €41,600 (€800/wk) | Weekly | €3,750 | €42,000 | A | 1 Jan (existing) |
| Sarah Doyle | 2345678S | €31,200 (€600/wk) | Weekly | €3,750 | €42,000 | A | 1 Jan (existing) |
| Mike Byrne | 3456789B | €26,000 (€500/wk) | Weekly | €3,750 | €42,000 | A | 1 Jan (existing) |
| Emma Walsh | 4567890W | €20,800 (€400/wk) | Weekly | €3,750 | €42,000 | A | **20 Jan (Week 4)** |

### Week 4 (20-24 January) — Transactions

| Employee | Basic Hours | Overtime Hrs (x1.5) | Bonus | Notes |
|----------|------------|---------------------|-------|-------|
| John Kelly | 40 hrs | 5 hrs | €0 | — |
| Sarah Doyle | 40 hrs | 0 hrs | €100 | — |
| Mike Byrne | 40 hrs | 8 hrs | €0 | — |
| Emma Walsh | 40 hrs | 0 hrs | €0 | **Starts 20 Jan — has PPS but no RPN yet** |

### Week 6 (3-7 February) — Transactions

| Employee | Basic Hours | Overtime Hrs (x1.5) | Bonus | Notes |
|----------|------------|---------------------|-------|-------|
| John Kelly | 40 hrs | 3 hrs | €0 | — |
| Sarah Doyle | 35 hrs | 0 hrs | €0 | **5 hrs unpaid leave** |
| Mike Byrne | 40 hrs | 0 hrs | €200 commission | — |
| Emma Walsh | 40 hrs | 2 hrs | €0 | **RPN now received — switch to cumulative** |

### Week 12 (17-21 March) — Transactions

| Employee | Basic Hours | Overtime Hrs (x1.5) | Bonus | Notes |
|----------|------------|---------------------|-------|-------|
| John Kelly | 40 hrs | 0 hrs | €500 | — |
| Sarah Doyle | 40 hrs | 4 hrs | €0 | — |
| Mike Byrne | 40 hrs | 0 hrs | €0 | — |
| Emma Walsh | 40 hrs | 0 hrs | €0 | — |

---

## Tasks

### Part A: Manual Calculations (50 marks)

1. **Calculate gross pay for each employee for Weeks 4, 6, and 12**
   - Basic pay: weekly salary ÷ 5 × days worked (or weekly salary for full weeks)
   - Overtime: basic hourly rate × 1.5 × overtime hours
   - Holiday pay: if applicable

2. **Calculate PAYE using cumulative system for each employee each week**
   - For Emma Walsh (Week 4): Use emergency tax (Week 1 basis, 40%, no credits)
   - For Emma Walsh (Week 6): Switch to cumulative with catch-up refund

3. **Calculate PRSI**
   - Employee @ 4% (earnings above €352/week)
   - Employer @ 11.05%

4. **Calculate USC**
   - 0.5% on first €12,012 p.a. (€230.77/week)

5. **Complete payroll summary for each week showing:**
   - Gross, PAYE, PRSI (EE), USC, Total Deductions, Net Pay
   - Employer PRSI

### Part B: Mid-Year Changes (15 marks)

6. **Mike Byrne leaves in Week 14** (after Week 12 above).
   - Calculate his cumulative pay and tax to date
   - Prepare his P45

7. **Emma Walsh — emergency to cumulative transition**
   - Show the catch-up calculation in Week 6
   - Explain the refund mechanism

### Part C: Computerised (25 marks)

8. Set up TechSales Ltd in your payroll software
9. Enter all 4 employees with correct tax details
10. Process payroll for Weeks 1-3 (to establish cumulative totals)
11. Process Week 4
12. Process Week 6 (including Emma's switch to cumulative)
13. Generate payslips for Week 6
14. Generate P30 return for the month ending Week 4
15. Backup data

### Part D: Reporting (10 marks)

16. Generate audit trail report
17. Print payroll summary for Week 6
18. Explain the impact of Sarah's unpaid leave on her tax in Week 6
