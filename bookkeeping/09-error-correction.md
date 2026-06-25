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
