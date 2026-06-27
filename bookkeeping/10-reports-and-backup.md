# Learning Outcome 10 — Reports & Backup

**Objective:** Print a selection of reports after backing up computerised data on a suitable medium.

---

## Key Reports in Computerised Bookkeeping

### 1. Trial Balance
- Lists all accounts with debit/credit balances
- Used as foundation for financial statements
- **Print as of:** period end date

### 2. Profit and Loss Account (Income Statement)
- Shows income and expenses over a period
- Reveals net profit or loss
- **Print for:** monthly, quarterly, annually

### 3. Balance Sheet
- Shows assets, liabilities, and capital at a point in time
- Must balance: Assets = Liabilities + Capital
- **Print as of:** period end date

### 4. Aged Debtors Report
- Lists customers and how long they've owed money
- 0-30 days, 31-60 days, 61-90 days, 90+ days
- Critical for cash flow management

### 5. Aged Creditors Report
- Lists suppliers and how long they've been owed
- Same aging categories as debtors

### 6. VAT Report
- Summary of output vs input VAT
- Can be exported for ROS submission

### 7. Daybook / Journal Reports
- Sales Day Book, Purchases Day Book, General Journal
- Shows all transactions posted in a period

### 8. Bank Reconciliation Statement
- Shows reconciled bank position

### 9. Audit Trail Report
- Lists all transactions with user ID, date/time
- Shows corrections and edits
- Essential for compliance

---

## Report Selection by Purpose

| Purpose | Reports |
|---------|---------|
| Daily management | Bank position, cash flow |
| Monthly accounts | P&L, TB, debtors aging |
| VAT filing | VAT report, sales/purchase daybooks |
| Year-end | P&L, Balance Sheet, adjustments journal |
| Audit | Audit trail, all journals, corrections |
| Management | Departmental P&L, budget vs actual |

---

## Backing Up Data

### Why Backup?

- Prevent data loss (hardware failure, theft, fire)
- Compliance with tax law (records must be kept for 6+ years)
- Ability to restore after system crash
- Versioning for audit purposes

### Backup Methods

| Method | Medium | Frequency | Pros | Cons |
|--------|--------|-----------|------|------|
| USB Drive | External storage | Daily/Weekly | Portable, simple | Can be lost, limited capacity |
| External HDD | Hard drive | Daily | Large capacity | Can fail |
| Cloud Backup | Online server | Real-time | Automatic, off-site | Subscription cost, internet needed |
| Network Drive | Server | Daily | Centralised | Requires IT setup |
| CD/DVD | Optical disc | Monthly | Permanent record | Small capacity, slow |

### 3-2-1 Backup Rule

- **3** copies of data
- **2** different media types
- **1** copy off-site

---

## Backup Procedure

### Step 1: Create Backup
```
Software Menu → File → Backup → Select Destination
```

### Step 2: Verify Backup
- Check file size matches expected
- Test restore on a test system periodically

### Step 3: Label Backup
```
[Company Name] — Backup — [Date] — Version [X]
Example: ABC Ltd — Backup — 31-01-2026 — V1
```

### Step 4: Store Securely
- Off-site copy in fireproof safe or cloud
- Password protect sensitive data

### Step 5: Document
- Keep a log of when backups were made
- Note any issues during backup

---

## Data Retention (Irish Revenue)

- **Books and records**: 6 years from end of tax year
- **Electronic records**: Must be readable for 6 years
- **Failure to retain**: Potential penalties

---

## Computerised Backup Checklist

| Action | Done |
|--------|------|
| Backup to external drive | |
| Backup to cloud | |
| Verify backup integrity | |
| Label with date/version | |
| Store off-site copy | |
| Document in backup log | |
| Test restore procedure | |


---

## Worked Examples & Deep Dive

### Key Financial Statements — More Detail

**Profit and Loss Account Layout:**
```
Sales                                 €100,000
Less: Cost of Sales
  Opening Stock                        €10,000
  Purchases                            €60,000
  Less: Closing Stock                 (€15,000)
  Cost of Sales                       (€55,000)
Gross Profit                           €45,000
Less: Expenses
  Wages                               €20,000
  Rent                                 €12,000
  Insurance                            €2,000
  Depreciation                        €3,000
  Total Expenses                      (€37,000)
Net Profit                             €8,000
```

**Balance Sheet Layout:**
```
Non-Current Assets
  Equipment                            €20,000
  Less: Depreciation                  (€3,000)     €17,000

Current Assets
  Stock                                €15,000
  Debtors                              €12,000
  Bank                                 €8,000      €35,000

Current Liabilities
  Creditors                           (€10,000)
  VAT Payable                         (€4,000)    (€14,000)

Working Capital                                   €21,000

Net Assets                                        €38,000

Financed By:
  Capital (Opening)                                €30,000
  Plus: Net Profit                                 €8,000
  Less: Drawings                                  (€6,000)
  Capital (Closing)                                €32,000
  Long-term Loan                                   €6,000
                                                   €38,000
```

### Backup Strategy for a Small Business

| Backup | Frequency | Medium | Location | Restore Time |
|--------|-----------|--------|----------|-------------|
| Daily | Every night | Cloud | Off-site | 1 hour |
| Weekly | Friday | External HDD | Office safe | 2 hours |
| Monthly | Month-end | USB | Bank safe deposit box | 3 hours |

### What to Keep for 6 Years (Revenue Requirement)

- Daybooks (Sales, Purchases, Cash Book, Petty Cash)
- Ledgers (all accounts)
- Trial balances
- VAT returns and supporting calculations
- Bank statements
- Invoices and credit notes (issued and received)
- Bank Reconciliation Statements
- Fixed asset register
- Payroll records (if applicable)

### Backup Verification Checklist

- [ ] Can the backup file be opened?
- [ ] Is the file size consistent with expected data volume?
- [ ] Does a test restore work on a different computer?
- [ ] Is the backup date-stamped and labelled?
- [ ] Is the off-site copy updated?
- [ ] Is the backup password-protected (if sensitive)?
