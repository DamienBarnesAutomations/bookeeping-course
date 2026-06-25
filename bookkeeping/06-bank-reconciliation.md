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
1. Cheque issued to supplier €800 not yet presented
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

```
BANK RECONCILIATION STATEMENT
As at 31 January 2026

Balance per updated Cash Book                      €4,800

ADD: Unpresented cheques
  Cheque No. 456 — Supplier A                      €800
  Total additions                                   €800
                                                    5,600

LESS: Unlodged lodgements
  Lodgement 31 Jan — Customer B                   (€1,200)

Balance per Bank Statement                         €4,400
```

Wait — the bank statement shows €4,200. Let me re-check. We need to start from either the cash book or the bank statement and reconcile to the other.

### Correct Method

**Starting from Cash Book to Bank Statement:**

```
Balance per Cash Book (updated)                    €4,800 Dr
Add: Unpresented cheques                             €800
Less: Unlodged lodgements                          (€1,200)
                                                    --------
Balance per Bank Statement                          €4,400 Cr
```

**Starting from Bank Statement to Cash Book:**

```
Balance per Bank Statement                         €4,200 Cr
Add: Unlodged lodgements                           €1,200
Less: Unpresented cheques                           (€800)
                                                    --------
Balance per Cash Book before adjustments           €4,600 Dr

Cash Book adjustments needed:
  Less: Bank charges                                (€150)
  Less: Direct debit                                 (€50)
                                                    --------
Balance per Cash Book (updated)                     €4,800 Dr
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
