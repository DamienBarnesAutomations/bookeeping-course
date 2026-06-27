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


---

## Worked Examples & Deep Dive

### Complete Posting Walkthrough

Using the Jones Ltd transactions from LO3 above:

**Step 1: Post Sales Day Book**

The SDB has total columns:
- Gross: €2,460
- VAT: €460
- Net: €2,000

**Double-entry from SDB:**
```
Dr A Ltd (Sales Ledger)        €2,460
   Cr Sales (Nominal Ledger)        €2,000
   Cr VAT Control (Nominal)          €460
```

**Step 2: Post Sales Returns Day Book**

SRDB totals: Gross €246, VAT €46, Net €200

```
Dr Sales Returns (Nominal)        €200
Dr VAT Control (Nominal)           €46
   Cr A Ltd (Sales Ledger)            €246
```

**Why reverse VAT on returns?** Because the original sale included output VAT. The return reduces the sale, so output VAT must be reduced too.

**Step 3: Post Purchases Day Book**

PDB totals: Gross €1,845 + €123 = €1,968, VAT €345 + €23 = €368, Net €1,500 + €100 = €1,600

```
Dr Purchases (Nominal)          €1,500
Dr Stationery (Nominal)           €100
Dr VAT Control (Nominal)          €368
   Cr B Ltd (Purchases Ledger)       €1,845
   Cr C Ltd (Purchases Ledger)       €123
```

**Step 4: Post Cash Book Receipts**

Cash sales: €984 (€800 net + €184 VAT)

```
Dr Bank (Nominal)                 €984
   Cr Sales (Nominal)                 €800
   Cr VAT Control (Nominal)           €184
```

Wait — this is a cash sale. In the Sales Day Book, we'd include cash sales too if we record all sales there. Alternatively, the cash sales entry in the cash book debits bank and we need to credit sales and VAT.

Actually, there are two approaches:
1. Record cash sales in Sales Day Book (as a line item) → then post as normal from SDB
2. Record directly in Cash Book and post to Sales from there

For simplicity, including cash sales in the SDB and posting from there is cleaner.

**Step 5: Post Cash Book Payments**

Rent: Dr Rent €1,000, Cr Bank €1,000

### The Ledger Account Format

```
DR                                  CR
| Date | Detail | Folio | Amount | | Date | Detail | Folio | Amount |
|------|--------|-------|--------| |------|--------|-------|--------|
```

Or the running balance format:

```
| Date | Detail | Folio | Debit | Credit | Balance |
|------|--------|-------|-------|--------|---------|
```

### Balancing a Ledger Account

At period end, each account is balanced:

1. Total both sides
2. Find the difference (the balance)
3. Enter the balance on the smaller side to make them equal
4. Carry the balance forward to the next period

**Example — A Ltd Account for January:**

| Date | Detail | Folio | Debit | Credit | Balance |
|------|--------|-------|-------|--------|---------|
| Jan 2 | Sales Inv 101 | SDB1 | 2,460 | | 2,460 Dr |
| Jan 6 | Credit Note 01 | SRDB1 | | 246 | 2,214 Dr |
| **Jan 31** | **Balance c/d** | | | **2,214** | **0** |
| Feb 1 | Balance b/d | | 2,214 | | 2,214 Dr |

### Control Accounts

**Debtors Control Account** (in Nominal Ledger) should equal the total of all individual debtor balances in the Sales Ledger.

```
Debtors Control (at period end) = Σ Individual Debtor Balances
```

If they don't match, there's a posting error somewhere.

**Example:**
- Debtors Control balance: €5,000
- A Ltd: €2,214 + B Ltd: €2,786 = €5,000 ✓

### Common Posting Errors

| Error | Effect |
|-------|--------|
| Posted to wrong customer | Debtors total still correct, but individual balances wrong |
| VAT not posted separately | VAT control account wrong |
| Only half the double entry posted | Trial balance won't balance |
| Posted gross as net | Both sales and VAT wrong |
| Wrong period | Period trial balance wrong |

### Practice

Post the following from daybooks:

**Sales Day Book:**
| Date | Inv | Customer | Gross | VAT | Net |
|------|-----|----------|-------|-----|-----|
| Jan 10 | 201 | X Ltd | 3,690 | 690 | 3,000 |
| Jan 12 | 202 | Y Ltd | 1,845 | 345 | 1,500 |

**Purchases Day Book:**
| Date | Inv | Supplier | Gross | VAT | Net |
|------|-----|----------|-------|-----|-----|
| Jan 11 | P01 | Z Ltd | 2,460 | 460 | 2,000 |

Show the journal entries and ledger accounts.
