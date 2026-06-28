# Learning Outcome 6 — Bank Reconciliation Statement

**Objective:** Prepare a Bank Reconciliation Statement from data supplied.

---

## What is Bank Reconciliation?

The process of comparing the bank statement balance with the cash book (business records) balance and explaining any differences.

### Why Differences Occur

| Reason | Explanation |
|--------|-------------|
| Unlodged cheques | Cheques received but not yet cleared by bank |
| Unpresented cheques | Cheques issued but not yet presented to bank |
| Bank charges | Charges deducted by bank not yet in cash book |
| Direct debits / standing orders | Automatic payments not yet recorded |
| Lodgements not credited | Deposits made but not yet on bank statement |
| Errors | Mistakes in cash book or bank statement |

---

## Worked Example

### Given Data

**Cash Book Balance (Bank column):** €5,000 Dr
**Bank Statement Balance:** €4,200 Cr

**Reconciling Items:**
1. Cheque issued to supplier €600 not yet presented
2. Lodgement of €1,200 not yet on bank statement
3. Bank charges €150 not in cash book
4. Direct debit €50 not in cash book

### Step 1: Update Cash Book

First, record items in the cash book that are on the bank statement but not yet entered.

| Date | Detail | Receipts | Payments | Balance |
|------|--------|----------|----------|---------|
| Jan 31| Balance b/d | | | 5,000 |
| Jan 31| Bank charges | | 150 | 4,850 |
| Jan 31| Direct debit | | 50 | 4,800 |

**Updated Cash Book Balance:** €4,800 Dr

### Step 2: Prepare Bank Reconciliation Statement

**Method A — Starting from Updated Cash Book:**

```
BANK RECONCILIATION STATEMENT
As at 31 January 2026

Balance per Updated Cash Book                      €4,800 Dr

Add: Unpresented cheques
  Cheque No. 456 — Supplier A                       €600
                                                    €5,400

Less: Unlodged lodgements
  Lodgement 31 Jan — Customer B                   (€1,200)

Balance per Bank Statement                         €4,200 Cr ✓
```

**Method B — Starting from Bank Statement:**

```
Balance per Bank Statement                         €4,200 Cr

Add: Unlodged lodgements                           €1,200
Less: Unpresented cheques                           (€600)
                                                   --------
Balance per Updated Cash Book                      €4,800 Dr ✓
```

---

## Bank Reconciliation Process

1. **Tick off** matching items in cash book and bank statement
2. **Identify unticked items** in both
3. **Update cash book** for bank charges, interest, direct debits
4. **Identify**: Unlodged lodgements (in cash book, not in bank statement)
5. **Identify**: Unpresented cheques (in cash book, not in bank statement)
6. **Prepare** the reconciliation statement

---

## Common Adjustments to Cash Book

| Item | Entry |
|------|-------|
| Bank charges | Dr Bank Charges, Cr Bank |
| Interest received | Dr Bank, Cr Interest Income |
| Direct debit paid | Dr Expense, Cr Bank |
| Standing order | Dr Expense, Cr Bank |
| Lodgement credited | Already in cash book — no adjustment needed |
| Dishonoured cheque | Dr Debtor, Cr Bank (reverse the receipt) |

---

## Computerised Reconciliation

Most accounting packages have a bank reconciliation module:
1. Enter bank statement closing balance
2. Tick off matching transactions
3. Add reconciling items
4. Software calculates the difference and flags if it doesn't reconcile


---

## Worked Examples & Deep Dive

### Full Worked Example with Error Finding

**Given:**

Cash Book balance (Dr): €4,200
Bank Statement balance (Cr): €3,695

**Reconciling items identified:**
1. Cheque 456 for €680 to Supplier A — not yet presented
2. Lodgement of €1,200 on 31 Jan — not yet on statement
3. Bank charges of €45 on statement — not in cash book
4. Direct debit for insurance €120 on statement — not in cash book
5. Cheque 450 for €350 to Supplier B — entered in cash book as €530 (transposition error)

### Step 1: Correct the Cash Book

First, correct errors in the cash book.

**Error correction:** Cheque 450 was recorded as €530 instead of €350.
- Overstated by €180
- Need to add back €180 to the cash book

| Date | Detail | Receipts | Payments | Balance |
|------|--------|----------|----------|---------|
| Jan 31 | Balance b/d | | | 4,200 |
| Jan 31 | Correction — Cheque 450 overstatement | 180 | | 4,380 |
| Jan 31 | Bank charges | | 45 | 4,335 |
| Jan 31 | Direct debit — Insurance | | 120 | 4,215 |

**Updated Cash Book balance:** €4,215 Dr

### Step 2: Reconciliation

```
Balance per Cash Book (updated)                    €4,215 Dr

Add: Unpresented Cheques
  Cheque 456 — Supplier A                         €680
                                                    €4,895

Less: Unlodged Lodgements                          (€1,200)

Balance per Bank Statement                         €3,695 Cr ✓
```

The statement confirms — the BRS reconciles to the bank statement balance of €3,695.

### Common Bank Reconciliation Issues

| Issue | How to Handle |
|-------|---------------|
| Bank charges | Update cash book (Dr Bank Charges, Cr Bank) |
| Direct debits | Update cash book (Dr Expense, Cr Bank) |
| Standing orders | Update cash book (Dr Expense, Cr Bank) |
| Interest received | Update cash book (Dr Bank, Cr Interest Income) |
| Dishonoured cheques | Reverse the original receipt (Dr Debtor, Cr Bank) |
| Errors in cash book | Correct with journal entry |
| Errors on bank statement | Contact bank (don't adjust cash book) |

### Practice

**Cash Book:** €8,180 Dr
**Bank Statement:** €7,600 Cr

**Items:**
1. Cheque 789 for €950 — unpresented
2. Lodgement €1,200 — unlodged
3. Bank interest €25 — not in cash book
4. Direct debit €175 — not in cash book
5. Cheque 777 for €420 — recorded in cash book as €240 (undercast)

**Find:** Updated cash book balance and bank reconciliation.
