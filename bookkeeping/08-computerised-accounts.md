# Learning Outcome 8 — Computerised Processing

**Objective:** Process all tasks as per the manual ones using an accounts package, comparing manual and computerised results.

---

## Objective

Complete the same bookkeeping cycle in software that you performed manually. Verify that the computerised results match your manual calculations.

---

## Software Setup

### Step 1: Create Company
- Enter company name, address, VAT number
- Set accounting period (e.g., 01/01/2026 - 31/12/2026)
- Select chart of accounts (or create custom)

### Step 2: Configure VAT Rates
- Set up VAT codes for 23%, 13.5%, 0%, exempt
- Link VAT codes to relevant accounts

### Step 3: Enter Opening Balances
- Debtors, creditors, bank, capital
- Ensure opening trial balance matches manual records

---

## Processing Cycle in Software

### Sales
```
Manual: Invoice → Sales Day Book → Post to Ledgers
Computerised: Enter Sales Invoice → Auto-posts to Debtor + Sales + VAT
```

### Purchases
```
Manual: Invoice → Purchases Day Book → Post to Ledgers
Computerised: Enter Purchase Invoice → Auto-posts to Purchases + Creditor + VAT
```

### Bank
```
Manual: Cheques/Receipts → Cash Book → Post to Ledgers
Computerised: Enter Bank Receipts/Payments → Auto-posts to Bank + Debtor/Creditor
```

### Petty Cash
```
Manual: Vouchers → Petty Cash Book → Post to Nominal Ledger
Computerised: Enter Petty Cash Expenses → Allocates to expense accounts
```

---

## Reconciliation: Manual vs Computerised

For each stage, compare outputs:

| Stage | Manual Result | Computerised | Match? |
|-------|--------------|--------------|--------|
| Sales Day Book totals | €X | €X | Yes/No |
| Purchases Day Book totals | €X | €X | Yes/No |
| VAT totals | €X | €X | Yes/No |
| Debtors total | €X | €X | Yes/No |
| Creditors total | €X | €X | Yes/No |
| Trial Balance | €X | €X | Yes/No |
| Bank Reconciliation | €X | €X | Yes/No |

If results differ, investigate:
- Data entry error in one system
- Different VAT treatment
- Missing transaction
- Timing differences (bank reconciliation)

---

## Advantages in Practice

| Task | Manual Time | Computerised Time |
|------|-------------|-------------------|
| Enter 10 invoices | 30 min | 10 min |
| Post to ledgers | 20 min | Auto |
| Extract TB | 15 min | Instant |
| Bank reconciliation | 30 min | 15 min |
| VAT return | 45 min | 10 min |

---

## Key Reports to Compare

1. **Sales Day Book / Sales Journal** — total invoices posted
2. **Purchases Day Book / Purchase Journal** — total purchase invoices
3. **Aged Debtors Report** — outstanding customer balances
4. **Aged Creditors Report** — outstanding supplier balances
5. **Trial Balance** — all account balances
6. **VAT Control Account** — output vs input VAT summary
7. **Bank Reconciliation Statement** — reconciled bank balance


---

## Worked Examples & Deep Dive

### Comparing Manual vs Computerised — Step by Step

| Stage | Manual Process | Computerised Process | Verification |
|-------|---------------|---------------------|--------------|
| Sales invoice | Write in SDB → Post to ledger | Enter invoice once | Check debtor + sales + VAT posted |
| Purchase invoice | Write in PDB → Post to ledger | Enter bill once | Check creditor + purchases + VAT posted |
| Bank receipt | Write in Cash Book → Post to ledger | Select customer → Allocate → Save | Check debtor cleared, bank increased |
| Bank payment | Write in Cash Book → Post to ledger | Select supplier → Allocate → Save | Check creditor cleared, bank decreased |
| Trial Balance | Manual extraction | Auto-generated | Compare every balance |
| VAT Return | Manual calculation | Auto-generated | Compare output/input VAT totals |

### Key Reports to Compare in an Exam

In the project and practical exam, you'll be asked to print specific reports from the software:

| Report | What It Shows | Check Against |
|--------|---------------|---------------|
| Trial Balance | All account balances | Your manual TB |
| Sales Day Book (Journal) | All sales invoices posted | Your manual SDB totals |
| Purchase Day Book (Journal) | All purchase invoices posted | Your manual PDB totals |
| Aged Debtors | Customer balances + aging | Each debtor's ledger balance |
| Aged Creditors | Supplier balances + aging | Each creditor's ledger balance |
| VAT Control Account | Output vs Input VAT | Your manual VAT calculation |
| Bank Reconciliation | Reconciled bank position | Your manual reconciliation |

### Data Entry Efficiency

| Task | Manual | Computerised |
|------|--------|-------------|
| 10 credit sales invoices | 30 min to write + post | 10 min to enter |
| 5 supplier payments | 15 min to write cheques + post | 5 min to process |
| Trial balance | 20 min to extract | Instant |
| VAT return | 45 min to calculate | 2 min to run report |
| Month-end close | 3-4 hours | 30 min |

### Common Software-Specific Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Invoice posted to wrong customer | Customer selection error | Issue credit note, re-issue to correct customer |
| Duplicate invoice | Double entry | Delete or reverse duplicate |
| Incorrect opening balance | Data entry error | Adjust through journal |
| Bank reconciliation doesn't balance | Missing transaction or entry error | Check all items ticked, date range correct |
| VAT figures differ from manual | Different VAT rate applied or rate code error | Check VAT codes on each transaction |

### Practice

In your accounts package:
1. Enter the Jones Ltd transactions from LO3
2. Run the trial balance
3. Compare to your manual TB
4. Run the VAT report — does it match your calculation?
5. Print the sales and purchase daybooks — do the totals match your manual totals?
