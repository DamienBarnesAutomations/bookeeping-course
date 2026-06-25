# Learning Outcome 5 — Trial Balance

**Objective:** Extract a trial balance at the end of an accounting period.

---

## What is a Trial Balance?

A list of all general ledger account balances at a specific date. Used to verify that total debits = total credits.

```
                TRIAL BALANCE
              As at 31 January 2026

Account                    Debit (€)    Credit (€)
Bank                        15,000
Capital                                40,000
Sales                                20,000
Purchases                   12,000
Wages                        4,000
Rent                         2,000
VAT Payable                              2,300
Debtors                     25,000
Creditors                               10,000
Drawings                     4,000
Equipment                   10,000
                       ------------- -----------
                        72,000        72,000
                       ============= ===========
```

---

## How to Extract a Trial Balance

### Step 1: Calculate each ledger balance
For each account in the nominal ledger, calculate the closing balance.

| Account | Total Debits | Total Credits | Balance |
|---------|-------------|--------------|---------|
| Bank | 50,000 | 35,000 | 15,000 Dr |
| Capital | 0 | 40,000 | 40,000 Cr |
| Sales | 0 | 20,000 | 20,000 Cr |
| Purchases | 12,000 | 0 | 12,000 Dr |
| Wages | 4,000 | 0 | 4,000 Dr |

### Step 2: List all balances in two columns
Debit balances in left column, credit balances in right column.

### Step 3: Total both columns
They must be equal.

---

## Common Errors in Trial Balance

| Error | Effect |
|-------|--------|
| Single entry (only debit or credit posted) | Trial balance won't balance |
| Transposition error (123 written as 132) | Difference divisible by 9 |
| Wrong account type | Balance misclassified |
| Arithmetic error in balance calculation | Wrong balance entered |
| Omission of account | Missing from list entirely |

### If TB Doesn't Balance

1. **Calculate the difference** — is it divisible by 2? (Debit posted as credit)
2. **Is it divisible by 9?** — transposition error
3. **Check postings** — ensure each transaction has a corresponding entry
4. **Re-check balances** — recalculate each account total
5. **Suspense account** — temporarily park the difference while investigating

---

## Suspense Account

When the TB doesn't balance, enter the difference in a suspense account. Investigate and correct.

```
Dr Suspense A/c    €500
   Cr Bank A/c        €500
```
(After finding a bank undercast)

---

## Computerised TB

In any accounting package:
- Trial Balance is auto-generated
- Cannot be out of balance (software enforces double-entry)
- Can be viewed for any date range
- Drill-down capability — click a balance to see underlying transactions

Always compare your manual TB to the computerised TB as a check.
