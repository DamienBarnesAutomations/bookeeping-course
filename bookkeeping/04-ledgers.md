# Learning Outcome 4 — Posting to Ledgers

**Objective:** Post the information from the daybooks to the appropriate accounts in the ledgers.

---

## The Ledger System

### Nominal Ledger (General Ledger)
Contains all accounts: assets, liabilities, capital, income, expenses.

### Sales Ledger (Debtors Ledger)
Individual accounts for each customer who buys on credit.

### Purchases Ledger (Creditors Ledger)
Individual accounts for each supplier the business owes.

---

## Double-Entry Posting Rules

| Transaction | Debit | Credit |
|------------|-------|--------|
| Credit sale | Debtor (Sales Ledger) | Sales (Nominal Ledger) |
| Cash received from debtor | Bank (Cash Book) | Debtor (Sales Ledger) |
| Credit purchase | Purchases (Nominal Ledger) | Creditor (Purchases Ledger) |
| Payment to creditor | Creditor (Purchases Ledger) | Bank (Cash Book) |
| VAT on sales | Debtor (full amount) | VAT on Sales (Nominal) |
| VAT on purchases | VAT on Purchases (Nominal) | Creditor (full amount) |

---

## Worked Example: Posting from Daybooks

### Step 1: Sales Day Book
```
Date | Inv  | Customer  | Gross  | VAT  | Net
Jan 1| 001  | ABC Ltd   | 1,230  | 230  | 1,000
```

### Step 2: Post to Ledgers

**Debtor Account (ABC Ltd in Sales Ledger)**
```
Date | Detail       | Folio | Debit  | Credit | Balance
Jan 1| Sales + VAT  | SDB1  | 1,230  |        | 1,230 Dr
```

**Sales Account (Nominal Ledger)**
```
Date | Detail       | Folio | Debit  | Credit | Balance
Jan 1| ABC Ltd      | SDB1  |        | 1,000  | 1,000 Cr
```

**VAT on Sales Account (Nominal Ledger)**
```
Date | Detail       | Folio | Debit  | Credit | Balance
Jan 1| ABC Ltd      | SDB1  |        | 230    | 230 Cr
```

### Step 3: Cash Book → Ledgers

When ABC Ltd pays:
```
Date | Detail  | Receipts
Jan 15| ABC Ltd | 1,230
```

**Post to Nominal Ledger:**
- Debit Bank Account €1,230
- Credit ABC Ltd (Sales Ledger) €1,230

**ABC Ltd Account now shows:**
```
Date | Detail         | Debit  | Credit | Balance
Jan 1| Sales          | 1,230  |        | 1,230 Dr
Jan 15| Bank         |        | 1,230  | 0
```

---

## Chart of Accounts (Sample)

| Code | Account Name | Type |
|------|-------------|------|
| 1000 | Bank Account | Asset |
| 1100 | Debtors Control | Asset |
| 1200 | VAT Reclaimable | Asset |
| 2000 | Creditors Control | Liability |
| 2100 | VAT Payable | Liability |
| 3000 | Capital | Equity |
| 4000 | Sales | Income |
| 5000 | Purchases | Expense |
| 6000 | Wages | Expense |
| 7000 | Rent | Expense |

---

## Computerised Posting

In Sage/QuickBooks:
1. Enter sales invoice → auto-debits debtor, auto-credits sales and VAT
2. Receive payment → auto-debits bank, auto-credits debtor
3. Enter purchase bill → auto-debits purchases and VAT, auto-credits creditor
4. Pay bill → auto-debits creditor, auto-credits bank

The software performs all double-entry automatically, but you must understand the underlying logic to verify the output.
