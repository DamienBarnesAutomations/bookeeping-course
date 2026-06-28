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


---

## Worked Examples & Deep Dive

### Full Trial Balance Extraction Example

**Opening Balances — 1 January:**
- Bank: €10,000 Dr
- Capital: €10,000 Cr
- (No debtors, no creditors, no stock)

**January Transactions:**
1. Credit sale to A Ltd: €2,460 (net €2,000, VAT €460)
2. Credit purchase from B Ltd: €1,845 (net €1,500, VAT €345)
3. Cash sales: €984 (net €800, VAT €184)
4. Paid rent: €1,000
5. Credit note to A Ltd: €246 (net €200, VAT €46)
6. Credit purchase stationery from C Ltd: €123 (net €100, VAT €23)
7. A Ltd paid their balance: €2,460 − €246 = €2,214
8. Paid B Ltd: €1,845

### Step 1: Calculate Each Ledger Balance

**Bank Account:**

| Date | Detail | Debit | Credit | Balance |
|------|--------|-------|--------|---------|
| Jan 1 | Opening | | | 10,000 Dr |
| Jan 4 | Cash sales | 984 | | 10,984 Dr |
| Jan 5 | Rent | | 1,000 | 9,984 Dr |
| Jan 7 | A Ltd payment | 2,214 | | 12,198 Dr |
| Jan 8 | Paid B Ltd | | 1,845 | **10,353 Dr** |

**Sales Account:**

| | Net (€) | Balance |
|---|---------|---------|
| Credit sales | 2,000 | 2,000 Cr |
| Cash sales | 800 | 2,800 Cr |
| Sales returns | (200) | **2,600 Cr** |

**Purchases Account:**

| | Net (€) | Balance |
|---|---------|---------|
| Credit purchase | 1,500 | **1,500 Dr** |

**Stationery Account:**

| | Net (€) | Balance |
|---|---------|---------|
| Credit purchase | 100 | **100 Dr** |

**Rent Account:**

| | Amount (€) | Balance |
|---|-----------|---------|
| Paid by cheque | 1,000 | **1,000 Dr** |

**A Ltd (Debtor):**

| Date | Detail | Debit | Credit | Balance |
|------|--------|-------|--------|---------|
| Jan 2 | Sales | 2,460 | | 2,460 Dr |
| Jan 6 | Returns | | 246 | 2,214 Dr |
| Jan 7 | Bank | | 2,214 | **0** |

**B Ltd (Creditor):**

| Date | Detail | Debit | Credit | Balance |
|------|--------|-------|--------|---------|
| Jan 3 | Purchases | | 1,845 | 1,845 Cr |
| Jan 8 | Payment | 1,845 | | **0** |

**C Ltd (Creditor):**

| Date | Detail | Debit | Credit | Balance |
|------|--------|-------|--------|---------|
| Jan 7 | Stationery | | 123 | **123 Cr** |

**VAT Control Account:**

| Detail | Debit | Credit | Balance |
|--------|-------|--------|---------|
| Output VAT on credit sales | | 460 | 460 Cr |
| Output VAT on cash sales | | 184 | 644 Cr |
| VAT on returns | 46 | | 598 Cr |
| Input VAT on purchases | 345 | | 253 Cr |
| Input VAT on stationery | 23 | | **230 Cr** |

**Capital Account:**

| Detail | Amount | Balance |
|--------|--------|---------|
| Opening | 10,000 | **10,000 Cr** |

### Step 2: Trial Balance

| Account | Dr (€) | Cr (€) |
|---------|-------|-------|
| Bank | 10,353 | |
| Capital | | 10,000 |
| Sales | | 2,600 |
| Purchases | 1,500 | |
| Stationery | 100 | |
| Rent | 1,000 | |
| VAT Control | | 230 |
| C Ltd (Creditor) | | 123 |
| **Total** | **12,953** | **12,953** |

It balances!

### What If It Doesn't Balance?

**Systematic approach:**

1. **Calculate the difference:** €X
2. **Is it divisible by 2?** You may have put a debit on the credit side (or vice versa)
3. **Is it divisible by 9?** You may have a transposition error (e.g., 123 vs 132)
4. **Check totals:** Re-add each column
5. **Check balances:** Recalculate each ledger balance
6. **Check postings:** Did every debit have a corresponding credit?
7. **Check opening balances:** Were they entered correctly?

**Example:** Trial balance shows Dr €12,953, Cr €12,943. Difference = €10.

- Divisible by 2? Yes — check if a €5 amount was debited instead of credited (then the error would be €5 × 2 = €10)
- Actually, if a €10 debit was posted as a credit, the difference would be €20 (€10 × 2). So €10 is not divisible by 2.
- Divisible by 9? €10 / 9 = 1.11 — no.
- Check each account. Let's say Rent should be €1,010 but was entered as €1,000. Difference = €10.

### Suspense Account in Practice

If you can't find the error immediately:

```
Dr Suspense                €10
   Cr Trial Balance diff       €10
```

This makes the TB balance. Then investigate each error and correct through the suspense account.

### Practice: Find the Error

| Account | Dr (€) | Cr (€) |
|---------|-------|-------|
| Bank | 5,000 | |
| Capital | | 8,000 |
| Sales | | 12,000 |
| Purchases | 7,000 | |
| Wages | 3,000 | |
| Rent | 1,500 | |
| Equipment | 4,000 | |
| Debtors | | 500 |
| **Total** | **20,500** | **20,500** |

**Question:** Does this TB balance? If so, is there an underlying error?

**Answer:** The TB balances at €20,500, so there is no arithmetic imbalance. However, Debtors is an asset and should appear on the **debit** side, not the credit side. This is an **error of principle** — one that does not cause the TB to disagree but produces a misleading balance sheet.

For the TB to still balance with Debtors on the wrong side, there must be a **compensating error** elsewhere: another account is also on the wrong side by €500, masking the first mistake. This is a classic example of why a balanced TB does not guarantee correct accounts.

The correction once the errors are found:
```
Dr Debtors        €500
   Cr [wrong account]  €500
```
(Transfer Debtors from the credit side to the debit side, and reverse the compensating error in the other account.)
