# Learning Outcome 9 — Error Correction & Analysis

**Objective:** Analyse tasks completed making appropriate corrections to any errors and editing of data as directed.

---

## Types of Accounting Errors

### Errors Not Affecting Trial Balance
These do not cause the TB to disagree but need correction.

| Error Type | Description | Example |
|-----------|-------------|---------|
| Error of omission | Transaction not recorded at all | Sale invoice never entered |
| Error of commission | Correct amount, wrong account (same class) | Stationery posted to Motor Expenses |
| Error of principle | Correct amount, wrong account (different class) | Purchase of van posted to Purchases (should be Fixed Assets) |
| Error of original entry | Wrong amount entered in both accounts | €100 invoice entered as €1,000 |
| Complete reversal | Debit and credit reversed | Debited Sales, credited Bank instead of vice versa |
| Compensating error | Two errors cancel each other out | Sales understated by €100, Purchases understated by €100 |

### Errors Affecting Trial Balance
TB will not balance — difference must be found and corrected.

---

## Correction Methods

### 1. Journal Entry Method
Used to correct errors in both manual and computerised systems.

```
Dr Stationery              €100
   Cr Motor Expenses           €100
(Correction of error — stationery wrongly posted to motor expenses)
```

### 2. Contra Entry (Manual Systems)
For errors in the cash book or ledger.

### 3. Edit/Reverse (Computerised)
Most software allows:
- **Edit** — change a transaction directly (with audit trail)
- **Reverse** — create a reversing entry, then re-enter correctly
- **Credit Note** — issue credit note for incorrect invoice, re-issue

---

## Common Corrections

### Error 1: Goods sold on credit, invoice entered in Purchases Day Book
```
Dr Sales                  €1,000
   Dr Debtor              €1,230
   Cr Purchases              €1,000
   Cr VAT Control              €230
```

### Error 2: Cheque received from customer recorded as €500 instead of €5,000
```
Dr Bank                  €4,500
   Cr Debtor                 €4,500
(To correct undercast of €4,500)
```

### Error 3: Rent paid recorded as debit to Rent €1,000 and credit to Bank €100
```
Dr Rent                   €900
   Cr Bank                   €900
(Additional €900 to correct understated amounts)
```

### Error 4: Purchase of equipment posted to Purchases Account
```
Dr Equipment             €5,000
   Cr Purchases               €5,000
(Correction of principle — asset should not be in purchases)
```

---

## Suspense Account Corrections

When the TB fails to balance, the difference goes to Suspense. Each correction removes the error from Suspense.

| Suspense Balance | Correction | Effect on Suspense |
|-----------------|-----------|-------------------|
| Dr €500 (credit side understated) | Dr Expenses €500, Cr Suspense €500 | Cleared |
| Cr €500 (debit side understated) | Dr Suspense €500, Cr Income €500 | Cleared |

---

## Editing Data in Computerised Systems

### Best Practices
1. **Never delete** a transaction — reverse it instead
2. **Use credit notes** to correct sales invoices
3. **Use debit notes** to correct purchase invoices
4. **Check audit trail** — software logs who made changes
5. **Backup before bulk corrections**

### Step-by-Step Correction in Software

**Scenario**: Sales invoice for €1,230 posted to wrong customer.

1. Issue credit note for original invoice (reverses it)
2. Create new invoice with correct customer details
3. Verify debtor balances are now correct

---

## Analysis of Corrections

After corrections, verify:
- Trial Balance balances
- Debtors/Creditors control accounts agree with sales/purchases ledgers
- VAT control account shows correct net position
- All corrections have supporting documentation
- Audit trail shows clear reason for each correction


---

## Worked Examples & Deep Dive

### Complete Error Classification

| Error Type | Description | Does it affect TB? | Correction Method |
|-----------|-------------|-------------------|-------------------|
| Omission | Transaction not recorded at all | No (never entered) | Journal entry to record it |
| Commission | Wrong account, same class | No | Journal to transfer |
| Principle | Wrong account, different class | No | Journal to transfer |
| Original Entry | Wrong amount in both accounts | No | Journal to correct amount |
| Reversal | Debit and credit swapped | No (both sides exist) | Journal to reverse and re-enter |
| Omission in one account | Only one side posted | Yes | Add missing entry |
| Casting error | Wrong total in daybook | Yes | Correct the total + post adjustment |
| Transposition | Numbers reversed (e.g., 54 vs 45) | Usually yes | Journal to correct |

### Worked Examples of Each Error

**Error 1: Omission**
Goods sold to Customer X for €1,000 + €230 VAT — invoice never entered.

**Correction:** Record the original transaction now.
```
Dr Customer X         €1,230
   Cr Sales                €1,000
   Cr VAT Control           €230
```

**Error 2: Commission**
Stationery €100 posted to Office Equipment account (both are assets/expenses in the same class).

**Correction:**
```
Dr Stationery          €100
   Cr Office Equipment    €100
```
(Correcting the wrong classification)

**Error 3: Principle**
Purchase of a delivery van for €20,000 posted to Motor Expenses account.

**Correction:**
```
Dr Motor Vehicles      €20,000
   Cr Motor Expenses       €20,000
```
(Van is a fixed asset, not an expense — different class)

**Error 4: Original Entry**
An invoice for €1,230 was entered as €1,320 in both accounts.

**Correction:**
```
Dr Customer X           €90
   Cr Sales               €73.17
   Cr VAT Control         €16.83
```
(Reducing the overstatement: €1,320 − €1,230 = €90 gross difference)

**Error 5: Reversal**
Rent of €1,000 was posted as Dr Bank €1,000, Cr Rent €1,000.

**Correction:** Reverse the wrong entry, then enter correctly.
```
Dr Rent                €1,000
   Cr Bank                 €1,000    (Reverse)
Dr Rent                €1,000
   Cr Bank                 €1,000    (Correct entry)
```
Or more simply:
```
Dr Rent                €2,000
   Cr Bank                 €2,000
```
(This corrects the €1,000 understatement in Rent and the €1,000 understatement in Bank)

**Error 6: Casting Error in Daybook**
Sales Day Book was totalled as €12,000 but should be €12,500.

**Correction:**
```
Dr Debtors Control     €615 (€500 net + €115 VAT)
   Cr Sales                €500
   Cr VAT Control          €115
```

**Error 7: Transposition**
A credit sale of €1,230 was entered as €1,320 (transposition).

The difference is 1320 − 1230 = 90. 90 ÷ 9 = 10. Divisible by 9 = transposition.

**Correction:**
```
Dr Customer X           €90
   Cr Sales               €73.17
   Cr VAT Control         €16.83
```

### Correcting Through Suspense Account

When the TB fails to balance, the difference is put in Suspense.

**Scenario:** TB shows Debits €50,000, Credits €49,800. Difference = €200 (credit side short).

**Entry:**
```
Dr Suspense            €200
   Cr TB difference       €200    (brings TB to balance)
```

**Later found:** Sales undercast by €200.
```
Dr Suspense            €200
   Cr Sales                €200    (clears suspense, corrects sales)
```

### Reverse Process — Find the Error from Suspense

If Suspense account shows a balance of €X Dr, it means the credit side was understated by €X (or the debit side overstated by €X).

### Practice Error Correction

From the following TB errors, write the correcting entries:

1. Equipment purchase €5,000 posted to Repairs Account
2. Sales invoice for €3,690 omitted entirely (net €3,000, VAT €690)
3. A receipt from Customer A for €2,000 was debited to Bank and credited to Customer B
4. Wages of €1,500 posted as Dr Wages €1,500, Dr Bank €1,500 (wrong reversal)
5. TB difference of €350 — found to be a purchase undercast in PDB
