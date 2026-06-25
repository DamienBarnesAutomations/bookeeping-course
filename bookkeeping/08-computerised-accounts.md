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
